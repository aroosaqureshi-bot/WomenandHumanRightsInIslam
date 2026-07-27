// Knowledge base for the AI Islamic Rights Assistant.
// Each entry pairs keywords with a respectful, sourced answer.

export type KnowledgeEntry = {
  id: string;
  keywords: string[];
  answer: string;
  answerUrdu: string;
  references: { text: string; source: string }[];
};

export const knowledgeBase: KnowledgeEntry[] = [
  {
    id: 'women_rights_general',
    keywords: ['women rights', 'women right', 'woman rights', 'women in islam', 'rights of women', 'aurat', 'khawateen', 'orat', 'aurat ke huqooq'],
    answer:
      'Islam grants women a comprehensive set of rights: the right to education, to own and manage property, to inherit, to consent to marriage, to work and earn, to financial security, and to be treated with respect and dignity. The Quran affirms that women have rights similar to those of men (2:228), and the Prophet (PBUH) taught that the best of people are those best to their women.',
    answerUrdu:
      'اسلام عورتوں کو حقوق کا ایک مکمل نظام دیتا ہے: تعلیم کا حق، ملکیت رکھنے اور اس کا انتظام کرنے کا حق، وراثت کا حق، شادی میں رضامندی کا حق، کام اور کمائی کا حق، مالی تحفظ کا حق، اور احترام و وقار کا حق۔ قرآن تصدیق کرتا ہے کہ عورتوں کے حقوق مردوں کے حقوق کے برابر ہیں (۲:۲۲۸)۔',
    references: [
      { text: 'And for them [women] are rights similar to those [of men] over them in kindness.', source: 'Quran 2:228' },
      { text: 'The best of you are those who are best to their women.', source: 'Hadith — Tirmidhi 3895' },
      { text: 'Indeed, the Muslim men and Muslim women... Allah has prepared for them forgiveness and a great reward.', source: 'Quran 33:35' },
      { text: 'And live with them [wives] in kindness.', source: 'Quran 4:19' },
      { text: 'Women are the counterparts of men.', source: 'Hadith — Abu Dawud 236' },
    ],
  },
  {
    id: 'human_rights_general',
    keywords: ['human rights', 'rights in islam', 'what are human rights', 'insani huqooq', 'basic rights'],
    answer:
      'Islam established human rights over 1,400 years ago, including: the right to life (5:32), the right to justice (4:135), the right to education, the right to equality, the right to freedom of religion (2:256), and respect for human dignity (17:70). These rights apply to all people regardless of faith, race, or gender.',
    answerUrdu:
      'اسلام نے ۱۴۰۰ سال پہلے انسانی حقوق قائم کیے، جن میں شامل ہیں: زندگی کا حق (۵:۳۲)، انصاف کا حق (۴:۱۳۵)، تعلیم کا حق، مساوات کا حق، مذہبی آزادی کا حق (۲:۲۵۶)، اور انسانی وقار کا احترام (۱۷:۷۰)۔ یہ حقوق سب پر لاگو ہوتے ہیں۔',
    references: [
      { text: 'Whoever kills a soul unjustly — it is as if he had slain mankind entirely.', source: 'Quran 5:32' },
      { text: 'Be persistently standing firm in justice, witnesses for Allah.', source: 'Quran 4:135' },
      { text: 'There shall be no compulsion in [acceptance of] the religion.', source: 'Quran 2:256' },
    ],
  },
  {
    id: 'justice',
    keywords: ['justice', 'adl', 'insaf', 'fairness', 'what does quran say about justice'],
    answer:
      'Justice (adl) is a central Quranic value. Allah commands: "Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives" (4:135). Justice must be upheld even against one\u2019s own interests, and applies to all people equally regardless of their status.',
    answerUrdu:
      'انصاف (عدل) قرآن کی مرکزی قدر ہے۔ اللہ حکم دیتا ہے: "انصاف میں ثابت قدم رہو، اللہ کے لیے گواہ بنو، خواہ تمہارے خلاف یا والدین اور رشتہ داروں کے خلاف ہو" (۴:۱۳۵)۔ انصاف کو ہر حال میں قائم رکھنا ہے۔',
    references: [
      { text: 'Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves.', source: 'Quran 4:135' },
      { text: 'Indeed, Allah orders justice and good conduct.', source: 'Quran 16:90' },
    ],
  },
  {
    id: 'education',
    keywords: ['education', 'knowledge', 'ilm', 'study', 'taleem', 'school', 'seeking knowledge'],
    answer:
      'Education is a fundamental right in Islam for both men and women. The Prophet (PBUH) said: "Seeking knowledge is an obligation upon every Muslim" (Ibn Majah) — the word "Muslim" includes both genders. Throughout history, women like Aisha (RA) and Fatima al-Fihri were leading scholars and educators.',
    answerUrdu:
      'تعلیم اسلام میں مرد اور عورت دونوں کے لیے بنیادی حق ہے۔ نبی کریم ﷺ نے فرمایا: "علم حاصل کرنا ہر مسلمان پر فرض ہے" (ابن ماجہ)۔ تاریخ میں عائشہ رضی اللہ عنہا اور فاطمہ الفہری جیسی عورتیں علماء اور معلمہ تھیں۔',
    references: [
      { text: 'Seeking knowledge is an obligation upon every Muslim.', source: 'Hadith — Ibn Majah 224' },
      { text: 'Are those who know equal to those who do not know?', source: 'Quran 39:9' },
    ],
  },
  {
    id: 'inheritance',
    keywords: ['inheritance', 'waris', 'wirathat', 'women inheritance', 'property', 'milk'],
    answer:
      'Islam granted women inheritance rights over 1,400 years ago. The Quran states: "For women is a share of what the parents and close relatives leave" (4:7). Daughters, wives, and mothers each receive defined shares that cannot be denied. Women also have the right to own property independently — a husband has no claim over his wife\u2019s wealth.',
    answerUrdu:
      'اسلام نے ۱۴۰۰ سال پہلے عورتوں کو وراثت کا حق دیا۔ قرآن کہتا ہے: "عورتوں کے لیے اس میں حصہ ہے جو والدین اور قریبی رشتہ دار چھوڑیں" (۴:۷)۔ بیٹیوں، بیویوں اور ماؤں کو مقررہ حصے ملتے ہیں۔',
    references: [
      { text: 'For women is a share of what the parents and close relatives leave.', source: 'Quran 4:7' },
      { text: 'For men is a share of what they have earned, and for women is a share of what they have earned.', source: 'Quran 4:32' },
    ],
  },
  {
    id: 'marriage_consent',
    keywords: ['marriage', 'consent', 'forced marriage', 'shadi', 'nikah', 'choose husband', 'marriage choice'],
    answer:
      'A woman\u2019s consent is essential for a valid marriage in Islam. Forced marriage is prohibited. The Prophet (PBUH) said: "A previously married woman has more right to her person than her guardian" (Bukhari), and he annulled the marriage of a woman married against her will. A woman has the right to accept or reject any suitor.',
    answerUrdu:
      'اسلام میں شادی کے لیے عورت کی رضامندی لازمی ہے۔ جبری شادی ممنوع ہے۔ نبی کریم ﷺ نے فرمایا: "ایک مرتبہ شادی شدہ عورت کو اپنے بارے میں اس کے ولی سے زیادہ حق ہے" (بخاری)۔',
    references: [
      { text: 'A previously married woman has more right to her person than her guardian.', source: 'Hadith — Bukhari' },
      { text: 'A previously married woman has more right to her person than her guardian.', source: 'Hadith — Muslim 1421' },
      { text: 'It is not lawful for you to inherit women by compulsion.', source: 'Quran 4:19' },
    ],
  },
  {
    id: 'freedom_religion',
    keywords: ['freedom of religion', 'no compulsion', 'religious freedom', 'forced conversion', 'mazhabi azadi'],
    answer:
      'Islam explicitly forbids forced conversion. The Quran states: "There shall be no compulsion in [acceptance of] the religion" (2:256). Faith must come from the heart; forcing someone to convert contradicts Islamic teachings. Non-Muslims living under Islamic governance historically had the right to worship freely.',
    answerUrdu:
      'اسلام جبری تبدیلی مذہب کو واضح طور پر منع کرتا ہے۔ قرآن کہتا ہے: "دین میں کوئی زبردستی نہیں" (۲:۲۵۶)۔ ایمان دل سے آنا چاہیے۔',
    references: [
      { text: 'There shall be no compulsion in [acceptance of] the religion.', source: 'Quran 2:256' },
    ],
  },
  {
    id: 'mother_status',
    keywords: ['mother', 'mother status', 'mother in islam', 'maa', 'ma', 'parents', 'walidain'],
    answer:
      'Islam elevates the mother to the highest rank of honor. When asked who deserves the most companionship, the Prophet (PBUH) replied "your mother" three times before mentioning the father (Bukhari). The Quran commands: "Your Lord has decreed that you worship none but Him, and treat parents with excellence" (17:23).',
    answerUrdu:
      'اسلام ما کو اعلیٰ ترین مقام دیتا ہے۔ جب پوچھا گیا کون سب سے زیادہ خیال کا حقدار ہے، نبی کریم ﷺ نے تین بار "تمہاری ما" فرمایا پھر باپ کا ذکر کیا (بخاری)۔',
    references: [
      { text: 'Your mother, then your mother, then your mother, then your father.', source: 'Hadith — Bukhari 5971' },
      { text: 'Your Lord has decreed that you worship none but Him, and treat parents with excellence.', source: 'Quran 17:23' },
      { text: 'Paradise lies beneath the feet of mothers.', source: 'Hadith — Nasa\'i 3104' },
    ],
  },
  {
    id: 'dignity',
    keywords: ['dignity', 'human worth', 'karamat', 'insani waqar', 'honor'],
    answer:
      'Islam teaches that every human being carries inherent dignity. The Quran declares: "We have certainly honored the children of Adam" (17:70). This honor applies to all people — regardless of race, gender, or faith — and forbids humiliation, abuse, and degradation of any person.',
    answerUrdu:
      'اسلام سکھاتا ہے کہ ہر انسان فطری وقار رکھتا ہے۔ قرآن اعلام کرتا ہے: "ہم نے بنی آدم کو یقیناً عزت و مرتبہ بخشی" (۱۷:۷۰)۔ یہ وقار سب پر لاگو ہوتا ہے۔',
    references: [
      { text: 'We have certainly honored the children of Adam.', source: 'Quran 17:70' },
    ],
  },
  {
    id: 'equality',
    keywords: ['equality', 'musawat', 'barabari', 'equal', 'racism', 'race'],
    answer:
      'Islam teaches the equality of all human beings. In his Last Sermon, the Prophet (PBUH) said: "An Arab has no superiority over a non-Arab, nor a non-Arab over an Arab... except by piety and good action." The Quran affirms that all humanity was created from a single soul (4:1).',
    answerUrdu:
      'اسلام تمام انسانوں کی مساوات سکھاتا ہے۔ اپنے آخری خطبے میں نبی کریم ﷺ نے فرمایا: "عربی کو غیر عربی پر کوئی برتری نہیں... سوائے تقویٰ اور نیک عمل کے۔"',
    references: [
      { text: 'An Arab has no superiority over a non-Arab except by piety and good action.', source: 'Prophet Muhammad (PBUH) — Last Sermon' },
      { text: 'O mankind, fear your Lord, who created you from one soul.', source: 'Quran 4:1' },
    ],
  },
  {
    id: 'women_work',
    keywords: ['women work', 'women job', 'women earn', 'women business', 'khadijah', 'aurat job'],
    answer:
      'Islam permits women to work, earn, and engage in business while maintaining their dignity. Khadijah (RA), the Prophet\u2019s first wife, was a successful and wealthy merchant. A woman\u2019s earnings belong entirely to her — her husband has no claim over them.',
    answerUrdu:
      'اسلام عورتوں کو اپنا وقار برقرار رکھتے ہوئے کام، کمائی اور کاروبار کی اجازت دیتا ہے۔ خدیجہ رضی اللہ عنہا، نبی کی پہلی زوجہ، ایک کامیاب تاجر تھیں۔ عورت کی کمائی مکمل اس کی ہے۔',
    references: [
      { text: 'For women is a share of what they have earned.', source: 'Quran 4:32' },
      { text: 'For men is a share of what they have earned, and for women is a share of what they have earned.', source: 'Quran 4:32' },
    ],
  },
];

export function findAnswer(query: string): KnowledgeEntry | null {
  const q = query.toLowerCase().trim();
  if (!q) return null;
  let best: KnowledgeEntry | null = null;
  let bestScore = 0;
  for (const entry of knowledgeBase) {
    let score = 0;
    for (const kw of entry.keywords) {
      if (q.includes(kw)) score += kw.length;
    }
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return bestScore > 0 ? best : null;
}
