import { useState } from 'react';
import { Brain, CheckCircle2, XCircle, RefreshCw, ArrowRight, Award, BookOpen, Lightbulb } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import PageHeader from '@/components/PageHeader';
import { quizQuestions } from '@/data/quiz';

type Phase = 'intro' | 'playing' | 'results';

export default function Quiz() {
  const { language } = useApp();
  const [phase, setPhase] = useState<Phase>('intro');
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [showExplanation, setShowExplanation] = useState(false);

  const total = quizQuestions.length;
  const q = quizQuestions[current];

  const start = () => {
    setPhase('playing');
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowExplanation(false);
  };

  const restart = () => {
    setPhase('intro');
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setShowExplanation(false);
  };

  const selectOption = (idx: number) => {
    if (showExplanation) return;
    setSelected(idx);
  };

  const submit = () => {
    if (selected === null) return;
    setShowExplanation(true);
  };

  const next = () => {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);
    if (current + 1 < total) {
      setCurrent(current + 1);
      setSelected(null);
      setShowExplanation(false);
    } else {
      setPhase('results');
    }
  };

  const score = answers.reduce<number>((acc, a, i) => acc + (a === quizQuestions[i].correctIndex ? 1 : 0), 0);
  const scorePct = Math.round((score / total) * 100);
  const allAnswered = answers.length === total;
  const finalScore = allAnswered ? score : answers.reduce<number>((acc, a, i) => acc + (a === quizQuestions[i].correctIndex ? 1 : 0), 0);

  const getScoreMessage = (pct: number) => {
    if (pct === 100) return language === 'ur' ? 'ماشاءاللہ! بہترین نتیجہ۔' : 'MashaAllah! Perfect score.';
    if (pct >= 80) return language === 'ur' ? 'بہت اچھا! آپ کو موضوع کی اچھی سمجھ ہے۔' : 'Excellent! You have a strong understanding.';
    if (pct >= 60) return language === 'ur' ? 'اچھا! مزید مطالعہ سے بہتری آئے گی۔' : 'Good! A bit more study will help.';
    if (pct >= 40) return language === 'ur' ? 'ٹھیک ہے، مزید سیکھنے کی ضرورت ہے۔' : 'Fair, more learning is needed.';
    return language === 'ur' ? 'پھر سے پڑھیں اور کوشش کریں۔' : 'Review the material and try again.';
  };

  return (
    <div>
      <PageHeader
        eyebrow={{ en: 'Test Your Knowledge', ur: 'اپنا علم آزمائیں' }}
        title={{ en: 'Know Your Rights Quiz', ur: 'اپنے حقوق جانیں کوئز' }}
        subtitle={{
          en: '10 questions on Human Rights and Women\u2019s Rights in Islam. Learn as you go with explanations and references.',
          ur: 'اسلام میں انسانی اور خواتین حقوق پر ۱۰ سوالات۔ وضاحت اور حوالوں کے ساتھ سیکھیں۔',
        }}
        icon={<Brain className="text-white" size={28} />}
      />

      <section className="container-page py-12">
        {/* Intro */}
        {phase === 'intro' && (
          <div className="max-w-2xl mx-auto text-center animate-fade-up">
            <div
              className="inline-flex w-20 h-20 rounded-3xl items-center justify-center mb-6 animate-float"
              style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))' }}
            >
              <Brain className="text-white" size={36} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'تیار ہیں؟' : 'Ready to begin?'}
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--color-text-soft)' }}>
              {language === 'ur'
                ? '۱۰ سوالات پر مشتمل یہ کوئز اسلام میں انسانی اور خواتین حقوق کے بارے میں ہے۔ ہر سوال کے بعد آپ کو صحیح جواب کی وضاحت اور قرآنی یا حدیث کا حوالہ ملے گا۔'
                : 'This quiz has 10 questions on human and women\u2019s rights in Islam. After each question, you\u2019ll see an explanation and a Quran or Hadith reference for the correct answer.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(46,125,50,0.08)', color: 'var(--color-primary)' }}>
                <BookOpen size={16} />
                {language === 'ur' ? '۱۰ سوالات' : '10 Questions'}
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(201,162,39,0.12)', color: 'var(--color-gold)' }}>
                <Lightbulb size={16} />
                {language === 'ur' ? 'وضاحت کے ساتھ' : 'With Explanations'}
              </div>
              <div className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm" style={{ backgroundColor: 'rgba(46,125,50,0.08)', color: 'var(--color-primary)' }}>
                <Award size={16} />
                {language === 'ur' ? 'نتیجہ دیکھیں' : 'See Your Score'}
              </div>
            </div>
            <button onClick={start} className="btn-primary text-base px-8 py-4">
              {language === 'ur' ? 'کوئز شروع کریں' : 'Start Quiz'}
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* Playing */}
        {phase === 'playing' && (
          <div className="max-w-2xl mx-auto animate-fade-up">
            {/* Progress */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2 text-sm">
                <span style={{ color: 'var(--color-text-soft)' }}>
                  {language === 'ur' ? `سوال ${current + 1} از ${total}` : `Question ${current + 1} of ${total}`}
                </span>
                <span className="font-semibold" style={{ color: 'var(--color-primary)' }}>
                  {Math.round(((current) / total) * 100)}%
                </span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: 'var(--color-border)' }}>
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${((current) / total) * 100}%`,
                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-primary-dark))',
                  }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="card p-6 sm:p-8 mb-4">
              <h3 className="text-lg sm:text-xl font-bold mb-6 leading-relaxed" style={{ color: 'var(--color-text)' }}>
                {language === 'ur' ? q.questionUrdu : q.question}
              </h3>
              <div className="space-y-3">
                {(language === 'ur' ? q.optionsUrdu : q.options).map((opt, idx) => {
                  const isCorrect = idx === q.correctIndex;
                  const isSelected = idx === selected;
                  const reveal = showExplanation && (isCorrect || isSelected);
                  return (
                    <button
                      key={idx}
                      onClick={() => selectOption(idx)}
                      disabled={showExplanation}
                      className="w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-3"
                      style={{
                        borderColor: reveal
                          ? isCorrect
                            ? 'var(--color-primary)'
                            : isSelected
                              ? 'var(--color-error, #c0392b)'
                              : 'var(--color-border)'
                          : isSelected
                            ? 'var(--color-primary)'
                            : 'var(--color-border)',
                        backgroundColor: reveal
                          ? isCorrect
                            ? 'rgba(46,125,50,0.08)'
                            : isSelected
                              ? 'rgba(192,57,43,0.06)'
                              : 'var(--color-surface)'
                          : isSelected
                            ? 'rgba(46,125,50,0.06)'
                            : 'var(--color-surface)',
                        cursor: showExplanation ? 'default' : 'pointer',
                      }}
                    >
                      <span
                        className="w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                        style={{
                          backgroundColor: reveal
                            ? isCorrect
                              ? 'var(--color-primary)'
                              : isSelected
                                ? 'var(--color-error, #c0392b)'
                                : 'var(--color-border)'
                            : isSelected
                              ? 'var(--color-primary)'
                              : 'rgba(46,125,50,0.08)',
                          color: reveal || isSelected ? 'white' : 'var(--color-primary)',
                        }}
                      >
                        {showExplanation && isCorrect ? (
                          <CheckCircle2 size={16} />
                        ) : showExplanation && isSelected && !isCorrect ? (
                          <XCircle size={16} />
                        ) : (
                          String.fromCharCode(65 + idx)
                        )}
                      </span>
                      <span className="flex-1 text-sm sm:text-base" style={{ color: 'var(--color-text)' }}>
                        {opt}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Explanation */}
            {showExplanation && (
              <div
                className="rounded-2xl p-5 mb-4 border animate-fade-up"
                style={{
                  backgroundColor: selected === q.correctIndex ? 'rgba(46,125,50,0.06)' : 'rgba(201,162,39,0.06)',
                  borderColor: selected === q.correctIndex ? 'var(--color-primary)' : 'var(--color-gold)',
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">
                    {selected === q.correctIndex ? (
                      <CheckCircle2 size={20} style={{ color: 'var(--color-primary)' }} />
                    ) : (
                      <Lightbulb size={20} style={{ color: 'var(--color-gold)' }} />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold mb-1.5 text-sm" style={{ color: 'var(--color-text)' }}>
                      {selected === q.correctIndex
                        ? language === 'ur' ? 'درست!' : 'Correct!'
                        : language === 'ur' ? 'وضاحت' : 'Explanation'}
                    </p>
                    <p className="text-sm leading-relaxed mb-2" style={{ color: 'var(--color-text-soft)' }}>
                      {language === 'ur' ? q.explanationUrdu : q.explanation}
                    </p>
                    <p className="text-xs font-semibold" style={{ color: 'var(--color-gold)' }}>
                      — {q.reference}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end">
              {!showExplanation ? (
                <button
                  onClick={submit}
                  disabled={selected === null}
                  className="btn-primary"
                  style={{ opacity: selected === null ? 0.5 : 1, cursor: selected === null ? 'not-allowed' : 'pointer' }}
                >
                  {language === 'ur' ? 'جواب جمع کریں' : 'Submit Answer'}
                </button>
              ) : (
                <button onClick={next} className="btn-primary">
                  {current + 1 < total
                    ? language === 'ur' ? 'اگلا سوال' : 'Next Question'
                    : language === 'ur' ? 'نتیجہ دیکھیں' : 'See Results'}
                  <ArrowRight size={18} />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results */}
        {phase === 'results' && (
          <div className="max-w-2xl mx-auto animate-fade-up">
            {/* Score card */}
            <div className="card p-8 text-center mb-8">
              <div
                className="inline-flex w-24 h-24 rounded-full items-center justify-center mb-5 animate-float"
                style={{
                  background: finalScore >= total / 2
                    ? 'linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))'
                    : 'linear-gradient(135deg, var(--color-gold), #b8860b)',
                }}
              >
                <Award className="text-white" size={40} />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                {finalScore} / {total}
              </h2>
              <p className="text-lg font-semibold mb-1" style={{ color: 'var(--color-primary)' }}>
                {scorePct}%
              </p>
              <p className="text-sm" style={{ color: 'var(--color-text-soft)' }}>
                {getScoreMessage(scorePct)}
              </p>
            </div>

            {/* Review answers */}
            <h3 className="font-bold text-lg mb-4" style={{ color: 'var(--color-text)' }}>
              {language === 'ur' ? 'جائزہ' : 'Review Answers'}
            </h3>
            <div className="space-y-4">
              {quizQuestions.map((question, i) => {
                const userAnswer = answers[i];
                const correct = userAnswer === question.correctIndex;
                return (
                  <div
                    key={question.id}
                    className="rounded-2xl p-5 border"
                    style={{
                      backgroundColor: 'var(--color-surface)',
                      borderColor: correct ? 'var(--color-primary)' : 'var(--color-border)',
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="shrink-0 mt-0.5">
                        {correct ? (
                          <CheckCircle2 size={18} style={{ color: 'var(--color-primary)' }} />
                        ) : (
                          <XCircle size={18} style={{ color: 'var(--color-error, #c0392b)' }} />
                        )}
                      </div>
                      <p className="font-semibold text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                        {language === 'ur' ? question.questionUrdu : question.question}
                      </p>
                    </div>
                    <div className="ml-7 space-y-1.5 text-sm">
                      {!correct && userAnswer !== null && (
                        <p style={{ color: 'var(--color-error, #c0392b)' }}>
                          {language === 'ur' ? 'آپ کا جواب: ' : 'Your answer: '}
                          {language === 'ur' ? question.optionsUrdu[userAnswer] : question.options[userAnswer]}
                        </p>
                      )}
                      <p style={{ color: 'var(--color-primary)' }}>
                        {language === 'ur' ? 'صحیح جواب: ' : 'Correct answer: '}
                        {language === 'ur' ? question.optionsUrdu[question.correctIndex] : question.options[question.correctIndex]}
                      </p>
                      <p className="text-xs italic pt-1" style={{ color: 'var(--color-text-soft)' }}>
                        {language === 'ur' ? question.explanationUrdu : question.explanation}
                      </p>
                      <p className="text-[11px] font-semibold" style={{ color: 'var(--color-gold)' }}>
                        — {question.reference}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <button onClick={restart} className="btn-primary">
                <RefreshCw size={18} />
                {language === 'ur' ? 'دوبارہ کوشش کریں' : 'Restart Quiz'}
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
