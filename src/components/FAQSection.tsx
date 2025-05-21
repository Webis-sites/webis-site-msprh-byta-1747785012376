'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "איך אני יכול/ה לקבוע תור?",
      answer: "ניתן לקבוע תור דרך האתר שלנו, באמצעות הטלפון או דרך האפליקציה שלנו. אנו ממליצים לקבוע תור מראש לפחות שבוע מראש כדי להבטיח את הזמן המועדף עליכם."
    },
    {
      question: "מה מדיניות הביטולים שלכם?",
      answer: "אנו מבקשים להודיע על ביטול לפחות 24 שעות מראש. ביטולים שנעשים פחות מ-24 שעות לפני התור עשויים להיות כרוכים בדמי ביטול של 50% מעלות השירות."
    },
    {
      question: "אילו מוצרי שיער אתם משתמשים?",
      answer: "אנו משתמשים אך ורק במוצרים איכותיים וידידותיים לסביבה מהמותגים המובילים בעולם. כל המוצרים שלנו נבחרים בקפידה כדי להבטיח את הטיפול הטוב ביותר לשיער שלך."
    },
    {
      question: "האם אתם מציעים שירותי צביעת שיער?",
      answer: "כן, אנו מציעים מגוון רחב של שירותי צביעה, כולל צבעים מלאים, הבהרות, גוונים, ושיטות צביעה מתקדמות כמו בלאייג', אומברה, והיילייטס."
    },
    {
      question: "כמה זמן אורך טיפול ממוצע?",
      answer: "משך הטיפול תלוי בסוג השירות. תספורת רגילה אורכת כ-30-45 דקות, בעוד שצביעה או טיפולים מיוחדים עשויים לקחת בין שעה לשלוש שעות. בעת קביעת התור, נוכל לתת לך הערכת זמן מדויקת יותר."
    },
    {
      question: "האם אתם מציעים שירותים לילדים?",
      answer: "כן, אנו מציעים תספורות לילדים בכל הגילאים. יש לנו צוות מיומן שיודע כיצד לגרום לחוויה להיות נעימה ומהנה עבור הקטנים."
    },
    {
      question: "האם יש צורך להגיע עם שיער רטוב או יבש?",
      answer: "מומלץ להגיע עם שיער נקי ויבש, אלא אם כן נאמר לך אחרת בעת קביעת התור. אנחנו נשטוף את שיערך במספרה אם הטיפול דורש זאת."
    },
    {
      question: "האם אתם מוכרים מוצרי שיער לשימוש ביתי?",
      answer: "כן, אנו מוכרים מגוון של מוצרי שיער מקצועיים לשימוש ביתי. הספרים שלנו ישמחו להמליץ על המוצרים המתאימים ביותר לסוג השיער שלך ולצרכים הספציפיים שלך."
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      id="faq-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-white to-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-right text-gray-800">
            שאלות נפוצות
          </h2>
          <div className="h-1 w-24 bg-[#7a219e] rounded-full mx-auto mb-6"></div>
          <p className="text-gray-600 text-right">
            כאן תוכלו למצוא תשובות לשאלות הנפוצות ביותר על השירותים שלנו במספרה ביתא
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="rounded-xl overflow-hidden"
            >
              <motion.div
                className="backdrop-blur-md bg-white/80 border border-white/20 shadow-sm hover:shadow-md transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  className="w-full p-5 text-right flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#7a219e] focus:ring-opacity-50"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="font-medium text-lg text-gray-800">{item.question}</span>
                  <motion.div
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#7a219e] flex-shrink-0 mr-2"
                  >
                    {activeIndex === index ? <FiMinus size={24} /> : <FiPlus size={24} />}
                  </motion.div>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 pt-0 text-right text-gray-600 border-t border-gray-100">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-xl backdrop-blur-md bg-[#7a219e]/90 text-white text-right shadow-lg">
          <h3 className="text-xl font-bold mb-3">יש לך שאלה נוספת?</h3>
          <p className="mb-4">אנחנו כאן כדי לעזור! צור איתנו קשר ונשמח לענות על כל שאלה.</p>
          <button className="bg-white text-[#7a219e] hover:bg-[#ebebeb] transition-colors duration-300 font-medium py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50">
            צור קשר
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;