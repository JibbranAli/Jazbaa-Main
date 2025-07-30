import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, ArrowRight } from 'lucide-react';

const JourneySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      id: 1,
      title: 'Join the Community',
      description: 'Sign up and connect with like-minded individuals who share your passion for innovation.',
      icon: '🚀',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Discover Opportunities',
      description: 'Explore various programs, mentorship opportunities, and collaborative projects.',
      icon: '🔍',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Build Your Network',
      description: 'Connect with mentors, creators, and entrepreneurs from around the world.',
      icon: '🌐',
      status: 'active'
    },
    {
      id: 4,
      title: 'Launch Your Project',
      description: 'Get support and resources to bring your ideas to life and launch your startup.',
      icon: '⚡',
      status: 'upcoming'
    },
    {
      id: 5,
      title: 'Scale & Grow',
      description: 'Access advanced resources, funding opportunities, and global markets.',
      icon: '📈',
      status: 'upcoming'
    },
    {
      id: 6,
      title: 'Give Back',
      description: 'Mentor others and contribute to the next generation of innovators.',
      icon: '🤝',
      status: 'upcoming'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
            Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Embark on a transformative journey from idea to impact. 
            Every step is designed to accelerate your growth and success.
          </motion.p>
        </motion.div>

        {/* Journey Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-purple-500 to-blue-500 h-full hidden lg:block"></div>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-col gap-8`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex items-center gap-2">
                        {step.status === 'completed' && (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        )}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          step.status === 'completed' 
                            ? 'bg-green-500/20 text-green-400'
                            : step.status === 'active'
                            ? 'bg-purple-500/20 text-purple-400'
                            : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {step.status === 'completed' ? 'Completed' : 
                           step.status === 'active' ? 'Active' : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Step Number */}
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold border-4 ${
                    step.status === 'completed'
                      ? 'bg-green-500 border-green-400 text-white'
                      : step.status === 'active'
                      ? 'bg-purple-500 border-purple-400 text-white'
                      : 'bg-gray-600 border-gray-500 text-gray-300'
                  }`}>
                    {step.id}
                  </div>
                </div>

                {/* Spacer for mobile */}
                <div className="flex-1 lg:hidden"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection; 