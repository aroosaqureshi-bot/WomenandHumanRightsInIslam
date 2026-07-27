export type QuizQuestion = {
  id: string;
  question: string;
  questionUrdu: string;
  options: string[];
  optionsUrdu: string[];
  correctIndex: number;
  explanation: string;
  explanationUrdu: string;
  reference: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'According to the Quran, saving one human life is equal to saving whom?',
    questionUrdu: 'قرآن کے مطابق ایک انسان کی زندگی بچانا کسے بچانے کے برابر ہے؟',
    options: ['One family', 'All of humanity', 'One nation', 'One religion'],
    optionsUrdu: ['ایک خاندان', 'پوری انسانیت', 'ایک قوم', 'ایک مذہب'],
    correctIndex: 1,
    explanation:
      'The Quran states that whoever kills a soul unjustly is as if he slew all of humanity, and saving one life is like saving all of humanity. This establishes the sanctity of life.',
    explanationUrdu:
      'قرآن کہتا ہے کہ جو ایک بے گناہ کو قتل کرے گویا اس نے پوری انسانیت کو قتل کر دیا، اور جو ایک زندگی بچائے گویا پوری انسانیت کو بچا لے۔',
    reference: 'Quran 5:32',
  },
  {
    id: 'q2',
    question: 'What does the Quran say about compulsion in religion?',
    questionUrdu: 'قرآن دین میں زبردستی کے بارے میں کیا کہتا ہے؟',
    options: ['Compulsion is allowed in war', 'There is no compulsion in religion', 'Only non-Muslims can be compelled', 'Compulsion is allowed for children'],
    optionsUrdu: ['جنگ میں زبردستی جائز ہے', 'دین میں کوئی زبردستی نہیں', 'صرف غیر مسلموں پر زبردستی ہو سکتی ہے', 'بچوں پر زبردستی جائز ہے'],
    correctIndex: 1,
    explanation:
      'The Quran explicitly declares "There shall be no compulsion in [acceptance of] the religion." Faith must come from the heart, making freedom of belief a fundamental Islamic principle.',
    explanationUrdu:
      'قرآن واضح طور پر کہتا ہے "دین میں کوئی زبردستی نہیں۔" ایمان دل سے آنا چاہیے، جس سے مذہبی آزادی اسلامی اصول بنتی ہے۔',
    reference: 'Quran 2:256',
  },
  {
    id: 'q3',
    question: 'In Islam, who has the right to own and manage property independently?',
    questionUrdu: 'اسلام میں کسے اپنے نام پر ملکیت رکھنے اور اس کا انتظام کرنے کا حق ہے؟',
    options: ['Only men', 'Only the husband', 'Both men and women', 'Only the wealthy'],
    optionsUrdu: ['صرف مرد', 'صرف شوہر', 'مرد اور عورت دونوں', 'صرف مالدار'],
    correctIndex: 2,
    explanation:
      'Islam grants women the exclusive right to own and manage property in their own name. A wife\u2019s property and earnings are entirely her own; her husband has no claim over them.',
    explanationUrdu:
      'اسلام عورتوں کو اپنے نام پر ملکیت رکھنے کا حق دیتا ہے۔ بیوی کی ملکیت اور آمدنی مکمل اس کی اپنی ہے، شوہر کا اس پر کوئی حق نہیں۔',
    reference: 'Quran 4:32',
  },
  {
    id: 'q4',
    question: 'What is required for a marriage to be valid in Islam?',
    questionUrdu: 'اسلام میں شادی کے درست ہونے کے لیے کیا ضروری ہے؟',
    options: ['The guardian\u2019s choice only', 'The woman\u2019s consent', 'A large dowry', 'The husband\u2019s wealth'],
    optionsUrdu: ['صرف ولی کا انتخاب', 'عورت کی رضامندی', 'بڑا جہیز', 'شوہر کی دولت'],
    correctIndex: 1,
    explanation:
      'A woman\u2019s consent is essential for a valid marriage in Islam. Forced marriage is prohibited. The Prophet (PBUH) annulled the marriage of a woman married against her will.',
    explanationUrdu:
      'اسلام میں شادی کے لیے عورت کی رضامندی لازمی ہے۔ جبری شادی ممنوع ہے۔ نبی کریم ﷺ نے ایک عورت کی جبری شادی کو منسوخ کیا۔',
    reference: 'Hadith — Sahih al-Bukhari',
  },
  {
    id: 'q5',
    question: 'Who does the Prophet (PBUH) say are "the best of you"?',
    questionUrdu: 'نبی کریم ﷺ کے مطابق "تم میں سب سے بہتر" کون ہیں؟',
    options: ['Those who pray the most', 'Those who are best to their women', 'Those who fast the most', 'Those who are wealthiest'],
    optionsUrdu: ['جو سب سے زیادہ نماز پڑھیں', 'جو اپنی عورتوں کے ساتھ بہترین ہوں', 'جو سب سے زیادہ روزہ رکھیں', 'جو سب سے مالدار ہوں'],
    correctIndex: 1,
    explanation:
      'The Prophet (PBUH) said, "The best of you are those who are best to their women." He linked a person\u2019s goodness directly to how they treat women.',
    explanationUrdu:
      'نبی کریم ﷺ نے فرمایا، "تم میں سب سے بہتر وہ ہیں جو اپنی عورتوں کے ساتھ بہترین ہوں۔" انہوں نے انسان کی بہتری کو عورتوں کے ساتھ سلوک سے جوڑا۔',
    reference: 'Hadith — Jami at-Tirmidhi 3895',
  },
  {
    id: 'q6',
    question: 'Whom did the Prophet (PBUH) name three times before the father when asked who deserves the most companionship?',
    questionUrdu: 'جب پوچھا گیا کہ کس کو سب سے زیادہ ساتھ دینے کا حق ہے، تو نبی کریم ﷺ نے باپ سے پہلے تین بار کس کا نام لیا؟',
    options: ['The father', 'The mother', 'The brother', 'The teacher'],
    optionsUrdu: ['باپ', 'ماں', 'بھائی', 'استاد'],
    correctIndex: 1,
    explanation:
      'When asked who deserves the most companionship and care, the Prophet (PBUH) replied "your mother" three times before mentioning the father, elevating the mother\u2019s status above all.',
    explanationUrdu:
      'جب پوچھا گیا کہ کس کو سب سے زیادہ ساتھ دینے کا حق ہے، نبی کریم ﷺ نے باپ سے پہلے تین بار "تمہاری ما" فرمایا، ما کا مقام سب سے بلند کیا۔',
    reference: 'Hadith — Sahih al-Bukhari 5971',
  },
  {
    id: 'q7',
    question: 'When did Islam grant women the right to inherit property?',
    questionUrdu: 'اسلام نے عورتوں کو وراثت کا حق کب دیا؟',
    options: ['In the 20th century', 'Only in modern times', 'Over 1,400 years ago', 'Never'],
    optionsUrdu: ['بیسویں صدی میں', 'صرف جدید دور میں', '۱۴۰۰ سال پہلے سے', 'کبھی نہیں'],
    correctIndex: 2,
    explanation:
      'Islam granted women inheritance rights over 1,400 years ago, long before Western legal systems did. Daughters, wives, and mothers each receive a defined share that cannot be denied.',
    explanationUrdu:
      'اسلام نے ۱۴۰۰ سال پہلے عورتوں کو وراثت کا حق دیا، مغربی قانونی نظاموں سے بہت پہلے۔ بیٹیوں، بیویوں اور ماؤں کو مقررہ حصے ملتے ہیں۔',
    reference: 'Quran 4:7',
  },
  {
    id: 'q8',
    question: 'According to the Prophet\u2019s Last Sermon, what is the only basis for superiority among people?',
    questionUrdu: 'نبی کریم ﷺ کے آخری خطبے کے مطابق لوگوں میں برتری کی واحد بنیاد کیا ہے؟',
    options: ['Wealth', 'Race', 'Piety and good action', 'Lineage'],
    optionsUrdu: ['دولت', 'نسل', 'تقویٰ اور نیک عمل', 'خاندان'],
    correctIndex: 2,
    explanation:
      'In his Last Sermon, the Prophet (PBUH) declared that an Arab has no superiority over a non-Arab, nor a non-Arab over an Arab, except by piety and good action. Race and lineage grant no superiority.',
    explanationUrdu:
      'اپنے آخری خطبے میں نبی کریم ﷺ نے فرمایا کہ عربی کو غیر عربی پر کوئی برتری نہیں، سوائے تقویٰ اور نیک عمل کے۔ نسل اور خاندان برتری نہیں دیتے۔',
    reference: 'Prophet Muhammad (PBUH) — Last Sermon',
  },
  {
    id: 'q9',
    question: 'Is a woman obligated to spend her wealth on the family in Islam?',
    questionUrdu: 'کیا اسلام میں عورت اپنا مال گھر پر خرچ کرنے کی پابند ہے؟',
    options: ['Yes, always', 'Only if she is wealthy', 'No, her husband is duty-bound to provide', 'Only if she earns more'],
    optionsUrdu: ['ہاں، ہمیشہ', 'صرف اگر وہ مالدار ہو', 'نہیں، شوہر کفالت کا ذمہ دار ہے', 'صرف اگر وہ زیادہ کمائے'],
    correctIndex: 2,
    explanation:
      'A woman\u2019s financial security is protected in Islam. She is not obligated to spend her wealth on the family, while her husband is duty-bound to provide for her maintenance regardless of her wealth.',
    explanationUrdu:
      'عورت کی مالی تحفظ محفوظ ہے۔ وہ اپنا مال گھر پر خرچ کرنے کی پابند نہیں، جبکہ شوہر اس کی کفالت کا ذمہ دار ہے، خواہ وہ کتنی ہی مالدار ہو۔',
    reference: 'Quran 2:233',
  },
  {
    id: 'q10',
    question: 'What does the Quran say about justice, even if it is against yourself?',
    questionUrdu: 'قرآن انصاف کے بارے میں کیا کہتا ہے، خواہ وہ آپ کے خلاف ہو؟',
    options: ['Justice is optional', 'Be persistently standing firm in justice', 'Justice only applies to courts', 'Justice only applies to Muslims'],
    optionsUrdu: ['انصاف اختیاری ہے', 'انصاف میں ثابت قدم رہو', 'انصاف صرف عدالتوں پر لاگو ہوتا ہے', 'انصاف صرف مسلمانوں پر لاگو ہوتا ہے'],
    correctIndex: 1,
    explanation:
      'The Quran commands: "Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives." Justice must be upheld even against one\u2019s own interests.',
    explanationUrdu:
      'قرآن حکم دیتا ہے: "انصاف میں ثابت قدم رہو، اللہ کے لیے گواہ بنو، خواہ تمہارے خلاف یا والدین اور رشتہ داروں کے خلاف ہو۔" انصاف ہر حال میں قائم رکھنا ہے۔',
    reference: 'Quran 4:135',
  },
];
