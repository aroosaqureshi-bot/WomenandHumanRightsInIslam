export type FAQ = {
  id: string;
  question: string;
  questionUrdu: string;
  answer: string;
  answerUrdu: string;
};

export const faqs: FAQ[] = [
  {
    id: 'q1',
    question: 'What does Islam say about human rights?',
    questionUrdu: 'اسلام انسانی حقوق کے بارے میں کیا کہتا ہے؟',
    answer:
      'Islam established comprehensive human rights over 1,400 years ago, including the rights to life, justice, education, equality, freedom of religion, and human dignity. These rights apply to all people regardless of faith or background.',
    answerUrdu:
      'اسلام نے ۱۴۰۰ سال پہلے مکمل انسانی حقوق قائم کیے، جن میں زندگی، انصاف، تعلیم، مساوات، مذہبی آزادی اور انسانی وقار کے حقوق شامل ہیں۔ یہ حقوق سب پر لاگو ہوتے ہیں، مذہب یا پسمنظر سے قطع نظر۔',
  },
  {
    id: 'q2',
    question: 'Does Islam give women equal rights?',
    questionUrdu: 'کی اسلام عورتوں کو مساوی حقوق دیتا ہے؟',
    answer:
      'Yes. Islam grants women spiritual equality before Allah and legal rights including education, property ownership, inheritance, marriage consent, the right to work, and financial security. These rights were revolutionary for their time.',
    answerUrdu:
      'جی ہاں۔ اسلام عورتوں کو اللہ کے نزدیک روحانی مساوات اور قانونی حقوق دیتا ہے، جن میں تعلیم، ملکیت، وراثت، شادی کی رضامندی، کام کا حق اور مالی تحفظ شامل ہیں۔ یہ حقوق اپنے وقت میں انقلابی تھے۔',
  },
  {
    id: 'q3',
    question: 'Can a woman choose her own husband in Islam?',
    questionUrdu: 'کی اسلام میں عورت اپنا شوہر خود چن سکتی ہے؟',
    answer:
      'Absolutely. A woman\u2019s consent is essential for a valid marriage. Forced marriage is prohibited, and a woman has the right to accept or reject any proposal. A previously married woman has even greater autonomy over her choice.',
    answerUrdu:
      'بالکل۔ شادی کے لیے عورت کی رضامندی لازمی ہے۔ جبری شادی ممنوع ہے، اور عورت کو ہر تجویز قبول یا رد کرنے کا حق ہے۔ ایک مرتبہ شادی شدہ عورت کو اپنے انتخاب پر زیادہ خودمختاری ہے۔',
  },
  {
    id: 'q4',
    question: 'Why do women inherit less than men in Islam?',
    questionUrdu: 'اسلام میں عورتوں کو مردوں سے کم وراثت کیوں ملتی ہے؟',
    answer:
      'The share difference reflects financial responsibilities, not worth. Men are obligated to provide for their families, while women keep their entire inheritance for themselves. In net terms, a woman\u2019s wealth is often greater than a man\u2019s.',
    answerUrdu:
      'حصے کا فرق مالی ذمہ داریوں کی عکاسی کرتا ہے، نہ کہ قدر کی۔ مردوں کو اپنے گھر کا خرچ دینا فرض ہے، جبکہ عورتیں اپنی پوری وراثت اپنے پاس رکھتی ہیں۔ خالص حوالے سے عورت کا مال اکثر مرد سے زیادہ ہوتا ہے۔',
  },
  {
    id: 'q5',
    question: 'What is the status of a mother in Islam?',
    questionUrdu: 'اسلام میں ما کا کیا مقام ہے؟',
    answer:
      'Islam elevates the mother to the highest rank of honor. When asked who deserves the most care, the Prophet (PBUH) replied "your mother" three times before mentioning the father, recognizing her sacrifices in pregnancy and rearing.',
    answerUrdu:
      'اسلام ما کو اعلیٰ ترین مقام دیتا ہے۔ جب پوچھا گیا کون سب سے زیادہ خیال کا حقدار ہے، نبی کریم ﷺ نے تین بار "تمہاری ما" کہا پھر باپ کا ذکر کیا، حمل اور پرورش کی قربانیوں کو تسلیم کرتے ہوئے۔',
  },
  {
    id: 'q6',
    question: 'Is education compulsory for women in Islam?',
    questionUrdu: 'کی اسلام میں عورتوں کے لیے تعلیم لازمی ہے؟',
    answer:
      'Yes. The Prophet (PBUH) said seeking knowledge is obligatory on every Muslim — a word that includes both men and women. Throughout Islamic history, women have been scholars, teachers, and jurists.',
    answerUrdu:
      'جی ہاں۔ نبی کریم ﷺ نے فرمایا کہ علم حاصل کرنا ہر مسلمان پر فرض ہے — یہ لفظ مرد اور عورت دونوں کو شامل کرتا ہے۔ اسلامی تاریخ میں عورتیں علماء، معلمہ اور فقیہ رہی ہیں۔',
  },
  {
    id: 'q7',
    question: 'Does Islam allow forced conversion?',
    questionUrdu: 'کی اسلام جبری تبدیلی مذہب کی اجازت دیتا ہے؟',
    answer:
      'No. The Quran explicitly states "there is no compulsion in religion" (2:256). Faith must come from the heart; forced conversion is forbidden and invalid in Islam.',
    answerUrdu:
      'نہیں۔ قرآن واضح کہتا ہے "دین میں کوئی زبردستی نہیں" (۲:۲۵۶)۔ ایمان دل سے آنا چاہیے؛ جبری تبدیلی مذہب ممنوع اور باطل ہے۔',
  },
  {
    id: 'q8',
    question: 'What does the Quran say about justice?',
    questionUrdu: 'قرآن انصاف کے بارے میں کیا کہتا ہے؟',
    answer:
      'The Quran commands justice in numerous verses, even when it goes against one\u2019s own interests. "Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves" (4:135).',
    answerUrdu:
      'قرآن متعدد آیات میں انصاف کا حکم دیتا ہے، یہاں تک کہ اپنے مفاد کے خلاف ہو۔ "انصاف میں ثابت قدم رہو، اللہ کے لیے گواہ بنو، خواہ تمہارے خلاف ہو" (۴:۱۳۵)۔',
  },
];
