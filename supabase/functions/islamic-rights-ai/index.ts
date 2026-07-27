import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SYSTEM_PROMPT = `You are the Islamic Rights Assistant, a respectful and knowledgeable guide on human and women's rights in Islam.

Guidelines:
- Answer only questions about human rights, women's rights, justice, equality, dignity, education, inheritance, marriage, and related topics in Islam.
- Ground every answer in the Quran and authentic Hadith (Bukhari, Muslim, Tirmidhi, Abu Dawud, Ibn Majah, Nasa'i, Ahmad).
- Include at least one Quranic verse or Hadith reference with its citation (e.g., "Quran 4:32" or "Hadith — Tirmidhi 3895") whenever relevant.
- Be concise, respectful, and educational. Avoid sectarian bias.
- If a question is outside the scope of Islamic rights, politely redirect the user to relevant topics.
- Respond in the same language as the user's message (English or Urdu).`;

type Reference = { text: string; source: string };

function extractReferences(text: string): Reference[] {
  const refs: Reference[] = [];
  const lines = text.split("\n");
  let currentRef: Reference | null = null;

  for (const line of lines) {
    const quranMatch = line.match(/Quran\s+(\d+:\d+)/i);
    const hadithMatch = line.match(/Hadith\s*[—-]\s*([A-Za-z'.\s]+?)(?:\s+(\d+))?/i);

    if (quranMatch) {
      if (currentRef) refs.push(currentRef);
      currentRef = { text: line.trim().replace(/^["']|["']$/g, ""), source: `Quran ${quranMatch[1]}` };
    } else if (hadithMatch) {
      if (currentRef) refs.push(currentRef);
      const source = hadithMatch[2]
        ? `Hadith — ${hadithMatch[1].trim()} ${hadithMatch[2]}`
        : `Hadith — ${hadithMatch[1].trim()}`;
      currentRef = { text: line.trim().replace(/^["']|["']$/g, ""), source };
    }
  }
  if (currentRef) refs.push(currentRef);
  return refs.slice(0, 4);
}

function stripReferences(text: string): string {
  return text
    .split("\n")
    .filter((line) => !/Quran\s+\d+:\d+/i.test(line) && !/Hadith\s*[—-]/i.test(line))
    .join("\n")
    .trim();
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { message, language } = await req.json();

    if (!message || typeof message !== "string") {
      return new Response(
        JSON.stringify({ error: "Message is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiKey = Deno.env.get("GEMINI_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "Gemini API key not configured" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const langInstruction = language === "ur"
      ? "Respond in Urdu (اردو)."
      : "Respond in English.";

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [
          {
            role: "user",
            parts: [{ text: `${langInstruction}\n\nUser question: ${message}` }],
          },
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 800,
        },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(
        JSON.stringify({ error: `Gemini API error: ${response.status}` }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const rawText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I'm sorry, I couldn't generate a response. Please try again.";

    const references = extractReferences(rawText);
    const answer = stripReferences(rawText);

    return new Response(
      JSON.stringify({ answer, references }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Internal server error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
