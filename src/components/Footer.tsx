'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const Footer: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const footerLinks = [
    { name: 'דף הבית', href: '/' },
    { name: 'שירותים', href: '/#services' },
    { name: 'גלריה', href: '/#gallery' },
    { name: 'צוות', href: '/#team' },
    { name: 'מחירון', href: '/#prices' },
    { name: 'צור קשר', href: '/#contact' },
  ];

  const socialLinks = [
    { name: 'פייסבוק', icon: <FaFacebook />, href: 'https://facebook.com' },
    { name: 'אינסטגרם', icon: <FaInstagram />, href: 'https://instagram.com' },
    { name: 'וואטסאפ', icon: <FaWhatsapp />, href: 'https://wa.me/972501234567' },
  ];

  return (
    <footer id="footer" className="relative bg-gray-900 text-white" dir="rtl">
      {/* Glassmorphism decorative element */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          {/* Logo and About */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <div className="flex items-center justify-end mb-4">
                <div className="mr-3">
                  <h2 className="text-2xl font-bold text-right">מספרה ביתא</h2>
                  <p className="text-sm text-gray-300">עיצוב שיער מקצועי</p>
                </div>
                <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-purple-400">
                  <Image 
                    src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="מספרה ביתא לוגו"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                אנחנו מספרה מוביל בתחום הבידור עם ניסיון של שנים רבות. אנחנו מתמחים במתן שירות מקצועי ואיכותי ללקוחותינו.
              </p>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-right border-r-4 border-[#7a219e] pr-3">ניווט מהיר</h3>
              <ul className="space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Link 
                      href={link.href} 
                      className="text-gray-300 hover:text-[#ebebeb] transition-colors duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-right border-r-4 border-[#7a219e] pr-3">צור קשר</h3>
              <ul className="space-y-3">
                <li className="flex items-center justify-end">
                  <span className="text-gray-300 mr-2">03-1234567</span>
                  <FaPhone className="text-[#7a219e]" />
                </li>
                <li className="flex items-center justify-end">
                  <span className="text-gray-300 mr-2">info@beta-salon.co.il</span>
                  <FaEnvelope className="text-[#7a219e]" />
                </li>
                <li className="flex items-center justify-end">
                  <span className="text-gray-300 mr-2">רחוב הרצל 123, תל אביב</span>
                  <FaMapMarkerAlt className="text-[#7a219e]" />
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Hours & Social */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-right border-r-4 border-[#7a219e] pr-3">שעות פעילות</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex justify-between">
                  <span className="text-gray-300">9:00 - 20:00</span>
                  <span>ראשון - חמישי</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">9:00 - 14:00</span>
                  <span>שישי</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-300">סגור</span>
                  <span>שבת</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-4 text-right border-r-4 border-[#7a219e] pr-3">עקבו אחרינו</h3>
              <div className="flex justify-end space-x-4 space-x-reverse">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 p-2 rounded-full text-[#ebebeb] hover:bg-[#7a219e] transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">
          <p>© {currentYear} מספרה ביתא. כל הזכויות שמורות.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 left-6 p-3 rounded-full bg-[#7a219e] text-white shadow-lg z-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a219e]"
            aria-label="חזרה למעלה"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;