import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Menu, 
  X, 
  Play, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Users, 
  Building, 
  Briefcase, 
  Heart,
  ArrowRight,
  Star,
  Calendar,
  Award,
  Target,
  Zap,
  ChevronDown
} from 'lucide-react';

// Navigation Component
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
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Startups', href: '#startups' },
    { name: 'Creators', href: '#creators' },
    { name: 'Journey', href: '#journey' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Vision', href: '#vision' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Join', href: '#join' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/20 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent">
              JAZBAA 4.0
            </h1>
          </motion.div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-[#e86888] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#e86888] transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-white hover:text-[#e86888] block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section id="hero" className="bg-black">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-8 flex flex-col lg:flex-row justify-between items-start">
        {/* Left: Headline */}
        <div className="flex-1 min-w-[320px]">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent block">
              Students. Startups
            </span>
            <span className="block mt-2">
              <span className="text-white text-lg font-light align-top mr-2">Established</span>
              <span className="text-white text-3xl font-bold align-top">2019</span>
            </span>
            <span className="bg-gradient-to-r from-[#6ec1e4] to-[#90ee90] bg-clip-text text-transparent block mt-2">
              Disruption Begins.
            </span>
          </h1>
        </div>
        {/* Right: Description and Stats */}
        <div className="flex-1 flex flex-col items-end mt-10 lg:mt-0">
          <div className="max-w-md text-right">
            <p className="text-white text-sm mb-6">
              Powered by LWJAZBAA — India’s biggest student-led startup revolution, where engineering minds become real-world creators.
            </p>
            <div className="flex space-x-8 justify-end">
              <div className="text-left">
                <div className="text-pink-300 text-2xl font-bold leading-none">134+</div>
                <div className="text-white text-xs mt-1">Startups</div>
              </div>
              <div className="text-left">
                <div className="text-pink-300 text-2xl font-bold leading-none">500+</div>
                <div className="text-white text-xs mt-1">Dreamers</div>
              </div>
              <div className="text-left">
                <div className="text-pink-300 text-2xl font-bold leading-none">45</div>
                <div className="text-white text-xs mt-1">Days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Middle: Dummy Image */}
      <div className="flex justify-center items-center w-full bg-black pb-0">
        <div className="w-full max-w-5xl rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10">
          <img
            src="https://dummyimage.com/1200x500/cccccc/222222&text=Event+Photo+Dummy"
            alt="Event Dummy"
            className="w-full h-[350px] md:h-[420px] object-cover object-center"
          />
        </div>
      </div>
      {/* Bottom: Quote */}
      <div className="bg-white py-8 text-center">
        <span className="text-2xl md:text-3xl font-bold text-gray-500">
          Our Engineers Can be The Creators - Mr Vimal Daga
        </span>
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: '134', label: 'Startups', icon: <Building className="text-[#e86888]" size={24} /> },
    { number: '500+', label: 'Creators', icon: <Users className="text-[#7d7eed]" size={24} /> },
    { number: '100+', label: 'Colleges', icon: <Award className="text-[#e86888]" size={24} /> },
    { number: '20+', label: 'States', icon: <MapPin className="text-[#7d7eed]" size={24} /> },
    { number: '9', label: 'Sectors', icon: <Target className="text-[#e86888]" size={24} /> },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#543ef7]/10 to-[#9cecd5]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Creator Movement of India
          </h2>
          <p className="text-lg md:text-xl text-white/80 mb-4">
            Powered by Young Innovators and Mentored by{' '}
            <span className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent font-semibold">
              Vimal Daga Sir
            </span>
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-white/70 text-lg leading-relaxed">
              JAZBAA isn't just about building startups—it's about building the future of India. 
              We believe every engineering student has the potential to solve real problems and create 
              meaningful impact. Through intensive mentorship, collaborative learning, and relentless 
              execution, we transform ideas into reality in just 72 hours.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:border-[#e86888]/50 transition-all duration-300 group-hover:scale-105">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <motion.div 
                  className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent mb-2"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-white/80 font-medium">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Startups Section
const StartupsSection = () => {
  const [activeTab, setActiveTab] = useState('HealthTech');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectors = [
    'HealthTech', 'AgriTech', 'FinTech', 'EdTech', 'Sustainability', 
    'WomenTech', 'TravelTech', 'Social Impact', 'AI for Bharat'
  ];

  const startups = {
    HealthTech: [
      {
        name: 'MediCare AI',
        pitch: 'AI-powered diagnosis for rural healthcare',
        sector: 'HealthTech',
        badges: ['Open to Invest'],
        special: null
      },
      {
        name: 'HealthBridge',
        pitch: 'Connecting patients with specialists virtually',
        sector: 'HealthTech',
        badges: ['Open to Hire'],
        special: 'Built by All-Women Team'
      },
      {
        name: 'PillTracker',
        pitch: 'Smart medication management system',
        sector: 'HealthTech',
        badges: ['Open to Invest', 'Open to Hire'],
        special: 'Flagship Startup'
      }
    ],
    AgriTech: [
      {
        name: 'FarmSmart',
        pitch: 'IoT sensors for precision farming',
        sector: 'AgriTech',
        badges: ['Open to Invest'],
        special: null
      },
      {
        name: 'CropGuard',
        pitch: 'AI-based crop disease detection',
        sector: 'AgriTech',
        badges: ['Open to Hire'],
        special: 'Built by All-Women Team'
      }
    ],
    FinTech: [
      {
        name: 'PayEasy',
        pitch: 'Digital payments for rural merchants',
        sector: 'FinTech',
        badges: ['Open to Invest'],
        special: 'Flagship Startup'
      },
      {
        name: 'MicroLend',
        pitch: 'Peer-to-peer lending platform',
        sector: 'FinTech',
        badges: ['Open to Hire'],
        special: null
      }
    ]
  };

  return (
    <section id="startups" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e86888]/10 to-[#7d7eed]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Sector-wise Startups
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Discover innovative solutions across 9 key sectors, built by passionate students 
            who dared to dream big and execute bigger.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {sectors.map((sector) => (
            <button
              key={sector}
              onClick={() => setActiveTab(sector)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === sector
                  ? 'bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        {/* Startup Cards */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {(startups[activeTab as keyof typeof startups] || startups.HealthTech).map((startup, index) => (
              <motion.div
                key={startup.name}
                className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#e86888]/50 transition-all duration-300 hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#e86888] to-[#7d7eed] rounded-lg flex items-center justify-center">
                    <Zap className="text-white" size={24} />
                  </div>
                  {startup.special && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      {startup.special}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{startup.name}</h3>
                <p className="text-white/70 mb-4">{startup.pitch}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-[#e86888]/20 text-[#e86888] px-3 py-1 rounded-full text-sm">
                    {startup.sector}
                  </span>
                  {startup.badges.map((badge) => (
                    <span key={badge} className="bg-[#7d7eed]/20 text-[#7d7eed] px-3 py-1 rounded-full text-sm">
                      {badge}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                  View Details <ExternalLink size={16} />
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

// Creators Section
const CreatorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const creators = [
    {
      name: 'Priya Sharma',
      role: 'Co-Founder, MediCare AI',
      college: 'IIT Delhi',
      city: 'New Delhi',
      status: 'Open to Hire',
      hasPitch: true
    },
    {
      name: 'Rahul Kumar',
      role: 'Founder, FarmSmart',
      college: 'NIT Trichy',
      city: 'Chennai',
      status: 'Continuing Startup Journey',
      hasPitch: true
    },
    {
      name: 'Ananya Patel',
      role: 'CTO, HealthBridge',
      college: 'BITS Pilani',
      city: 'Mumbai',
      status: 'Open to Hire',
      hasPitch: false
    },
    {
      name: 'Vikram Singh',
      role: 'CEO, PayEasy',
      college: 'DTU Delhi',
      city: 'Bangalore',
      status: 'Continuing Startup Journey',
      hasPitch: true
    },
    {
      name: 'Sneha Reddy',
      role: 'Co-Founder, CropGuard',
      college: 'VIT Vellore',
      city: 'Hyderabad',
      status: 'Open to Hire',
      hasPitch: true
    },
    {
      name: 'Arjun Mehta',
      role: 'Founder, MicroLend',
      college: 'Manipal University',
      city: 'Pune',
      status: 'Continuing Startup Journey',
      hasPitch: false
    }
  ];

  return (
    <section id="creators" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#543ef7]/10 to-[#9cecd5]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the Creators
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            The brilliant minds behind JAZBAA's success stories. Students who transformed 
            from learners to leaders in just 72 hours.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#e86888]/50 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-[#e86888] to-[#7d7eed] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {creator.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{creator.name}</h3>
                <p className="text-[#e86888] font-medium mb-2">{creator.role}</p>
                <div className="flex items-center justify-center gap-4 text-white/60 text-sm mb-4">
                  <span>{creator.college}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {creator.city}
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-3 mb-4">
                <button className="p-2 bg-blue-600/20 text-blue-400 rounded-lg hover:bg-blue-600/30 transition-colors duration-200">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 bg-gray-600/20 text-gray-400 rounded-lg hover:bg-gray-600/30 transition-colors duration-200">
                  <Github size={18} />
                </button>
                <button className="p-2 bg-purple-600/20 text-purple-400 rounded-lg hover:bg-purple-600/30 transition-colors duration-200">
                  <ExternalLink size={18} />
                </button>
              </div>

              <div className="space-y-2">
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  creator.status === 'Open to Hire' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {creator.status}
                </span>
                {creator.hasPitch && (
                  <button className="w-full mt-3 bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white py-2 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                    <Play size={16} />
                    Watch My Pitch
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
            View All Creators 
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Journey Section
const JourneySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      day: 'Day 1',
      title: 'Team Formation & Ideation',
      description: 'Students form diverse teams, brainstorm problems, and validate ideas through market research.',
      activities: ['Team Building', 'Problem Identification', 'Market Research', 'Mentor Assignment'],
      color: 'from-[#e86888] to-[#ff6b6b]'
    },
    {
      day: 'Day 2',
      title: 'UI/UX Design & Planning',
      description: 'Teams create wireframes, design user interfaces on paper, and plan their technical architecture.',
      activities: ['Wireframing', 'UI Design', 'User Journey Mapping', 'Tech Stack Planning'],
      color: 'from-[#7d7eed] to-[#6c5ce7]'
    },
    {
      day: 'Day 3',
      title: 'Prototype & Pitch',
      description: 'Final day to build working prototypes, prepare presentations, and pitch to investors.',
      activities: ['Prototype Development', 'Pitch Preparation', 'Demo Recording', 'Final Presentations'],
      color: 'from-[#9cecd5] to-[#00b894]'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e86888]/5 to-[#7d7eed]/5"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The 72-Hour Journey
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From idea to prototype in just three days. Here's how ordinary students 
            transformed into extraordinary entrepreneurs.
          </p>
        </motion.div>

        <div className="space-y-12">
          {timeline.map((phase, index) => (
            <motion.div
              key={phase.day}
              className="relative"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center`}>
                      <Calendar className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{phase.day}</h3>
                      <h4 className="text-xl text-[#e86888] font-semibold">{phase.title}</h4>
                    </div>
                  </div>
                  
                  <p className="text-white/70 text-lg leading-relaxed">
                    {phase.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {phase.activities.map((activity) => (
                      <div key={activity} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-[#e86888] to-[#7d7eed] rounded-full"></div>
                        <span className="text-white/80 text-sm">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                      <Play className="text-white/60" size={48} />
                    </div>
                    <p className="text-white/60 text-sm mt-4 text-center">
                      Watch {phase.day} highlights and learner stories
                    </p>
                  </div>
                </div>
              </div>

              {index < timeline.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-16 bg-gradient-to-b from-[#e86888] to-[#7d7eed]"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center">
              Apply for Next JAZBAA 
              <ArrowRight size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-2 justify-center">
              Bring JAZBAA to Campus
              <Building size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Mentors Section
const MentorsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mentors = [
    { name: 'Microsoft', type: 'Corporate Partner' },
    { name: 'Infosys', type: 'Technology Partner' },
    { name: 'Startup India', type: 'Government Initiative' },
    { name: 'Angel Investors Network', type: 'Investment Partner' },
    { name: 'TiE Delhi', type: 'Entrepreneurship Network' },
    { name: 'NASSCOM', type: 'Industry Partner' },
  ];

  return (
    <section id="mentors" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#543ef7]/10 to-[#9cecd5]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Investors & Mentors Wall
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Backed by industry leaders, supported by visionary investors, and guided by 
            experienced mentors who believe in the power of student innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              className="group text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 group-hover:border-[#e86888]/50 transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-[#e86888] to-[#7d7eed] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building className="text-white" size={32} />
                </div>
                <h3 className="text-white font-semibold mb-2">{mentor.name}</h3>
                <p className="text-white/60 text-sm">{mentor.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <button className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 mx-auto">
            I Want to Mentor or Invest
            <Heart size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

// Vision Section
const VisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="vision" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e86888]/10 to-[#7d7eed]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Founder Vision
          </h2>
          <h3 className="text-2xl md:text-3xl bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent font-semibold mb-8">
            "Every Student Deserves a Stage to Shine"
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                "When I see the fire in a student's eyes, the passion to solve real problems, 
                and the courage to take on challenges bigger than themselves, I see the future 
                of India. JAZBAA isn't just about building startups—it's about building 
                character, resilience, and the unwavering belief that you can change the world."
              </p>
              
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                "Every student who walks into JAZBAA walks out transformed. They don't just 
                learn to code or design—they learn to lead, to fail, to get back up, and to 
                never give up on their dreams. This is what India needs: not just engineers, 
                but nation-builders."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#e86888] to-[#7d7eed] rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">VD</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">Vimal Daga Sir</h4>
                  <p className="text-white/60">Founder & Mentor, JAZBAA</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4">
                <Play className="text-white/60" size={64} />
              </div>
              <p className="text-white/60 text-center">
                Watch Vimal Daga Sir's inspiring message about the future of student entrepreneurship
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent mb-2">
                  10,000+
                </div>
                <p className="text-white/60 text-sm">Students Impacted</p>
              </div>
              <div className="bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10 text-center">
                <div className="text-2xl font-bold bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-white/60 text-sm">Success Stories</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Gallery Section
const GallerySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const mediaItems = [
    { type: 'news', title: 'Featured in Times of India', source: 'TOI' },
    { type: 'testimonial', title: 'Student Success Story', author: 'Priya S.' },
    { type: 'social', title: 'LinkedIn Post Viral', engagement: '10K+ likes' },
    { type: 'video', title: 'Demo Day Highlights', duration: '5:30' },
    { type: 'news', title: 'TechCrunch Coverage', source: 'TC' },
    { type: 'testimonial', title: 'Mentor Feedback', author: 'Industry Expert' },
  ];

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#543ef7]/10 to-[#9cecd5]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Media & Impact Gallery
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Celebrating our journey through news features, testimonials, and the incredible 
            transformations of our JAZBAA community.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-[#e86888]/50 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center mb-4">
                {item.type === 'video' ? (
                  <Play className="text-white/60" size={32} />
                ) : (
                  <ExternalLink className="text-white/60" size={32} />
                )}
              </div>
              
              <h3 className="text-white font-semibold mb-2">{item.title}</h3>
              
              <div className="flex items-center justify-between text-sm">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'news' ? 'bg-blue-500/20 text-blue-400' :
                  item.type === 'testimonial' ? 'bg-green-500/20 text-green-400' :
                  item.type === 'social' ? 'bg-purple-500/20 text-purple-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {item.type}
                </span>
                
                <span className="text-white/60">
                  {item.source || item.author || item.engagement || item.duration}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 justify-center">
              Submit Your JAZBAA Story
              <Star size={20} />
            </button>
            <button className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center gap-2 justify-center">
              Download Media Kit
              <ExternalLink size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Join Section
const JoinSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const actions = [
    {
      title: "I'm a College",
      subtitle: "Bring JAZBAA to Campus",
      description: "Partner with us to transform your students into entrepreneurs",
      icon: <Building className="text-white" size={32} />,
      color: "from-[#e86888] to-[#ff6b6b]"
    },
    {
      title: "I'm a Company",
      subtitle: "Hire from JAZBAA",
      description: "Recruit passionate, skilled, and innovation-ready talent",
      icon: <Briefcase className="text-white" size={32} />,
      color: "from-[#7d7eed] to-[#6c5ce7]"
    },
    {
      title: "I'm an Investor",
      subtitle: "Fund a Startup",
      description: "Invest in the next generation of Indian innovators",
      icon: <Target className="text-white" size={32} />,
      color: "from-[#9cecd5] to-[#00b894]"
    },
    {
      title: "I'm a Mentor",
      subtitle: "Share My Expertise",
      description: "Guide students and shape the future of entrepreneurship",
      icon: <Users className="text-white" size={32} />,
      color: "from-[#fd79a8] to-[#e84393]"
    },
    {
      title: "I'm a Student",
      subtitle: "Join the Next Cohort",
      description: "Transform your ideas into reality in just 72 hours",
      icon: <Star className="text-white" size={32} />,
      color: "from-[#fdcb6e] to-[#e17055]"
    }
  ];

  return (
    <section id="join" className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e86888]/10 to-[#7d7eed]/10"></div>
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join the Movement
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Be part of India's largest student entrepreneurship movement. 
            Choose your path and help us build the future, together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {actions.map((action, index) => (
            <motion.div
              key={action.title}
              className="group relative overflow-hidden bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-[#e86888]/50 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-6`}>
                {action.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
              <h4 className="text-lg text-[#e86888] font-semibold mb-4">{action.subtitle}</h4>
              <p className="text-white/70 mb-6 leading-relaxed">{action.description}</p>
              
              <button className="w-full bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-2">
                Get Started <ArrowRight size={16} />
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Make Impact?</h3>
            <p className="text-white/70 mb-6">
              Join thousands of students, mentors, and industry leaders who are 
              building the future of India, one startup at a time.
            </p>
            <button className="bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white px-12 py-4 rounded-full font-semibold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Join JAZBAA Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};



// Footer
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#543ef7]/5 to-[#9cecd5]/5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-[#e86888] to-[#7d7eed] bg-clip-text text-transparent mb-4">
              JAZBAA 4.0
            </h3>
            <p className="text-white/70 mb-6 leading-relaxed">
              Empowering the next generation of Indian entrepreneurs through 
              intensive learning, collaborative innovation, and relentless execution.
            </p>
            <div className="space-y-2 text-white/60">
              <p className="flex items-center gap-2">
                <MapPin size={16} />
                New Delhi, India
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                hello@jazbaa.com
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="#about" className="hover:text-[#e86888] transition-colors duration-200">About JAZBAA</a></li>
              <li><a href="#startups" className="hover:text-[#e86888] transition-colors duration-200">Startups</a></li>
              <li><a href="#creators" className="hover:text-[#e86888] transition-colors duration-200">Creators</a></li>
              <li><a href="#journey" className="hover:text-[#e86888] transition-colors duration-200">Journey</a></li>
              <li><a href="#mentors" className="hover:text-[#e86888] transition-colors duration-200">Mentors</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-white/60 mb-4 text-sm">
              Get inspiring stories from JAZBAA, weekly
            </p>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email"
                className="w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-[#e86888]/50"
              />
              <button className="w-full bg-gradient-to-r from-[#e86888] to-[#7d7eed] text-white py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © 2024 JAZBAA 4.0. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/60 hover:text-[#e86888] transition-colors duration-200">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-[#e86888] transition-colors duration-200">
              <Github size={20} />
            </a>
            <a href="#" className="text-white/60 hover:text-[#e86888] transition-colors duration-200">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
function App() {
  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <StartupsSection />
      <CreatorsSection />
      <JourneySection />
      <MentorsSection />
      <VisionSection />
      <GallerySection />
      <JoinSection />
      <Footer />
    </div>
  );
}

export default App;