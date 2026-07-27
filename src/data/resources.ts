export type Resource = {
  id: string;
  title: string;
  titleUrdu: string;
  description: string;
  descriptionUrdu: string;
  type: string;
  icon: string;
  url: string;
};

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'Quran.com',
    titleUrdu: 'قرآن ڈاٹ کام',
    description: 'Read the Quran in multiple languages with translations and tafsir (commentary).',
    descriptionUrdu: 'متعدد زبانوں میں ترجمے اور تفسیر کے ساتھ قرآن پڑھیں۔',
    type: 'Website',
    icon: 'BookOpen',
    url: 'https://quran.com',
  },
  {
    id: 'r2',
    title: 'Sunnah.com',
    titleUrdu: 'سنت ڈاٹ کام',
    description: 'Access authentic Hadith collections including Bukhari, Muslim, and more.',
    descriptionUrdu: 'بخاری، مسلم اور دیگر مستند حدیث کے مجموعے تک رسائی۔',
    type: 'Website',
    icon: 'Scroll',
    url: 'https://sunnah.com',
  },
  {
    id: 'r3',
    title: 'Islamic Studies Books',
    titleUrdu: 'اسلامی مطالعہ کی کتابیں',
    description: 'Curated reading list on human and women\u2019s rights in Islam from classical and modern scholars.',
    descriptionUrdu: 'کلاسیکی اور جدید علماء سے اسلام میں انسانی اور خواتین حقوق پر منتخب پڑھائی فہرست۔',
    type: 'Books',
    icon: 'Library',
    url: '#',
  },
  {
    id: 'r4',
    title: 'Islamic Finance Principles',
    titleUrdu: 'اسلامی مالی اصول',
    description: 'Learn about Islamic economic justice, inheritance laws, and financial rights.',
    descriptionUrdu: 'اسلامی معاشی انصاف، وراثت کے قوانین، اور مالی حقوق کے بارے میں جانیں۔',
    type: 'Course',
    icon: 'Coins',
    url: '#',
  },
  {
    id: 'r5',
    title: 'Women in Islamic History',
    titleUrdu: 'اسلامی تاریخ میں خواتین',
    description: 'Explore the lives of remarkable Muslim women who shaped civilization.',
    descriptionUrdu: 'ان قابل ذکر مسلمان خواتین کی زندگیاں جانیں جنہوں نے تہذیب کو شکل دی۔',
    type: 'Articles',
    icon: 'Users',
    url: '#',
  },
  {
    id: 'r6',
    title: 'Interfaith Dialogue Guides',
    titleUrdu: 'بین المذاہب مکالمہ رہنمائی',
    description: 'Resources for respectful conversation about Islam\u2019s teachings on rights and justice.',
    descriptionUrdu: 'حقوق اور انصاف پر اسلامی تعلیمات کے بارے میں باوقار گفتگو کے وسائل۔',
    type: 'Guides',
    icon: 'MessagesSquare',
    url: '#',
  },
];
