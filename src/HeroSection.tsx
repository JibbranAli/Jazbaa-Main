import React from 'react';

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

export default HeroSection; 