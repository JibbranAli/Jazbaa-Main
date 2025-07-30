import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Zap, ExternalLink, TrendingUp, Users, DollarSign } from 'lucide-react';

const StartupsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Startups' },
    { id: 'tech', name: 'Technology' },
    { id: 'health', name: 'Healthcare' },
    { id: 'finance', name: 'Fintech' },
    { id: 'education', name: 'Education' },
  ];

  const startups = [
    {
      id: 1,
      name: 'TechFlow',
      category: 'tech',
      description: 'AI-powered workflow automation platform',
      funding: '$2.5M',
      team: 15,
      growth: '+300%',
      logo: '🚀',
      status: 'Series A'
    },
    {
      id: 2,
      name: 'HealthSync',
      category: 'health',
      description: 'Digital health monitoring and telemedicine',
      funding: '$1.8M',
      team: 12,
      growth: '+250%',
      logo: '🏥',
      status: 'Seed'
    },
    {
      id: 3,
      name: 'PayWave',
      category: 'finance',
      description: 'Next-generation payment processing',
      funding: '$3.2M',
      team: 20,
      growth: '+400%',
      logo: '💳',
      status: 'Series A'
    },
    {
      id: 4,
      name: 'EduTech Pro',
      category: 'education',
      description: 'Personalized learning platform',
      funding: '$1.2M',
      team: 8,
      growth: '+180%',
      logo: '📚',
      status: 'Seed'
    },
    {
      id: 5,
      name: 'CloudSync',
      category: 'tech',
      description: 'Enterprise cloud management solution',
      funding: '$4.1M',
      team: 25,
      growth: '+350%',
      logo: '☁️',
      status: 'Series B'
    },
    {
      id: 6,
      name: 'MediCare+',
      category: 'health',
      description: 'AI-driven medical diagnostics',
      funding: '$2.8M',
      team: 18,
      growth: '+280%',
      logo: '🔬',
      status: 'Series A'
    }
  ];

  const filteredStartups = selectedCategory === 'all' 
    ? startups 
    : startups.filter(startup => startup.category === selectedCategory);

  return (
    <section id="startups" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            Featured <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Startups</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover innovative startups that are reshaping industries and creating the future.
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
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Startups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredStartups.map((startup, index) => (
              <motion.div
                key={startup.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{startup.logo}</div>
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                    {startup.status}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2">
                  {startup.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {startup.description}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-green-400 mb-1">
                      <DollarSign className="w-4 h-4" />
                    </div>
                    <div className="text-white font-semibold text-sm">{startup.funding}</div>
                    <div className="text-gray-400 text-xs">Funding</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-blue-400 mb-1">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="text-white font-semibold text-sm">{startup.team}</div>
                    <div className="text-gray-400 text-xs">Team</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-yellow-400 mb-1">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="text-white font-semibold text-sm">{startup.growth}</div>
                    <div className="text-gray-400 text-xs">Growth</div>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Zap className="w-5 h-5" />
            Join Our Startup Program
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StartupsSection; 