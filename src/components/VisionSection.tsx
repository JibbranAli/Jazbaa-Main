import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Globe, Heart, Zap } from 'lucide-react';

const VisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const visionPillars = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We believe in pushing boundaries and exploring new possibilities. Every breakthrough starts with a bold vision.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Impact',
      description: 'Our mission is to create positive change worldwide, connecting innovators across borders and cultures.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Community Driven',
      description: 'We foster a supportive ecosystem where collaboration, mentorship, and shared success thrive.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Exponential Growth',
      description: 'We accelerate the growth of ideas, startups, and individuals through strategic support and resources.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Foundation',
      description: 'Jazbaa was founded with a vision to democratize innovation and entrepreneurship.'
    },
    {
      year: '2021',
      title: 'First 1000 Members',
      description: 'Reached our first milestone of 1000 active members from around the world.'
    },
    {
      year: '2022',
      title: '50 Startups Launched',
      description: 'Helped launch 50 successful startups with combined valuation of $100M+.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded to 25+ countries with local innovation hubs and programs.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Launched AI-powered mentorship and resource matching platform.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Aiming to impact 1M+ innovators and launch 1000+ successful ventures.'
    }
  ];

  return (
    <section id="vision" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Vision</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            To create a world where innovation knows no boundaries, where every idea has the potential to become reality, 
            and where collaboration drives unprecedented progress for humanity.
          </motion.p>
        </motion.div>

        {/* Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {visionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-6`}>
                <div className="text-white">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-12 border border-purple-500/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Mission
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              To democratize access to innovation resources, mentorship, and opportunities, 
              enabling individuals from all backgrounds to turn their ideas into impactful solutions 
              that address global challenges and create lasting positive change.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } flex-col gap-8`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                    <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                      <div className="text-2xl font-bold text-purple-400 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-300">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="relative z-10">
                    <div className="w-8 h-8 bg-purple-500 rounded-full border-4 border-white"></div>
                  </div>

                  {/* Spacer for mobile */}
                  <div className="flex-1 lg:hidden"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-md rounded-3xl p-12 border border-purple-500/30">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Looking Forward
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto mb-8">
              By 2030, we envision Jazbaa as the world's leading innovation platform, 
              having empowered millions of creators, entrepreneurs, and innovators to build 
              a better future for all.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1M+</div>
                <div className="text-gray-400">Innovators Empowered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">1000+</div>
                <div className="text-gray-400">Successful Ventures</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-gray-400">Countries Reached</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection; 