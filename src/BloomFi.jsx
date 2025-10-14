import React, { useState, useEffect } from 'react';

const BloomFi = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentMaterial, setCurrentMaterial] = useState(0);

  const features = [
    { 
      title: 'Real-Time Pricing', 
      description: 'AI-powered market rates updated every second',
      stat: '₹45/kg',
      label: 'Current Steel Rate'
    },
    { 
      title: 'Instant Pickup', 
      description: 'Same-day collection across 50+ cities',
      stat: '2 Hours',
      label: 'Average Response'
    },
    { 
      title: 'Smart Analytics', 
      description: 'Track your revenue and environmental impact',
      stat: '98%',
      label: 'Customer Satisfaction'
    },
    { 
      title: 'Secure Payments', 
      description: 'Instant digital transfers to your account',
      stat: '24/7',
      label: 'Payment Processing'
    }
  ];

  const testimonials = [
    {
      text: "ScrapFlow transformed how we handle industrial waste. The pricing is transparent and pickups are incredibly reliable.",
      author: "Rajesh Kumar",
      company: "Manufacturing Ltd."
    },
    {
      text: "Best decision we made for our sustainability goals. The platform is intuitive and the team is highly professional.",
      author: "Priya Sharma",
      company: "Tech Industries"
    },
    {
      text: "Real-time tracking and instant payments make this the future of scrap management. Highly recommended!",
      author: "Amit Patel",
      company: "Steel Works"
    }
  ];

  const materials = [
    { name: 'Ferrous Metals', price: '₹42-48/kg' },
    { name: 'Copper', price: '₹520-550/kg' },
    { name: 'Aluminum', price: '₹160-180/kg' },
    { name: 'E-Waste', price: '₹35-65/kg' },
    { name: 'Plastic', price: '₹18-25/kg' },
    { name: 'Paper', price: '₹8-12/kg' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMaterial((prev) => (prev + 1) % materials.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
      <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Navigation Bar */}
       <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl border-b" style={{ backgroundColor: 'rgba(255,255,255,0.85)', borderColor: '#F1F1F1' }}>
        <div className="max-w-[90rem] mx-auto flex items-center justify-between px-12 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-9 h-9 bg-black rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-black" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>ScrapFlow</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>Solutions</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>Materials</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>Pricing</a>
            <a href="#" className="text-sm text-gray-600 hover:text-black transition-colors" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>Enterprise</a>
          </div>

          {/* CTA Button */}
          <button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-all" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section - Full Screen */}
       <section className="min-h-screen flex items-center justify-center px-8 pt-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Animated Badge */}
          <div className={`inline-flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
             <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#C5B0CD' }}></span>
            <span className="text-sm text-gray-700" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>Live tracking • Real-time pricing</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-7xl md:text-[8rem] font-semibold text-black mb-8 leading-[0.95] tracking-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', letterSpacing: '-0.04em' }}>
            Transform<br />Your Waste
          </h1>

          {/* Description */}
          <p className={`text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
            India's most intelligent scrap management platform.<br />Real-time pricing, instant pickup, seamless recycling.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              Schedule Pickup
            </button>
            <button className="bg-gray-50 text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-all" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              View Rates
            </button>
          </div>

          {/* Dynamic Feature Display */}
           <div className="rounded-3xl p-12 max-w-2xl mx-auto" style={{ backgroundColor: '#F8F6FA' }}>
            <div className="text-center transition-all duration-700">
              <div className="text-6xl font-semibold text-black mb-2" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                {features[currentFeature].stat}
              </div>
               <div className="text-xs font-medium uppercase tracking-wider mb-6" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif', color: '#C5B0CD' }}>
                {features[currentFeature].label}
              </div>
              <div className="text-2xl font-semibold text-black mb-2" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                {features[currentFeature].title}
              </div>
              <div className="text-base text-gray-600" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
                {features[currentFeature].description}
              </div>
            </div>
            
            {/* Progress Dots */}
            <div className="flex justify-center gap-2 mt-10">
              {features.map((_, index) => (
                <div 
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentFeature === index ? 'w-8' : 'w-1.5'
                  }`}
                  style={{ backgroundColor: currentFeature === index ? '#C5B0CD' : '#e5e7eb' }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Materials Section - Full Screen */}
       <section className="min-h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#F8F6FA' }}>
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', letterSpacing: '-0.03em' }}>
              Materials We Handle
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              Competitive rates updated in real-time
            </p>
          </div>

          {/* Dynamic Material Showcase */}
           <div className="rounded-3xl p-16 shadow-sm border mb-12" style={{ backgroundColor: '#FFFFFF', borderColor: '#EFE8F3' }}>
            <div className="text-center">
               <div className={`w-24 h-24 mx-auto mb-8 rounded-2xl flex items-center justify-center transition-all duration-700 transform ${currentMaterial % 2 === 0 ? 'rotate-3' : '-rotate-3'}`} style={{ backgroundColor: '#C5B0CD' }}>
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-5xl font-semibold text-black mb-3" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                {materials[currentMaterial].name}
              </h3>
               <div className="text-3xl font-semibold mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', color: '#C5B0CD' }}>
                {materials[currentMaterial].price}
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-gray-700" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>Live Rate</span>
              </div>
            </div>
          </div>

          {/* Material Grid */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {materials.map((material, index) => (
              <div 
                key={index}
                 className={`rounded-2xl p-6 border transition-all duration-500 hover:scale-105 cursor-pointer ${
                  currentMaterial === index 
                    ? 'shadow-lg' 
                    : 'shadow-sm hover:shadow-md'
                }`}
                 style={{ backgroundColor: '#FFFFFF', borderColor: currentMaterial === index ? '#C5B0CD' : '#EFE8F3' }}
              >
                <div className="text-base font-semibold text-black mb-1" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                  {material.name}
                </div>
                 <div className="text-lg font-semibold" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', color: '#C5B0CD' }}>
                  {material.price}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Full Screen */}
       <section className="min-h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-semibold text-black mb-4 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', letterSpacing: '-0.03em' }}>
              Why Choose ScrapFlow
            </h2>
            <p className="text-xl text-gray-600" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              Technology that transforms waste into wealth
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Feature 1 */}
             <div className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#F8F6FA' }}>
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                Instant Pricing
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
                Get real-time market rates powered by AI. Transparent pricing ensures maximum value for your materials.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80" 
                  alt="Real-time pricing dashboard"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature 2 */}
             <div className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#F8F6FA' }}>
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                Smart Logistics
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
                Track pickups in real-time with optimized routing. Fast, reliable collection across all major cities.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" 
                  alt="Logistics tracking"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Feature 3 */}
             <div className="group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: '#F8F6FA' }}>
              <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-black mb-3 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
                Certified Processing
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
                ISO-certified facilities with complete compliance. Digital certificates for every transaction.
              </p>
              <div className="rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1565008576549-57569a49371d?w=600&q=80" 
                  alt="Certified facility"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Full Screen */}
       <section className="min-h-screen flex items-center justify-center px-8" style={{ backgroundColor: '#F8F6FA' }}>
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-6xl md:text-7xl font-semibold text-black mb-20 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', letterSpacing: '-0.03em' }}>
            Trusted Worldwide
          </h2>

          {/* Dynamic Testimonial */}
           <div className="rounded-3xl p-16 shadow-sm border mb-10" style={{ backgroundColor: '#FFFFFF', borderColor: '#EFE8F3' }}>
            <svg className="w-12 h-12 mx-auto mb-8" style={{ color: '#C5B0CD' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl text-black leading-relaxed mb-8" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              {testimonials[currentTestimonial].text}
            </p>
            <div className="text-lg font-semibold text-black" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>
              {testimonials[currentTestimonial].author}
            </div>
            <div className="text-base text-gray-600" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              {testimonials[currentTestimonial].company}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'w-8' : 'w-1.5'
                }`}
                style={{ backgroundColor: currentTestimonial === index ? '#C5B0CD' : '#e5e7eb' }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Screen */}
       <section className="min-h-screen flex items-center justify-center px-8 text-white" style={{ backgroundColor: '#000000' }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-semibold mb-8 tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif', letterSpacing: '-0.04em' }}>
            Ready to Transform<br />Your Waste Stream?
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
            Join 1,000+ businesses already using ScrapFlow to maximize their recycling revenue.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-black px-10 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-all" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              Start Free Trial
            </button>
            <button className="bg-transparent text-white px-10 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-all border border-white/20" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-8 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-gray-500 mb-8 text-xs tracking-wider uppercase" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              Trusted by industry leaders
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              <div className="text-gray-400 font-medium text-base hover:text-black transition-colors cursor-pointer" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>ArcelorMittal</div>
              <div className="text-gray-400 font-medium text-base hover:text-black transition-colors cursor-pointer" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>Tata Steel</div>
              <div className="text-gray-400 font-medium text-base hover:text-black transition-colors cursor-pointer" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>JSW Group</div>
              <div className="text-gray-400 font-medium text-base hover:text-black transition-colors cursor-pointer" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>Hindalco</div>
              <div className="text-gray-400 font-medium text-base hover:text-black transition-colors cursor-pointer" style={{ fontFamily: 'SF Pro Display, -apple-system, sans-serif' }}>Vedanta</div>
            </div>
          </div>
          
          <div className="text-center pt-10 border-t border-gray-100">
            <p className="text-gray-600 text-sm" style={{ fontFamily: 'SF Pro Text, -apple-system, sans-serif' }}>
              © 2025 ScrapFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BloomFi;