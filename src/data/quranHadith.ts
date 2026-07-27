export type Verse = {
  id: string;
  arabic: string;
  translation: string;
  translationUrdu: string;
  reference: string;
  theme: string;
  explanation: string;
};

export const quranVerses: Verse[] = [
  {
    id: 'v1',
    arabic: 'وَلَقَدْ كَرَّمْنَا بَنِي آدَمَ',
    translation: 'And We have certainly honored the children of Adam.',
    translationUrdu: 'اور ہم نے بنی آدم کو یقیناً عزت و مرتبہ بخشی۔',
    reference: 'Quran 17:70',
    theme: 'Human Dignity',
    explanation:
      'This verse establishes the inherent dignity of every human being. All people — regardless of gender, race, or status — are honored by Allah and deserve respect.',
  },
  {
    id: 'v2',
    arabic: 'لَا إِكْرَاهَ فِي الدِّينِ',
    translation: 'There shall be no compulsion in [acceptance of] the religion.',
    translationUrdu: 'دین کے قبول میں کوئی زبردستی نہیں۔',
    reference: 'Quran 2:256',
    theme: 'Freedom of Religion',
    explanation:
      'Faith is a matter of free choice. No one can be forced to accept or abandon a religion, making freedom of belief a fundamental Islamic principle.',
  },
  {
    id: 'v3',
    arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ',
    translation: 'Indeed, Allah orders justice and good conduct.',
    translationUrdu: 'بے شک اللہ انصاف اور بھلائی کا حکم دیتا ہے۔',
    reference: 'Quran 16:90',
    theme: 'Justice',
    explanation:
      'Justice and kindness are commanded together, forming the moral core of Islamic society. They apply to all dealings — personal, social, and legal.',
  },
  {
    id: 'v4',
    arabic: 'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ',
    translation: 'And for them [women] are rights similar to those [of men] over them in kindness.',
    translationUrdu: 'اور عورتوں کے حقوق مردوں کے حقوق کے برابر ہیں، بھلائی کے ساتھ۔',
    reference: 'Quran 2:228',
    theme: "Women's Rights",
    explanation:
      'The Quran establishes a balanced framework of reciprocal rights and responsibilities between spouses, affirming women as equal partners in marriage.',
  },
  {
    id: 'v5',
    arabic: 'وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا تَرَكَ الْوَالِدَانِ وَالْأَقْرَبُونَ',
    translation: 'For women is a share of what the parents and close relatives leave.',
    translationUrdu: 'عورتوں کے لیے اس میں حصہ ہے جو والدین اور قریبی رشتہ دار چھوڑیں۔',
    reference: 'Quran 4:7',
    theme: 'Inheritance',
    explanation:
      'Women were granted inheritance rights by Islam over a thousand years before Western legal systems did so, ensuring their economic independence.',
  },
  {
    id: 'v6',
    arabic: 'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',
    translation: 'Whoever kills a soul unjustly — it is as if he had slain mankind entirely.',
    translationUrdu: 'جو بے گناہ کو قتل کرے گویا اس نے پوری انسانیت کو قتل کر دیا۔',
    reference: 'Quran 5:32',
    theme: 'Right to Life',
    explanation:
      'The sanctity of life is paramount. Unjust killing is equated with the destruction of all humanity, underscoring the gravity of protecting life.',
  },
  {
    id: 'v7',
    arabic: 'إِنَّ الْمُسْلِمِينَ وَالْمُسْلِمَاتِ وَالْقَانِتِينَ وَالْقَانِتَاتِ... أَعَدَّ اللَّهُ لَهُم مَّغْفِرَةً وَأَجْرًا عَظِيمًا',
    translation: 'Indeed, the Muslim men and Muslim women, the believing men and believing women... Allah has prepared for them forgiveness and a great reward.',
    translationUrdu: 'بے شک مسلمان مرد اور مسلمان عورتیں، مومن مرد اور مومن عورتیں... اللہ نے ان کے لیے بخشش اور عظیم اجر تیار کیا ہے۔',
    reference: 'Quran 33:35',
    theme: "Women's Spiritual Equality",
    explanation:
      'This verse explicitly lists men and women side by side, affirming that both have identical spiritual duties and identical rewards. Women are equally accountable and equally honored before Allah.',
  },
  {
    id: 'v8',
    arabic: 'وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ ۚ لِّلرِّجَالِ نَصِيبٌ مِّمَّا اكْتَسَبُوا وَلِلنِّسَاءِ نَصِيبٌ مِّمَّا اكْتَسَبْنَ',
    translation: 'And do not wish for that by which Allah has made some of you exceed others. For men is a share of what they have earned, and for women is a share of what they have earned.',
    translationUrdu: 'اور وہ نہ چاہو جس میں اللہ نے تم میں سے بعض کو بعض پر فضیلت دی ہے۔ مردوں کے لیے ان کی کمائی میں حصہ ہے اور عورتوں کے لیے ان کی کمائی میں حصہ ہے۔',
    reference: 'Quran 4:32',
    theme: "Women's Right to Earn",
    explanation:
      'This verse grants women the right to earn and keep their own income. It affirms financial independence — a woman\u2019s earnings belong entirely to her, separate from her husband\u2019s.',
  },
  {
    id: 'v9',
    arabic: 'وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ',
    translation: 'And live with them [wives] in kindness.',
    translationUrdu: 'اور ان کے ساتھ بھلائی کے ساتھ زندگی بسر کرو۔',
    reference: 'Quran 4:19',
    theme: 'Kindness to Wives',
    explanation:
      'Husbands are commanded to treat their wives with kindness and good companionship. Marriage in Islam is built on mutual care, not dominance or control.',
  },
  {
    id: 'v10',
    arabic: 'فَلَا جُنَاحَ عَلَيْكُمَ فِيمَا فَعَلْنَ فِي أَنفُسِهِنَّ بِالْمَعْرُوفِ',
    translation: 'There is no blame upon you for what they [women] do for themselves in an acceptable way.',
    translationUrdu: 'تم پر کوئی گناہ نہیں جو وہ اپنے بارے میں بھلائی کے ساتھ کریں۔',
    reference: 'Quran 2:234',
    theme: "Women's Autonomy",
    explanation:
      'This verse acknowledges women\u2019s agency over their own affairs. Within the bounds of what is acceptable, women have the freedom to make decisions about themselves.',
  },
  {
    id: 'v11',
    arabic: 'وَالْوَالِدَاتُ يُرْضِعْنَ أَوْلَادَهُنَّ حَوْلَيْنِ كَامِلَيْنِ ۖ لِمَنْ أَرَادَ أَن يُتِمَّ الرَّضَاعَةَ',
    translation: 'Mothers may nurse their children for two full years for whoever wishes to complete the nursing.',
    translationUrdu: 'ماؤں کو اپنے بچوں کو دو مکمل سال دودھ پلانے چاہئیں، جو دودھ پلانا مکمل کرنا چاہے۔',
    reference: 'Quran 2:233',
    theme: "Mother's Rights",
    explanation:
      'The Quran recognizes the mother\u2019s role in nurturing and grants her the right to nurse and care for her children, with the father obligated to provide maintenance during this period.',
  },
  {
    id: 'v12',
    arabic: 'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ',
    translation: 'And for them [women] are rights similar to those [of men] over them in kindness, and for men over them is a degree.',
    translationUrdu: 'اور عورتوں کے حقوق مردوں کے حقوق کے برابر ہیں، بھلائی کے ساتھ، اور مردوں کا ان پر ایک درجہ ہے۔',
    reference: 'Quran 2:228',
    theme: 'Marital Balance',
    explanation:
      'The \u201cdegree\u201d refers to the husband\u2019s responsibility of maintenance and leadership, not superiority. Rights and duties are reciprocal \u2014 both spouses have obligations toward each other.',
  },
  {
    id: 'v13',
    arabic: 'وَابْتَغِ مِن مَّا آتَاكَ اللَّهُ الدَّارَ الْآخِرَةَ وَلَا تَنسَ نَصِيبَكَ مِنَ الدُّنْيَا',
    translation: 'But seek, through that which Allah has given you, the home of the Hereafter; and do not forget your share of the world.',
    translationUrdu: 'اور جو کچھ اللہ نے تمہیں دیا ہے اس کے ذریعے آخرت کا گھر تلاش کرو، اور اپنا دنیاوی حصہ نہ بھولو۔',
    reference: 'Quran 28:77',
    theme: "Women's Worldly Rights",
    explanation:
      'While seeking the Hereafter, Islam does not neglect worldly rights. Women, like men, are entitled to enjoy the lawful blessings of this world \u2014 including education, work, and comfort.',
  },
  {
    id: 'v14',
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا يَحِلُّ لَكُمْ أَن تَرِثُوا النِّسَاءَ كَرْهًا',
    translation: 'O you who have believed, it is not lawful for you to inherit women by compulsion.',
    translationUrdu: 'اے ایمان والو! تمہارے لیے جائز نہیں کہ عورتوں کو زبردتی وراثت میں لے لو۔',
    reference: 'Quran 4:19',
    theme: "Women's Consent in Marriage",
    explanation:
      'This verse prohibits treating women as property to be inherited. A woman cannot be passed from one husband to another against her will \u2014 her consent and dignity are protected.',
  },
  {
    id: 'v15',
    arabic: 'وَلَا تَضَارُّوهُنَّ لِتُضَيِّقُوا عَلَيْهِنَّ',
    translation: 'And do not make difficulties for them to keep [them] in hardship.',
    translationUrdu: 'اور ان کو تنگ کرنے کے لیے انہیں تکلیف نہ پہنچاؤ۔',
    reference: 'Quran 65:6',
    theme: "Women's Protection from Harm",
    explanation:
      'Even in cases of divorce, the Quran forbids causing hardship to women. They must be housed comfortably and not harmed \u2014 a protection against emotional or economic abuse.',
  },
];

