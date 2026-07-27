export type HumanRight = {
  id: string;
  title: string;
  titleUrdu: string;
  icon: string;
  description: string;
  descriptionUrdu: string;
  reference: string;
};

export const humanRights: HumanRight[] = [
  {
    id: 'life',
    title: 'Right to Life',
    titleUrdu: 'حقِ زندگی',
    icon: 'Heart',
    description:
      'Islam considers human life sacred and inviolable. The Quran equates saving one life to saving all of humanity, and forbids the taking of life except through due process of justice.',
    descriptionUrdu:
      'اسلام میں انسانی زندگی نہایت مقدس ہے۔ قرآن ایک انسان کی زندگی بچانے کو پوری انسانیت کو بچانے کے برابر سمجھتا ہے، اور بغیر عدالت کے انصاف کے کسی کی زندگی لینا ممنوع ہے۔',
    reference: 'Quran 5:32 — "Whoever kills a soul unless for a soul or for corruption [done] in the land — it is as if he had slain mankind entirely."',
  },
  {
    id: 'justice',
    title: 'Right to Justice',
    titleUrdu: 'حقِ انصاف',
    icon: 'Scale',
    description:
      'Justice is a cornerstone of Islamic teaching. Every individual, regardless of faith, status, or background, is entitled to fair and impartial treatment under the law.',
    descriptionUrdu:
      'انصاف اسلامی تعلیمات کی بنیاد ہے۔ ہر فرد، خواہ کسی بھی مذہب، حیثیت یا پسمنظر کا ہو، قانون کے تحت منصفانہ سلوک کا حقدار ہے۔',
    reference: 'Quran 4:135 — "Be persistently standing firm in justice, witnesses for Allah, even if it be against yourselves or parents and relatives."',
  },
  {
    id: 'education',
    title: 'Right to Education',
    titleUrdu: 'حقِ تعلیم',
    icon: 'GraduationCap',
    description:
      'Seeking knowledge is an obligation upon every Muslim, male and female. Islam elevates the status of those who learn and teach, making education a fundamental right.',
    descriptionUrdu:
      'علم حاصل کرنا ہر مسلمان پر فرض ہے، خواہ وہ مرد ہو یا عورت۔ اسلام علم حاصل کرنے اور دینے والوں کا مرتبہ بلند کرتا ہے، تعلیم کو بنیادی حق بناتا ہے۔',
    reference: 'Hadith (Ibn Majah) — "Seeking knowledge is an obligation upon every Muslim."',
  },
  {
    id: 'equality',
    title: 'Right to Equality',
    titleUrdu: 'حقِ مساوات',
    icon: 'Users',
    description:
      'Islam teaches that all human beings are equal in the sight of Allah. No race, color, or lineage grants superiority — only piety and good deeds distinguish people.',
    descriptionUrdu:
      'اسلام سکھاتا ہے کہ تمام انسان اللہ کے نزدیک برابر ہیں۔ نہ کوئی نسل، رنگ یا خاندان کو برتری دیتا ہے — صرف تقویٰ اور نیک اعمال ہی لوگوں کو ممتاز کرتے ہیں۔',
    reference: 'Prophet Muhammad (PBUH) — "An Arab has no superiority over a non-Arab... except by piety and good action." (Last Sermon)',
  },
  {
    id: 'freedom-religion',
    title: 'Right to Freedom of Religion',
    titleUrdu: 'حقِ مذہبی آزادی',
    icon: 'Compass',
    description:
      'The Quran explicitly states there is no compulsion in religion. Every person has the right to choose and practice their faith freely without coercion.',
    descriptionUrdu:
      'قرآن میں واضح طور پر کہا گیا ہے کہ دین میں کوئی زبردستی نہیں۔ ہر شخص کو اپنا مذہب آزادی سے چننے اور اس پر عمل کرنے کا حق حاصل ہے۔',
    reference: 'Quran 2:256 — "There shall be no compulsion in [acceptance of] the religion."',
  },
  {
    id: 'dignity',
    title: 'Respect for Human Dignity',
    titleUrdu: 'احترامِ انسانی وقار',
    icon: 'Crown',
    description:
      'Islam honors humanity as the noblest of creation. Every person carries inherent dignity that must be protected and respected, free from humiliation or abuse.',
    descriptionUrdu:
      'اسلام انسانیت کو مخلوق کا بہترین حصہ سمجھتا ہے۔ ہر شخص میں فطری وقار ہوتا ہے جس کی حفاظت اور احترام ضروری ہے، توہین اور زیادتی سے پاک۔',
    reference: 'Quran 17:70 — "We have certainly honored the children of Adam and carried them on the land and sea."',
  },
];
