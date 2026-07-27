export type MythFact = {
  id: string;
  myth: string;
  mythUrdu: string;
  fact: string;
  factUrdu: string;
  reference: string;
};

export const mythsVsFacts: MythFact[] = [
  {
    id: 'm1',
    myth: 'Islam does not allow women to study or get an education.',
    mythUrdu: 'اسلام عورتوں کو پڑھنے یا تعلیم حاصل کرنے کی اجازت نہیں دیتا۔',
    fact: 'Islam encourages education for both men and women. The Prophet (PBUH) made seeking knowledge obligatory on every Muslim, and history records many prominent female scholars.',
    factUrdu: 'اسلام مرد اور عورت دونوں کے لیے تعلیم کی ترغیب دیتا ہے۔ نبی کریم ﷺ نے ہر مسلمان پر علم فرض کیا، اور تاریخ میں کئی ممتاز خاتون علماء گزرے ہیں۔',
    reference: 'Hadith (Ibn Majah) — "Seeking knowledge is an obligation upon every Muslim."',
  },
  {
    id: 'm2',
    myth: 'Women in Islam have no right to own property.',
    mythUrdu: 'اسلام میں عورتوں کو ملکیت رکھنے کا کوئی حق نہیں۔',
    fact: 'Islam gave women the right to own and manage property independently over 1,400 years ago. A wife\u2019s earnings and property belong entirely to her.',
    factUrdu: 'اسلام نے ۱۴۰۰ سال پہلے عورتوں کو آزادانہ طور پر ملکیت رکھنے اور اس کا انتظام کرنے کا حق دیا۔ بیوی کی آمدنی اور ملکیت مکمل طور پر اس کی ہے۔',
    reference: 'Quran 4:32 — "For women is a share of what they have earned."',
  },
  {
    id: 'm3',
    myth: 'Islam forces women into marriage against their will.',
    mythUrdu: 'اسلام عورتوں کو ان کی مرضی کے بغیر شادی پر مجبور کرتا ہے۔',
    fact: 'Forced marriage is strictly prohibited in Islam. A woman\u2019s consent is essential, and she has the right to accept or reject a suitor.',
    factUrdu: 'جبری شادی اسلام میں سختی سے ممنوع ہے۔ عورت کی رضامندی لازمی ہے، اور اسے رد یا قبول کرنے کا حق ہے۔',
    reference: 'Hadith (Bukhari) — "A previously married woman has more right to her person than her guardian."',
  },
  {
    id: 'm4',
    myth: 'Islam treats women as inferior to men.',
    mythUrdu: 'اسلام عورتوں کو مردوں سے کمتر سمجھتا ہے۔',
    fact: 'Islam affirms the spiritual equality of men and women. Both are equally accountable and equally rewarded by Allah for their deeds.',
    factUrdu: 'اسلام مرد اور عورت کی روحانی مساوات کی تصدیق کرتا ہے۔ دونوں اپنے اعمال کے لیے برابر جوابدہ اور برابر اجر پاتے ہیں۔',
    reference: 'Quran 33:35 — "Indeed, the Muslim men and Muslim women... Allah has prepared for them forgiveness and a great reward."',
  },
  {
    id: 'm5',
    myth: 'Islam permits violence against women.',
    mythUrdu: 'اسلام عورتوں کے خلاف تشدد کی اجازت دیتا ہے۔',
    fact: 'Islam condemns all forms of abuse. The Prophet (PBUH) never hit a woman and taught that the best among people are those best to their families.',
    factUrdu: 'اسلام ہر قسم کے ظلم کی مذمت کرتا ہے۔ نبی کریم ﷺ نے کبھی کسی عورت کو ہاتھ نہیں لگایا اور سکھایا کہ بہترین افراد اپنے گھر والوں کے ساتھ بہترین ہیں۔',
    reference: 'Hadith (Tirmidhi) — "The best of you are those who are best to their women."',
  },
  {
    id: 'm6',
    myth: 'Islam oppresses non-Muslims and denies their rights.',
    mythUrdu: 'اسلام غیر مسلموں پر ظلم کرتا ہے اور ان کے حقوق انکار کرتا ہے۔',
    fact: 'Islam grants non-Muslims the right to life, property, worship, and justice. The Quran states there is no compulsion in religion.',
    factUrdu: 'اسلام غیر مسلموں کو زندگی، ملکیت، عبادت اور انصاف کا حق دیتا ہے۔ قرآن میں کہا ہے کہ دین میں کوئی زبردستی نہیں۔',
    reference: 'Quran 2:256 — "There shall be no compulsion in [acceptance of] the religion."',
  },
  {
    id: 'm7',
    myth: 'Women receive no inheritance in Islam.',
    mythUrdu: 'اسلام میں عورتوں کو وراثت نہیں ملتی۔',
    fact: 'Islam explicitly grants women shares of inheritance as daughters, wives, and mothers — a revolutionary right at the time of revelation.',
    factUrdu: 'اسلام بیٹیوں، بیویوں اور ماؤں کو وراثت میں حصہ دیتا ہے — نزول کے وقت ایک انقلابی حق۔',
    reference: 'Quran 4:7 — "For women is a share of what the parents and close relatives leave."',
  },
  {
    id: 'm8',
    myth: 'Islam forbids women from working or earning.',
    mythUrdu: 'اسلام عورتوں کو کام کرنے یا کمانے سے منع کرتا ہے۔',
    fact: 'Islam allows women to work, trade, and earn, provided dignity is maintained. Khadijah (RA), the Prophet\u2019s wife, was a successful merchant.',
    factUrdu: 'اسلام عورتوں کو کام، تجارت اور کمائی کی اجازت دیتا ہے، بشرطیکہ وقار برقرار رہے۔ خدیجہ رضی اللہ عنہا ایک کامیاب تاجر تھیں۔',
    reference: 'Quran 4:32 — "And ask Allah of His bounty."',
  },
];
