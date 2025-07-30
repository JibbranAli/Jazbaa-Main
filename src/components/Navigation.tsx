import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
<<<<<<< HEAD:src/Navigation.tsx
=======
    { name: 'Home', href: '#home' },
>>>>>>> 4cbc952565ae295ec456dd76b972c74f65460339:src/components/Navigation.tsx
    { name: 'About', href: '#about' },
    { name: 'Startups', href: '#startups' },
    { name: 'Creators', href: '#creators' },
    { name: 'Journey', href: '#journey' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Vision', href: '#vision' },
    { name: 'Gallery', href: '#gallery' },
<<<<<<< HEAD:src/Navigation.tsx
    { name: 'Join', href: '#join' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
=======
    { name: 'Join Us', href: '#join' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
>>>>>>> 4cbc952565ae295ec456dd76b972c74f65460339:src/components/Navigation.tsx
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
<<<<<<< HEAD:src/Navigation.tsx
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#hero" className="text-2xl font-bold bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent">
              JAZBAA 4.0
=======
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <a href="#home" className="text-2xl font-bold text-white">
              Jazbaa
>>>>>>> 4cbc952565ae295ec456dd76b972c74f65460339:src/components/Navigation.tsx
            </a>
          </motion.div>

          {/* Desktop Navigation */}
<<<<<<< HEAD:src/Navigation.tsx
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-200 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Apply Now
            </motion.button>
=======
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
>>>>>>> 4cbc952565ae295ec456dd76b972c74f65460339:src/components/Navigation.tsx
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
<<<<<<< HEAD:src/Navigation.tsx
              className="text-white p-2"
=======
              className="text-gray-300 hover:text-white p-2"
>>>>>>> 4cbc952565ae295ec456dd76b972c74f65460339:src/components/Navigation.tsx
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
<<<<<<< HEAD:src/Navigation.tsx
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-md rounded-lg mt-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-white/80 hover:text-white hover:bg-white/10 rounded-md transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button className="w-full mt-4 bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-6 py-2 rounded-full font-medium">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
=======
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-black/95 backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
>>>>>>> 4cbc952565ae295ec456dd76b972c74f65460339:src/components/Navigation.tsx
  );
};

export default Navigation; 