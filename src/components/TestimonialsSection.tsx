'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  quote: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "שרה לוי",
    rating: 5,
    quote: "מספרה ביתא שינתה את חיי! התספורת החדשה שלי מקבלת מחמאות בכל מקום שאני הולכת. הצוות מקצועי ואדיב ביותר.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "דוד כהן",
    rating: 5,
    quote: "אני לקוח קבוע כבר שנתיים. הסטייליסטים כאן מבינים בדיוק מה אני רוצה גם כשאני לא יודע להסביר את זה בעצמי.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "מיכל אברהם",
    rating: 4,
    quote: "האווירה במספרה נעימה מאוד והמחירים הוגנים. תמיד יוצאת מרוצה ומרגישה מיוחדת אחרי טיפול.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "יוסי מזרחי",
    rating: 5,
    quote: "הצבע שעשו לי היה מושלם! בדיוק הגוון שרציתי. הצוות מקצועי ומעודכן בכל הטרנדים החדשים.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "רונית שמעוני",
    rating: 5,
    quote: "מספרה ביתא היא המקום היחיד שאני סומכת עליו עם השיער שלי. תמיד יוצאת מרוצה ומרגישה מטופחת.",
    avatar: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "אלון דביר",
    rating: 4,
    quote: "שירות מעולה ואווירה נעימה. הסטייליסטית הקשיבה לבקשות שלי והתוצאה הייתה טובה מאוד.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 7,
    name: "נועה ברק",
    rating: 5,
    quote: "המספרה הכי טובה בעיר! תמיד מקבלת בדיוק את מה שאני מבקשת ויוצאת מרוצה. ממליצה בחום!",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [width, setWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Determine how many testimonials to show based on screen width
  const getItemsToShow = useCallback(() => {
    if (width < 640) return 1; // Mobile
    if (width < 1024) return 2; // Tablet
    return 3; // Desktop
  }, [width]);
  
  const itemsToShow = getItemsToShow();
  const totalSlides = testimonials.length - (itemsToShow - 1);
  
  // Update width on resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    
    // Set initial width
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Auto-rotation effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, totalSlides]);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };
  
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      handleNext(); // In RTL, left arrow moves forward
    } else if (e.key === 'ArrowRight') {
      handlePrev(); // In RTL, right arrow moves backward
    }
  };
  
  // Get visible testimonials based on current index and items to show
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsToShow);
  
  // If we don't have enough testimonials at the end, wrap around to the beginning
  if (visibleTestimonials.length < itemsToShow) {
    const remaining = itemsToShow - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, remaining));
  }
  
  return (
    <section 
      id="testimonials-section" 
      dir="rtl" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-[#f9f9f9] to-[#ebebeb]"
      aria-label="המלצות לקוחות"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#7a219e] mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            הלקוחות שלנו מספרים
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-[#7a219e] mx-auto mb-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            מה אומרים עלינו הלקוחות שכבר חוו את החוויה של מספרה ביתא
          </motion.p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="המלצות לקוחות"
        >
          <div 
            ref={carouselRef}
            className="overflow-hidden"
          >
            <motion.div 
              className="flex"
              initial={false}
              animate={{ x: `${-100 * currentIndex / itemsToShow}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div 
                  key={`${testimonial.id}-${index}`}
                  className={`w-full ${itemsToShow === 1 ? 'px-4' : itemsToShow === 2 ? 'px-3 md:w-1/2' : 'px-3 md:w-1/2 lg:w-1/3'}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div 
                    className="h-full p-6 md:p-8 rounded-xl bg-white/80 backdrop-blur-md border border-white/20 shadow-lg"
                    style={{ 
                      boxShadow: '0 10px 30px rgba(122, 33, 158, 0.1)',
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-14 h-14 relative overflow-hidden rounded-full border-2 border-[#7a219e]/30">
                        {testimonial.avatar ? (
                          <Image 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            fill
                            sizes="56px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-[#7a219e]/20 flex items-center justify-center text-[#7a219e]">
                            {testimonial.name.charAt(0)}
                          </div>
                        )}
                      </div>
                      <div className="mr-4 flex-1">
                        <h3 className="font-bold text-lg text-gray-800">{testimonial.name}</h3>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar 
                              key={i} 
                              className={`${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'} ml-1`} 
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                      </div>
                      <FaQuoteRight className="text-[#7a219e]/20 text-4xl" aria-hidden="true" />
                    </div>
                    <p className="text-gray-600 text-right leading-relaxed">{testimonial.quote}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 right-0 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white/80 backdrop-blur-sm text-[#7a219e] w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#7a219e] z-10 transition-transform hover:scale-110"
            aria-label="המלצה קודמת"
          >
            <FaChevronRight className="text-lg" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white/80 backdrop-blur-sm text-[#7a219e] w-10 h-10 rounded-full flex items-center justify-center shadow-md border border-white/50 focus:outline-none focus:ring-2 focus:ring-[#7a219e] z-10 transition-transform hover:scale-110"
            aria-label="המלצה הבאה"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          
          {/* Navigation Dots */}
          <div className="flex justify-center mt-8">
            {[...Array(totalSlides)].map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`mx-1 w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-[#7a219e] transition-all ${
                  currentIndex === index ? 'bg-[#7a219e] w-6' : 'bg-[#7a219e]/30'
                }`}
                aria-label={`עבור להמלצה ${index + 1}`}
                aria-current={currentIndex === index ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;