import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, MessageCircle, Calendar, Award } from 'lucide-react';

const MentorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mentors = [
    {
      id: 1,
      name: 'Dr. Elena Rodriguez',
      role: 'AI Research Director',
      company: 'TechCorp',
      experience: '15+ years',
      rating: 4.9,
      sessions: 150,
      avatar: '👩‍🔬',
      expertise: ['Machine Learning', 'AI Ethics', 'Research'],
      bio: 'Leading AI researcher with expertise in machine learning and ethical AI development.',
      availability: 'Available'
    },
    {
      id: 2,
      name: 'Michael Chang',
      role: 'Startup Advisor',
      company: 'Venture Capital',
      experience: '12+ years',
      rating: 4.8,
      sessions: 120,
      avatar: '👨‍💼',
      expertise: ['Business Strategy', 'Fundraising', 'Scaling'],
      bio: 'Serial entrepreneur and venture capitalist helping startups scale globally.',
      availability: 'Available'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      role: 'UX Design Lead',
      company: 'Design Studio',
      experience: '10+ years',
      rating: 4.9,
      sessions: 95,
      avatar: '👩‍🎨',
      expertise: ['User Experience', 'Product Design', 'Design Systems'],
      bio: 'Award-winning designer focused on creating exceptional user experiences.',
      availability: 'Limited'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Engineering Manager',
      company: 'Tech Giant',
      experience: '18+ years',
      rating: 4.7,
      sessions: 180,
      avatar: '👨‍💻',
      expertise: ['Software Architecture', 'Team Leadership', 'DevOps'],
      bio: 'Senior engineering leader with expertise in building scalable systems.',
      availability: 'Available'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'Marketing Strategist',
      company: 'Growth Agency',
      experience: '14+ years',
      rating: 4.8,
      sessions: 110,
      avatar: '👩‍💼',
      expertise: ['Digital Marketing', 'Brand Strategy', 'Growth Hacking'],
      bio: 'Marketing expert helping companies achieve rapid growth and market dominance.',
      availability: 'Available'
    },
    {
      id: 6,
      name: 'Robert Kim',
      role: 'Product Manager',
      company: 'Innovation Lab',
      experience: '11+ years',
      rating: 4.9,
      sessions: 130,
      avatar: '👨‍💻',
      expertise: ['Product Strategy', 'User Research', 'Agile Development'],
      bio: 'Product leader with a track record of launching successful products.',
      availability: 'Limited'
    }
  ];

  return (
    <section id="mentors" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
            Expert <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Mentors</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Learn from industry experts who have been there and done that. 
            Get personalized guidance to accelerate your growth and success.
          </motion.p>
        </motion.div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{mentor.avatar}</div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">{mentor.rating}</span>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {mentor.name}
                </h3>
                <p className="text-purple-400 text-sm font-medium mb-1">
                  {mentor.role}
                </p>
                <p className="text-gray-400 text-sm mb-2">
                  {mentor.company}
                </p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  mentor.availability === 'Available' 
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {mentor.availability}
                </span>
              </div>

              {/* Bio */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {mentor.bio}
              </p>

              {/* Expertise */}
              <div className="mb-4">
                <h4 className="text-white text-sm font-medium mb-2">Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <div className="text-gray-400">
                  <span className="text-white font-semibold">{mentor.experience}</span> experience
                </div>
                <div className="text-gray-400">
                  <span className="text-white font-semibold">{mentor.sessions}</span> sessions
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Book Session
                </button>
                <button className="px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition-all duration-300">
                  <Calendar className="w-4 h-4" />
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
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            <Award className="w-5 h-5" />
            Become a Mentor
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MentorsSection; 