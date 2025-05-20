'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const HeroSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
        delay: 0.8,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: '0 10px 25px rgba(122, 33, 158, 0.3)',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section 
      id="hero-section" 
      dir="rtl" 
      className="relative h-screen w-full overflow-hidden bg-[#ebebeb] text-right"
      aria-label="מספרה ביתא - מספרה מוביל בישראל"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div 
          className="relative h-full w-full"
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        >
          <Image
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt="מספרה מודרנית"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Glassmorphism Card */}
          <motion.div 
            className="mx-auto w-full rounded-2xl border border-white/20 bg-white/10 p-8 backdrop-blur-lg sm:p-12 md:p-16"
            style={{ 
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05))'
            }}
          >
            {/* Logo/Brand */}
            <motion.div 
              className="mb-6 text-center sm:text-right"
              variants={itemVariants}
            >
              <h2 className="text-2xl font-bold text-[#ebebeb] sm:text-3xl">מספרה ביתא</h2>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              className="mb-4 text-4xl font-extrabold leading-tight text-[#ebebeb] sm:text-5xl md:text-6xl"
              variants={itemVariants}
            >
              מספרה מוביל בישראל
            </motion.h1>

            {/* Description */}
            <motion.p 
              className="mb-8 max-w-2xl text-lg text-[#ebebeb]/90 sm:text-xl"
              variants={itemVariants}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>

            {/* Additional Description */}
            <motion.p 
              className="mb-10 max-w-2xl text-base text-[#ebebeb]/80"
              variants={itemVariants}
            >
              אנחנו מספרה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex justify-start"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Link 
                  href="#booking" 
                  className="group flex items-center gap-2 rounded-lg bg-[#7a219e] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-[#8a31ae] focus:outline-none focus:ring-2 focus:ring-[#7a219e] focus:ring-offset-2"
                  aria-label="קבע תור עכשיו"
                >
                  <FaCalendarAlt className="text-xl transition-transform duration-300 group-hover:-translate-y-1" />
                  <span>קבע תור עכשיו</span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-10 h-20 w-20 rounded-full bg-[#7a219e]/20 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: 1.2, duration: 0.8 }
        }}
      />
      <motion.div 
        className="absolute right-10 top-10 h-16 w-16 rounded-full bg-[#7a219e]/20 backdrop-blur-md"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: 1.4, duration: 0.8 }
        }}
      />
    </section>
  );
};

export default HeroSection;