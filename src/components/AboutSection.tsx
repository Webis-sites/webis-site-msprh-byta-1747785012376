'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FaCalendarAlt, FaScissors, FaStar } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <section 
      id="about-section" 
      dir="rtl" 
      className="py-16 md:py-24 bg-gradient-to-br from-[#ebebeb]/80 to-white overflow-hidden"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div 
            variants={itemVariants} 
            className="w-full md:w-1/2 relative"
          >
            <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-[#7a219e]/10 backdrop-blur-[2px] z-10 rounded-2xl border border-white/20"></div>
              <Image
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="מספרה ביתא - פנים הסלון"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            <motion.div 
              variants={itemVariants}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white/80 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#7a219e]/20 w-48"
            >
              <div className="flex items-center gap-2 text-right">
                <div className="flex-1">
                  <p className="text-[#7a219e] font-bold">ניסיון מקצועי</p>
                  <p className="text-gray-700 text-sm">מעל 15 שנים</p>
                </div>
                <div className="bg-[#7a219e] p-2 rounded-full text-white">
                  <FaStar />
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            variants={itemVariants} 
            className="w-full md:w-1/2 text-right"
          >
            <motion.div 
              variants={itemVariants}
              className="inline-block bg-[#7a219e]/10 px-4 py-1 rounded-full mb-4"
            >
              <p className="text-[#7a219e] font-medium text-sm">אודותינו</p>
            </motion.div>
            
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
            >
              מספרה ביתא - <span className="text-[#7a219e]">המקום שלך לסגנון מושלם</span>
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-6 leading-relaxed text-lg"
            >
              אנחנו מספרה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#ebebeb] shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#7a219e] p-2 rounded-full text-white">
                    <FaScissors />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">מומחיות</h3>
                    <p className="text-sm text-gray-600">טכניקות חיתוך מתקדמות</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-sm p-4 rounded-xl border border-[#ebebeb] shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-[#7a219e] p-2 rounded-full text-white">
                    <FaStar />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">איכות</h3>
                    <p className="text-sm text-gray-600">מוצרים מקצועיים בלבד</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-start"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#7a219e] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FaCalendarAlt />
                <span>הזמן תור עכשיו</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
        
        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">הצוות המקצועי שלנו</h3>
            <p className="text-gray-600 mt-2">הכירו את הספרים המומחים שלנו</p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              {
                name: "דניאל כהן",
                role: "מעצב שיער בכיר",
                image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "מיכל לוי",
                role: "מומחית צבע",
                image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "יוסי אברהם",
                role: "מעצב תסרוקות",
                image: "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur-md rounded-xl overflow-hidden shadow-lg border border-[#ebebeb] group"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 text-right">
                  <h4 className="font-bold text-lg text-gray-800">{member.name}</h4>
                  <p className="text-[#7a219e]">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;