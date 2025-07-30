import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram, Twitter, Linkedin, Globe, Star } from 'lucide-react';

const CreatorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const creators = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Tech Influencer',
      followers: '2.5M',
      category: 'Technology',
      avatar: '👩‍💻',
      bio: 'Sharing insights about AI, machine learning, and the future of technology.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        website: '#'
      },
      rating: 4.9,
      projects: 45
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Startup Mentor',
      followers: '1.8M',
      category: 'Business',
      avatar: '👨‍💼',
      bio: 'Helping entrepreneurs build successful startups and scale their businesses.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        website: '#'
      },
      rating: 4.8,
      projects: 32
    },
    {
      id: 3,
      name: 'Aisha Patel',
      role: 'Design Creator',
      followers: '3.2M',
      category: 'Design',
      avatar: '👩‍🎨',
      bio: 'Creating beautiful digital experiences and sharing design principles.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        website: '#'
      },
      rating: 4.9,
      projects: 67
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Content Creator',
      followers: '1.5M',
      category: 'Education',
      avatar: '👨‍🏫',
      bio: 'Making complex topics simple through engaging educational content.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        website: '#'
      },
      rating: 4.7,
      projects: 28
    },
    {
      id: 5,
      name: 'Emma Thompson',
      role: 'Innovation Leader',
      followers: '2.1M',
      category: 'Innovation',
      avatar: '👩‍🔬',
      bio: 'Exploring cutting-edge innovations and their impact on society.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        website: '#'
      },
      rating: 4.8,
      projects: 39
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Product Strategist',
      followers: '1.9M',
      category: 'Product',
      avatar: '👨‍💻',
      bio: 'Building products that users love and businesses need.',
      social: {
        instagram: '#',
        twitter: '#',
        linkedin: '#',
        website: '#'
      },
      rating: 4.9,
      projects: 41
    }
  ];

  return (
    <section id="creators" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Creators</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Connect with inspiring creators who are shaping the future through innovation, 
            education, and creative expression.
          </motion.p>
        </motion.div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{creator.avatar}</div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{creator.rating}</span>
                </div>
              </div>

              {/* Creator Info */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {creator.name}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-2">
                  {creator.role}
                </p>
                <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                  {creator.category}
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {creator.bio}
              </p>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-gray-400">
                  <span className="text-white font-semibold">{creator.followers}</span> followers
                </div>
                <div className="text-gray-400">
                  <span className="text-white font-semibold">{creator.projects}</span> projects
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3">
                  <a href={creator.social.instagram} className="text-gray-400 hover:text-pink-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href={creator.social.twitter} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={creator.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={creator.social.website} className="text-gray-400 hover:text-purple-400 transition-colors">
                    <Globe className="w-5 h-5" />
                  </a>
                </div>
                <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                  Follow
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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
            Become a Creator
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CreatorsSection; 