export type Hadith = {
  id: string;
  arabic: string;
  translation: string;
  translationUrdu: string;
  reference: string;
  narrator: string;
  explanation: string;
};

export const hadiths: Hadith[] = [
  {
    id: 'h1',
    arabic: 'طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ',
    translation: 'Seeking knowledge is an obligation upon every Muslim.',
    translationUrdu: 'علم حاصل کرنا ہر مسلمان پر فرض ہے۔',
    reference: 'Sunan Ibn Majah 224',
    narrator: 'Anas ibn Malik (RA)',
    explanation:
      'The Arabic word "Muslim" applies to both men and women. This hadith makes education a religious duty for every individual, regardless of gender.',
  },
  {
    id: 'h2',
    arabic: 'النَّاسُ لِآدَمَ، وَآدَمُ مِنْ تُرَابٍ',
    translation: 'All people are the children of Adam, and Adam was created from dust.',
    translationUrdu: 'تمام لوگ آدم کے بچے ہیں، اور آدم مٹی سے بنے۔',
    reference: 'Musnad Ahmad',
    narrator: 'Abu Musa al-Ash\'ari (RA)',
    explanation:
      'This hadith rejects racism and discrimination. All humans share a common origin, making equality a fundamental Islamic value.',
  },
  {
    id: 'h3',
    arabic: 'خَيْرُكُمْ خَيْرُكُمْ لِنِسَائِهِمْ',
    translation: 'The best of you are those who are best to their women.',
    translationUrdu: 'تم میں سب سے بہتر وہ ہیں جو اپنی عورتوں کے ساتھ بہترین ہوں۔',
    reference: 'Jami at-Tirmidhi 3895',
    narrator: 'Aisha (RA)',
    explanation:
      'The Prophet (PBUH) measured a person\u2019s goodness by how they treat women, setting a standard of kindness and respect in family life.',
  },
  {
    id: 'h4',
    arabic: 'أُمُّكَ ثُمَّ أُمُّكَ ثُمَّ أُمُّكَ ثُمَّ أَبُوكَ',
    translation: 'Your mother, then your mother, then your mother, then your father.',
    translationUrdu: 'تمہاری ما، پھر ما، پھر ما، پھر تمہارا باپ۔',
    reference: 'Sahih al-Bukhari 5971',
    narrator: 'Abu Huraira (RA)',
    explanation:
      'When asked who deserves the most companionship and care, the Prophet (PBUH) named the mother three times before the father, elevating her status above all.',
  },
  {
    id: 'h5',
    arabic: 'لَا يَكُونُ لِلْمُؤْمِنِ أَنْ يَخْرُجَ مِنْ صُلْحٍ',
    translation: 'A previously married woman has more right to her person than her guardian.',
    translationUrdu: 'ایک مرتبہ شادی شدہ عورت کو اپنے بارے میں اس کے ولی سے زیادہ حق ہے۔',
    reference: 'Sahih Muslim 1421',
    narrator: 'Ibn Abbas (RA)',
    explanation:
      'This hadith affirms a woman\u2019s right to consent to marriage. Her guardian cannot force her into a marriage against her will.',
  },
  {
    id: 'h6',
    arabic: 'الْأَرْوَاحُ جُنُودٌ مُجَنَّدَةٌ',
    translation: 'Souls are like conscripted soldiers; those who recognize one another unite.',
    translationUrdu: 'روحیں سپاہیوں کی طرح ہیں؛ جو ایک دوسرے کو پہچانیں وہ متحد ہو جاتی ہیں۔',
    reference: 'Sahih al-Bukhari 3344',
    narrator: 'Aisha (RA)',
    explanation:
      'This hadith speaks to the universal brotherhood of humanity — people of good character naturally connect across boundaries of nation and race.',
  },
  {
    id: 'h7',
    arabic: 'لَا تَفْضُلُنِي عَلَى مَرْيَمَ وَلَا تَفْضُلُنِي عَلَى خَدِيجَةَ',
    translation: 'Do not prefer me over Maryam, and do not prefer me over Khadijah.',
    translationUrdu: 'میری طرف مریم پر ترجیح نہ دو، اور خدیجہ پر میری ترجیح نہ دو۔',
    reference: 'Sahih al-Bukhari 3432',
    narrator: 'Abu Musa al-Ash\'ari (RA)',
    explanation:
      'The Prophet (PBUH) named Maryam (mother of Jesus) and Khadijah as among the greatest women of all time, honoring women\u2019s spiritual rank alongside men\u2019s.',
  },
  {
    id: 'h8',
    arabic: 'الْمَرْأَةُ عَطِيَّةٌ، فَإِنْ أَمْسَكَهَا فَبِمَعْرُوفٍ، وَإِنْ طَلَّقَهَا فَبِإِحْسَانٍ',
    translation: 'A woman is a trust; if he keeps her, let it be with kindness, and if he divorces, let it be with excellence.',
    translationUrdu: 'عورت ایک امانت ہے؛ اگر رکھے تو بھلائی سے، اور طلاق دے تو احسان سے۔',
    reference: 'Musnad Ahmad 7921',
    narrator: 'Abu Huraira (RA)',
    explanation:
      'Women are described as a trust, not property. Whether in marriage or divorce, the command is kindness and excellence \u2014 never harm or cruelty.',
  },
  {
    id: 'h9',
    arabic: 'اسْتَوْصُوا بِالنِّسَاءِ خَيْرًا',
    translation: 'I advise you to treat women well.',
    translationUrdu: 'میں تمہیں عورتوں کے ساتھ بھلائی کی وصیت کرتا ہوں۔',
    reference: 'Sahih Muslim 1468',
    narrator: 'Abu Huraira (RA)',
    explanation:
      'In his Farewell Sermon, the Prophet (PBUH) specifically advised kindness to women. This was among his final teachings, showing its supreme importance.',
  },
  {
    id: 'h10',
    arabic: 'مَنْ كَانَ لَهُ ثَلَاثُ بَنَاتٍ... فَهُنَّ لَهُ حِجَابٌ مِنَ النَّارِ',
    translation: 'Whoever has three daughters and is patient with them, they are a shield for him from the Fire.',
    translationUrdu: 'جس کی تین بیٹیاں ہوں اور وہ ان پر صبر کرے، وہ اس کے لیے آگ سے ڈھال ہیں۔',
    reference: 'Jami at-Tirmidhi 1955',
    narrator: 'Abu Sa\'id al-Khudri (RA)',
    explanation:
      'Daughters are a source of divine reward, not a burden as pre-Islamic culture believed. Raising daughters with care earns Paradise and protection from Hell.',
  },
  {
    id: 'h11',
    arabic: 'لَا يُلْدِغُ الْمُؤْمِنُ مِنْ جُحْرٍ مَرَّتَيْنِ',
    translation: 'A believing man does not allow himself to be stung from the same hole twice.',
    translationUrdu: 'مومن ایک سوراخ سے دو بار نہیں ڈسا جاتا۔',
    reference: 'Sahih al-Bukhari 6133',
    narrator: 'Abu Huraira (RA)',
    explanation:
      'While general in meaning, this hadith supports a woman\u2019s right to leave a harmful situation. Islam does not require women to endure abuse \u2014 self-protection is encouraged.',
  },
  {
    id: 'h12',
    arabic: 'الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ',
    translation: 'Paradise lies beneath the feet of mothers.',
    translationUrdu: 'جنت ماؤں کے قدموں تلے ہے۔',
    reference: 'Sunan an-Nasa\'i 3104',
    narrator: 'Mu\'adh ibn Jabal (RA)',
    explanation:
      'This famous hadith elevates the mother to the highest spiritual rank. Serving and honoring one\u2019s mother is a direct path to Paradise \u2014 a status no other relationship shares.',
  },
  {
    id: 'h13',
    arabic: 'لَا يَحِلُّ لِامْرَأَةٍ تُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ أَنْ تُصَبِّرَ نَفْسَهَا عَلَى بَغْضِ زَوْجِهَا',
    translation: 'It is not lawful for a woman who believes in Allah and the Last Day to hate her husband.',
    translationUrdu: 'اس عورت کے لیے جائز نہیں جو اللہ اور یوم آخرت پر ایمان رکھتی ہو کہ اپنے شوہر سے نفرت کرے۔',
    reference: 'Sunan Abi Dawud 2142',
    narrator: 'Abu Huraira (RA)',
    explanation:
      'This hadith addresses marital harmony, but classical scholars note it works both ways \u2014 mutual love and respect are the foundation. It condemns emotional hostility, not justified grievances.',
  },
  {
    id: 'h14',
    arabic: 'أَكْمَلُ الْمُؤْمِنِينَ إِيمَانًا أَحْسَنُهُمْ خُلُقًا، وَخِيَارُكُمْ خِيَارُكُمْ لِنِسَائِهِمْ',
    translation: 'The most complete of believers in faith are those with the best character, and the best of you are the best to their women.',
    translationUrdu: 'مومنوں میں سب سے مکمل ایمان والے بہترین اخلاق والے ہیں، اور تم میں سب سے بہتر وہ ہیں جو اپنی عورتوں کے ساتھ بہترین ہیں۔',
    reference: 'Jami at-Tirmidhi 1162',
    narrator: 'Abu Huraira (RA)',
    explanation:
      'The Prophet (PBUH) linked the completeness of faith directly to how one treats women. Good character toward women is not optional \u2014 it is a measure of faith itself.',
  },
  {
    id: 'h15',
    arabic: 'إِنَّمَا النِّسَاءُ شَقَائِقُ الرِّجَالِ',
    translation: 'Women are the counterparts of men.',
    translationUrdu: 'عورتیں مردوں کے ہم مثل ہیں۔',
    reference: 'Sunan Abi Dawud 236',
    narrator: 'Aisha (RA)',
    explanation:
      'This hadith establishes that women are equal counterparts to men in rights, responsibilities, and spiritual standing. They are not lesser beings but partners in humanity.',
  },
  {
    id: 'h16',
    arabic: 'مَنْ كَانَتْ لَهُ بِنْتٌ فَلَمْ يَئِدْهَا وَلَمْ يُؤْثِرْ عَلَيْهَا وَلَدَهُ، أَدْخَلَهُ اللَّهُ الْجَنَّةَ',
    translation: 'Whoever has a daughter and does not bury her alive, nor prefer his son over her, Allah will enter him into Paradise.',
    translationUrdu: 'جس کی بیٹی ہو اور اسے زندہ نہ دفن کرے اور بیٹے پر ترجیح نہ دے، اللہ اسے جنت میں داخل کرے گا۔',
    reference: 'Musnad Ahmad 19517',
    narrator: 'Ibn Abbas (RA)',
    explanation:
      'This hadith abolishes the pre-Islamic practice of female infanticide and forbids favoring sons over daughters. Daughters are a source of divine reward, not shame.',
  },
];
