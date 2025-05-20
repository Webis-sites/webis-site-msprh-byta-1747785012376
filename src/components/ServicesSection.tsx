'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaScissors, FaPaintBrush, FaSprayCan, FaHandSparkles, FaMagic, FaGem } from 'react-icons/fa';
import Image from 'next/image';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, price, imageUrl }) => {
  return (
    <motion.div
      className="relative h-full rounded-xl overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 z-0">
        <Image 
          src={imageUrl} 
          alt={title} 
          fill 
          className="object-cover opacity-10"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="relative z-10 h-full backdrop-blur-md bg-white/30 border border-white/20 p-6 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-[#7a219e] text-white p-3 rounded-full">
            {icon}
          </div>
          <div className="text-[#7a219e] font-bold text-xl">{price}</div>
        </div>
        <h3 className="text-xl font-bold mb-2 text-right text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 text-right flex-grow">{description}</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="self-start mt-auto bg-[#7a219e] text-white py-2 px-4 rounded-md text-sm hover:bg-[#6a118e] transition-colors"
          onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          aria-label={`הזמן תור ל${title}`}
        >
          הזמן תור
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <FaScissors size={24} />,
      title: "תספורת נשים",
      description: "תספורת מקצועית המותאמת אישית לסגנון ומבנה הפנים שלך, כולל ייעוץ סגנון וסטיילינג.",
      price: "₪180-250",
      imageUrl: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
    },
    {
      icon: <FaScissors size={24} />,
      title: "תספורת גברים",
      description: "תספורת מדויקת וסטיילינג לגברים, כולל טיפול בזקן ועיצוב שיער.",
      price: "₪120-150",
      imageUrl: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      icon: <FaPaintBrush size={24} />,
      title: "צביעת שיער",
      description: "צביעה מקצועית בטכניקות מתקדמות, כולל בליאז', אומברה, והיילייטס.",
      price: "₪280-450",
      imageUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
    },
    {
      icon: <FaSprayCan size={24} />,
      title: "החלקות שיער",
      description: "טיפולי החלקה מתקדמים להפחתת נפח ולשיער חלק ומבריק.",
      price: "₪500-800",
      imageUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
    },
    {
      icon: <FaHandSparkles size={24} />,
      title: "טיפולי שיער",
      description: "טיפולים מזינים ומשקמים לשיער יבש, פגום או צבוע.",
      price: "₪200-350",
      imageUrl: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      icon: <FaMagic size={24} />,
      title: "עיצוב שיער לאירועים",
      description: "תסרוקות מיוחדות לאירועים, חתונות ומסיבות.",
      price: "₪250-400",
      imageUrl: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80"
    },
    {
      icon: <FaGem size={24} />,
      title: "חבילת כלה",
      description: "חבילה מושלמת לכלה הכוללת ניסיון, תסרוקת לאירוע ועיצוב שיער.",
      price: "₪800-1200",
      imageUrl: "https://images.unsplash.com/photo-1519741347686-c1e331fcb4d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="services" className="py-16 bg-[#ebebeb]" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">השירותים שלנו</h2>
            <div className="h-1 w-24 bg-[#7a219e] mx-auto rounded-full"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
          >
            אנו מציעים מגוון רחב של שירותי עיצוב שיער ברמה הגבוהה ביותר, מותאמים אישית לצרכים ולסגנון שלך.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
            />
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-6">לא מצאת את מה שחיפשת? צור איתנו קשר לקבלת מידע נוסף על שירותים מותאמים אישית.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#7a219e] text-white py-3 px-8 rounded-md hover:bg-[#6a118e] transition-colors"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            צור קשר
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;