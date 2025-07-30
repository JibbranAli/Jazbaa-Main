import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Innovation Summit 2024',
      category: 'Events',
      image: '🎪',
      description: 'Our annual innovation summit brought together 500+ creators and entrepreneurs.',
      date: 'March 2024',
      attendees: '500+'
    },
    {
      id: 2,
      title: 'Startup Pitch Competition',
      category: 'Competitions',
      image: '🏆',
      description: 'Winners of our global startup pitch competition received $100K in funding.',
      date: 'February 2024',
      participants: '200+'
    },
    {
      id: 3,
      title: 'AI Workshop Series',
      category: 'Education',
      image: '🤖',
      description: 'Hands-on workshops teaching AI implementation for startups.',
      date: 'January 2024',
      participants: '150+'
    },
    {
      id: 4,
      title: 'Global Hackathon',
      category: 'Events',
      image: '💻',
      description: '48-hour hackathon with participants from 25+ countries.',
      date: 'December 2023',
      participants: '300+'
    },
    {
      id: 5,
      title: 'Mentorship Program',
      category: 'Programs',
      image: '👥',
      description: 'One-on-one mentorship sessions with industry experts.',
      date: 'November 2023',
      participants: '100+'
    },
    {
      id: 6,
      title: 'Design Sprint',
      category: 'Workshops',
      image: '🎨',
      description: '5-day design sprint to solve real-world problems.',
      date: 'October 2023',
      participants: '75+'
    },
    {
      id: 7,
      title: 'Tech Conference',
      category: 'Events',
      image: '📱',
      description: 'Annual technology conference featuring cutting-edge innovations.',
      date: 'September 2023',
      attendees: '800+'
    },
    {
      id: 8,
      title: 'Coding Bootcamp',
      category: 'Education',
      image: '⚡',
      description: 'Intensive coding bootcamp for aspiring developers.',
      date: 'August 2023',
      participants: '120+'
    },
    {
      id: 9,
      title: 'Networking Mixer',
      category: 'Events',
      image: '🍷',
      description: 'Monthly networking events for community members.',
      date: 'July 2023',
      attendees: '200+'
    }
  ];

  const categories = ['All', 'Events', 'Education', 'Competitions', 'Programs', 'Workshops'];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Gallery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our vibrant community events, workshops, and success stories 
            that showcase the power of collaboration and innovation.
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="text-6xl text-center mb-4">{item.image}</div>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-2">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">{item.date}</span>
                  <span className="text-purple-400 font-medium">
                    {item.attendees || item.participants}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl w-full border border-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {filteredItems[selectedImage]?.title}
                  </h3>
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <div className="text-8xl text-center mb-6">
                  {filteredItems[selectedImage]?.image}
                </div>
                
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full mb-3">
                    {filteredItems[selectedImage]?.category}
                  </span>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {filteredItems[selectedImage]?.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">
                      {filteredItems[selectedImage]?.date}
                    </span>
                    <span className="text-purple-400 font-medium">
                      {filteredItems[selectedImage]?.attendees || filteredItems[selectedImage]?.participants}
                    </span>
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            Join Our Next Event
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GallerySection; 