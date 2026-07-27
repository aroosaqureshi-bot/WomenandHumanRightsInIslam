export type BlogPost = {
  id: string;
  title: string;
  titleUrdu: string;
  excerpt: string;
  excerptUrdu: string;
  content: string;
  contentUrdu: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  icon: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    title: 'The Concept of Justice in Islam',
    titleUrdu: 'اسلام میں انصاف کا تصور',
    excerpt:
      'Justice is not merely a virtue in Islam — it is a divine command that forms the foundation of a fair and equitable society.',
    excerptUrdu:
      'انصاف اسلام میں محض ایک فضیلت نہیں — یہ ایک الٰہی حکم ہے جو ایک منصفانہ اور مساوی معاشرے کی بنیاد ہے۔',
    content:
      'In Islam, justice (adl) is one of the most fundamental values. The Quran commands believers to uphold justice even when it is against their own interests or those of their loved ones. This principle transcends personal bias, social pressure, and economic considerations.\n\nThe Prophet Muhammad (PBUH) was known as "Al-Amin" (the trustworthy) even before his prophethood, because of his unwavering commitment to fairness. He established a society where a noble and a commoner stood equal before the law.\n\nJustice in Islam encompasses three dimensions: justice toward Allah through worship and gratitude, justice toward oneself through self-discipline, and justice toward others through fair dealings, honesty, and protection of rights. This holistic approach makes justice both a personal spiritual practice and a social obligation.',
    contentUrdu:
      'اسلام میں انصاف (عدل) بنیادی قدرتوں میں سے ایک ہے۔ قرآن مومنوں کو حکم دیتا ہے کہ وہ انصاف قائم رکھیں یہاں تک کہ اگر یہ ان کے اپنے مفاد یا اپنے پیاروں کے خلاف ہو۔ یہ اصول ذاتی تعصب، سماجی دباؤ اور معاشی غور سے بالا تر ہے۔\n\nنبی کریم ﷺ اپنی نبوت سے پہلے "امین" (قابلِ اعتماد) کے لقب سے جانے جاتے تھے، انصاف کے ساتھ غیر متزلزل وابستگی کی وجہ سے۔ انہوں نے ایک ایسا معاشرہ قائم کیا جہاں ایک بزرگ اور عام آدمی قانون کے سامنے برابر تھے۔\n\nاسلام میں انصاف کے تین پہلو ہیں: اللہ کے ساتھ انصاف عبادت اور شکر کے ذریعے، خود کے ساتھ انصاف ضبطِ نفس کے ذریعے، اور دوسروں کے ساتھ انصاف منصفانہ معاملات، ایمانداری اور حقوق کے تحفظ کے ذریعے۔',
    category: 'Human Rights',
    author: 'Editorial Team',
    date: '2025-01-15',
    readTime: '5 min',
    icon: 'Scale',
  },
  {
    id: 'b2',
    title: 'Women Scholars in Islamic History',
    titleUrdu: 'اسلامی تاریخ میں خاتون علماء',
    excerpt:
      'From Aisha (RA) to modern scholars, women have been central to the preservation and transmission of Islamic knowledge.',
    excerptUrdu:
      'عائشہ رضی اللہ عنہا سے لے کر جدید علماء تک، عورتیں اسلامی علم کی حفاظت اور منتقلی میں مرکزی رہی ہیں۔',
    content:
      'Aisha bint Abu Bakr (RA), one of the Prophet\u2019s wives, was among the most prolific scholars of early Islam. She narrated over 2,000 hadiths and taught many prominent male companions. Her expertise covered theology, jurisprudence, medicine, and poetry.\n\nThroughout Islamic history, women established and attended madrasas, issued fatwas, and contributed to scholarship. Fatima al-Fihri founded the University of al-Qarawiyyin in 859 CE — the oldest continuously operating university in the world.\n\nThe misconception that Islam discourages female education contradicts this rich history. The Prophet (PBUH) commanded: "Seeking knowledge is an obligation upon every Muslim." This included women explicitly, and generations of female scholars fulfilled this obligation brilliantly.',
    contentUrdu:
      'عائشہ بنت ابو بکر رضی اللہ عنہا، نبی کی زوجہ میں سے ایک، ابتدائی اسلام کی سب سے زیادہ پیداواری علماء میں سے تھیں۔ انہوں نے ۲۰۰۰ سے زیادہ احادیث بیان کیں اور کئی ممتاز مرد صحابہ کو پڑھایا۔\n\nاسلامی تاریخ بھر میں عورتوں نے مدارس قائم کیے، فتویٰ جاری کیے، اور علم میں حصہ لیا۔ فاطمہ الفہری نے ۸۵۹ء میں جامعہ قرویین قائم کیا — دنیا کا سب سے پرانا مسلسل چلنے والا جامعہ۔\n\nیہ غلط فہمی کہ اسلام خواتین تعلیم کو حوصلہ نہیں دیتا، اس امیر تاریخ سے متصادم ہے۔ نبی کریم ﷺ نے حکم دیا: "علم حاصل کرنا ہر مسلمان پر فرض ہے۔" اس میں عورتیں واضح طور پر شامل تھیں۔',
    category: "Women's Rights",
    author: 'Editorial Team',
    date: '2025-02-02',
    readTime: '6 min',
    icon: 'BookOpen',
  },
  {
    id: 'b3',
    title: 'The Right to Dignity: Islam and Human Worth',
    titleUrdu: 'وقار کا حق: اسلام اور انسانی قدر',
    excerpt:
      'Every human being carries inherent dignity in Islam — a principle that shapes how we treat one another across all boundaries.',
    excerptUrdu:
      'ہر انسان اسلام میں فطری وقار رکھتا ہے — ایک اصول جو تمام سرحدوں کے پار ہم ایک دوسرے سے سلوک کرتے ہیں اس کا تعین کرتا ہے۔',
    content:
      'The Quran declares: "We have certainly honored the children of Adam" (17:70). This single verse establishes the inherent dignity of every human being, regardless of race, gender, religion, or social status.\n\nThis principle has profound implications. It means that no one may be humiliated, tortured, or degraded. It means that the poor and the powerful deserve equal respect. It means that the stranger and the neighbor are equally entitled to kindness.\n\nThe Prophet (PBUH) embodied this teaching. He would stand in respect when a funeral procession passed — even if it was of a Jewish person. When asked why, he replied: "Was he not a human soul?" This simple, profound answer captures the essence of human dignity in Islam.',
    contentUrdu:
      'قرآن اعلام کرتا ہے: "ہم نے بنی آدم کو یقیناً عزت و مرتبہ بخشی" (۱۷:۷۰)۔ یہ ایک آیت ہر انسان کے فطری وقار کا قیام کرتی ہے، نسل، جنس، مذہب یا سماجی حیثیت سے قطع نظر۔\n\nاس اصول کے گہرے مضمرات ہیں۔ اس کا مطلب ہے کہ کسی کو ذلیل، تشدد یا پستی کا نشانہ نہیں بنایا جا سکتا۔ غریب اور طاقتور برابر احترام کے حقدار ہیں۔ اجنبی اور پڑوسی برابر شفقت کے حقدار ہیں۔\n\nنبی کریم ﷺ نے اس تعلیم کو عملی شکل دی۔ جب جنازہ گزرتا تو وہ احترام سے کھڑے ہو جاتے — یہاں تک کہ اگر وہ یہودی کا ہوتا۔ جب پوچھا گیا کیوں، فرمایا: "کیا وہ انسانی روح نہیں تھی؟"',
    category: 'Human Rights',
    author: 'Editorial Team',
    date: '2025-02-20',
    readTime: '4 min',
    icon: 'Crown',
  },
  {
    id: 'b4',
    title: 'Marriage and Consent in Islamic Law',
    titleUrdu: 'اسلامی قانون میں شادی اور رضامندی',
    excerpt:
      'A marriage without the free consent of both partners is invalid in Islam — a principle often overlooked in cultural practices.',
    excerptUrdu:
      'دونوں فریقین کی آزاد رضامندی کے بغیر شادی اسلام میں باطل ہے — ایک اصول جو اکثر ثقافتی روایات میں نظر انداز ہوتا ہے۔',
    content:
      'A fundamental principle of Islamic marriage is the consent of both the bride and groom. The Prophet (PBUH) annulled the marriage of a woman who had been married against her will, establishing clearly that forced marriage has no validity in Islam.\n\nA previously married woman has the most autonomy — she may choose her husband directly. An unmarried woman\u2019s consent is also required, and silence due to shyness was historically accepted as consent, but explicit verbal consent is the safer, preferred practice.\n\nCultural practices that override a woman\u2019s choice — such as forced marriages arranged without her knowledge — contradict Islamic teachings. Distinguishing between cultural tradition and religious obligation is essential to understanding true Islamic family law.',
    contentUrdu:
      'اسلامی شادی کا بنیادی اصول دلہن اور دلہا دونوں کی رضامندی ہے۔ نبی کریم ﷺ نے ایک عورت کی شادی منسوخ کر دی جو ان کی مرضی کے بغیر کی گئی تھی، یہ واضح کرتے ہوئے کہ جبری شادی اسلام میں جائز نہیں۔\n\nایک مرتبہ شادی شدہ عورت کو سب سے زیادہ خودمختاری ہے — وہ اپنا شوہر براہ راست چن سکتی ہے۔ غیر شادی شدہ عورت کی رضامندی بھی ضروری ہے۔\n\nثقافتی روایات جو عورت کے انتخاب کو نظر انداز کرتی ہیں — جیسے بغیر علم کی جبری شادیاں — اسلامی تعلیمات کے متضاد ہیں۔',
    category: "Women's Rights",
    author: 'Editorial Team',
    date: '2025-03-08',
    readTime: '5 min',
    icon: 'HeartHandshake',
  },
  {
    id: 'b5',
    title: 'Economic Rights of Women in Islam',
    titleUrdu: 'اسلام میں عورتوں کے معاشی حقوق',
    excerpt:
      'Islam gave women financial independence centuries before modern legal systems — including the right to earn, own, and inherit.',
    excerptUrdu:
      'اسلام نے جدید قانونی نظاموں سے صدیوں پہلے عورتوں کو مالی آزادی دی — کمانے، ملکیت اور وراثت کا حق شامل۔',
    content:
      'Islam granted women complete financial independence. A woman may earn, own property, run a business, and invest — all in her own name. Her husband has no right to her earnings or her wealth.\n\nFurthermore, a husband is obligated to provide for his wife regardless of her financial status. Even a wealthy wife is entitled to maintenance from her husband. This creates a system where women accumulate wealth without the obligation to spend it on the household.\n\nInheritance rights further secure women economically. Daughters, wives, and mothers each receive defined shares that cannot be denied. While a daughter\u2019s share is often half that of a son, this reflects the son\u2019s financial obligations — not lesser worth. The net economic position of women in Islam is often stronger than it appears.',
    contentUrdu:
      'اسلام نے عورتوں کو مکمل مالی آزادی دی۔ عورت کما سکتی ہے، ملکیت رکھ سکتی ہے، کاروبار چلا سکتی ہے، اور سرمایہ کاری کر سکتی ہے — سب اپنے نام پر۔ اس کے شوہر کا اس کی آمدنی یا مال پر کوئی حق نہیں۔\n\nمزید برآں، شوہر اپنی بیوی کی کفالت کا ذمہ دار ہے، خواہ وہ کتنی ہی مالدار ہو۔ یہ ایسا نظام بناتا ہے جہاں عورتیں مال جمع کرتی ہیں بغیر گھر پر خرچ کرنے کی پابندی کے۔\n\nوراثت کے حقوق عورتوں کو معاشی طور پر مزید محفوظ کرتے ہیں۔',
    category: "Women's Rights",
    author: 'Editorial Team',
    date: '2025-03-22',
    readTime: '6 min',
    icon: 'ShieldCheck',
  },
  {
    id: 'b6',
    title: 'Freedom of Religion: A Quranic Principle',
    titleUrdu: 'مذہبی آزادی: ایک قرآنی اصول',
    excerpt:
      'The Quran\u2019s clear prohibition of religious compulsion makes freedom of belief a foundational Islamic value.',
    excerptUrdu:
      'قرآن کی مذہبی زبردستی کی واضح ممانعت ایمان کی آزادی کو ایک بنیادی اسلامی قدر بناتی ہے۔',
    content:
      'One of the most explicit statements in the Quran on human rights is: "There shall be no compulsion in [acceptance of] the religion" (2:256). This verse establishes freedom of conscience as a divine command.\n\nThe Prophet (PBUH) implemented this principle in the Constitution of Medina, which guaranteed religious freedom to Jewish tribes alongside Muslims. He also wrote to Christian communities promising protection of their churches and freedom of worship.\n\nHistorically, Islamic Spain (Al-Andalus) became a refuge for Jews fleeing persecution elsewhere in Europe — a direct result of the Islamic principle of religious tolerance. True Islamic governance protects the rights of all faiths to worship freely and live according to their beliefs.',
    contentUrdu:
      'قرآن میں انسانی حقوق پر سب سے واضح بیانات میں سے ایک ہے: "دین میں کوئی زبردستی نہیں" (۲:۲۵۶)۔ یہ آیت ضمیر کی آزادی کو الٰہی حکم بناتی ہے۔\n\nنبی کریم ﷺ نے اس اصول کو مدینہ کے منشور میں نافذ کیا، جس نے یہودی قبائل کو مسلمانوں کے ساتھ مذہبی آزادی کی ضمانت دی۔\n\nتاریخی طور پر اسلامی ہسپانیہ یورپ میں ظلم سے بھاگنے والے یہودیوں کا پناہ گاہ بنی — مذہبی رواداری کے اسلامی اصول کا براہ راست نتیجہ۔',
    category: 'Human Rights',
    author: 'Editorial Team',
    date: '2025-04-05',
    readTime: '5 min',
    icon: 'Compass',
  },
];
