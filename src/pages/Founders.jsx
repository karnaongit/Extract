import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Sprout } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const Founders = () => {
  const founders = [
    {
      name: 'Varun Reddy',
      role: 'Co-Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800',
      experience: 'Over 20 years of professional experience',
      education: [
        "Master's degree from the United States",
        'Graduate program credential from Harvard University in Computer Science',
        "Bachelor's degree in Pharmacy"
      ],
      background: 'Raised in an agricultural family with a strong focus on quality at origin and disciplined operations.',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      name: 'Priya Reddy',
      role: 'Founder',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
      experience: 'Over 15 years of professional experience in the United States',
      education: [
        "Master's degree with strong academic foundation in agriculture"
      ],
      background: 'Raised in a multi-generation agricultural family with deep exposure to farming practices and agricultural supply chains.',
      gradient: 'from-amber-600 to-yellow-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2400" 
            alt="Agricultural fields"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-yellow-900/90" />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 text-yellow-200 rounded-full text-sm font-semibold">
                Leadership Team
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Our Founders
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Combining agricultural heritage with professional expertise to serve 
              industrial food manufacturers with integrity and excellence.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Founders Section */}
      <section className="px-6 py-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto space-y-32">
          {founders.map((founder, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                {/* Image Side */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`${index % 2 === 1 ? 'md:order-2' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-full h-[600px] object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${founder.gradient} opacity-20`} />
                    
                    {/* Name Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900/90 to-transparent">
                      <h2 className="text-4xl font-bold text-white mb-2">{founder.name}</h2>
                      <p className="text-xl text-yellow-300 font-semibold">{founder.role}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  {/* Experience */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${founder.gradient} rounded-xl flex items-center justify-center`}>
                        <Briefcase className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Experience</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed pl-15">
                      {founder.experience}
                    </p>
                  </div>

                  {/* Education */}
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${founder.gradient} rounded-xl flex items-center justify-center`}>
                        <GraduationCap className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                    </div>
                    <ul className="space-y-3 pl-15">
                      {founder.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${founder.gradient} mt-2 flex-shrink-0`} />
                          <span className="text-slate-700">{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Background */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${founder.gradient} rounded-xl flex items-center justify-center`}>
                        <Sprout className="text-white" size={24} />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900">Agricultural Heritage</h3>
                    </div>
                    <p className="text-lg text-slate-700 leading-relaxed pl-15">
                      {founder.background}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-32 relative overflow-hidden">
  {/* Background Pattern with Gradient */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-white to-yellow-50/30"></div>
    {/* Subtle geometric pattern */}
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `linear-gradient(30deg, #059669 12%, transparent 12.5%, transparent 87%, #059669 87.5%, #059669),
                         linear-gradient(150deg, #059669 12%, transparent 12.5%, transparent 87%, #059669 87.5%, #059669),
                         linear-gradient(30deg, #059669 12%, transparent 12.5%, transparent 87%, #059669 87.5%, #059669),
                         linear-gradient(150deg, #059669 12%, transparent 12.5%, transparent 87%, #059669 87.5%, #059669),
                         linear-gradient(60deg, #05966977 25%, transparent 25.5%, transparent 75%, #05966977 75%, #05966977),
                         linear-gradient(60deg, #05966977 25%, transparent 25.5%, transparent 75%, #05966977 75%, #05966977)`,
        backgroundSize: '100px 175px',
        backgroundPosition: '0 0, 0 0, 50px 87.5px, 50px 87.5px, 0 0, 50px 87.5px'
      }}
    ></div>
    {/* Floating circles */}
    <div className="absolute top-1/4 -left-20 w-96 h-96 bg-gradient-to-br from-green-100/30 to-yellow-100/20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-br from-yellow-100/20 to-green-100/30 rounded-full blur-3xl"></div>
  </div>

  <div className="max-w-6xl mx-auto relative z-10">
    <AnimatedSection>
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Image Section */}
        <div className="lg:w-2/5 relative">
          <div className="relative overflow-hidden rounded-2xl shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1400" 
              alt="Agricultural landscape"
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-green-800/20 to-transparent"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </div>
          
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 border border-white/80 hover:shadow-2xl transition-shadow duration-300">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-700 to-amber-600 bg-clip-text text-transparent">
              99.8%
            </div>
            <div className="text-sm text-slate-600 mt-1">Quality Assurance</div>
            <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-amber-500 rounded-full mt-2"></div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-3/5">
          <div className="max-w-2xl">
            {/* Section Label */}
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-green-500 to-amber-500"></div>
              <span className="text-sm font-semibold text-green-700 uppercase tracking-wider bg-green-50 px-3 py-1 rounded-full">
                Our Commitment
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              Where <span className="text-green-700">Nature</span> Meets <span className="text-amber-600">Innovation</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-slate-700 text-lg leading-relaxed">
              <p className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100">
                Combining <span className="font-semibold text-green-700">agricultural heritage</span> with 
                <span className="font-semibold text-amber-600"> professional expertise</span>, we serve 
                industrial food manufacturers with disciplined operations, quality focus, and responsive 
                U.S.-based coordination.
              </p>
              <p className="p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-100">
                Our roots in agriculture inform our deep respect for quality at origin and throughout 
                the entire supply chain. We maintain traceability and integrity as our core principles, 
                ensuring every ingredient meets our rigorous standards.
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              {[
                { title: "Sustainable Sourcing", color: "green", icon: "🌱" },
                { title: "Quality Control", color: "amber", icon: "⚡" },
                { title: "Global Distribution", color: "green", icon: "🌎" },
                { title: "Technical Support", color: "amber", icon: "💎" }
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur-sm rounded-lg border border-slate-200 hover:border-green-300 transition-colors duration-300"
                >
                  <div className={`text-xl ${feature.color === 'green' ? 'text-green-600' : 'text-amber-600'}`}>
                    {feature.icon}
                  </div>
                  <span className={`font-semibold ${feature.color === 'green' ? 'text-green-800' : 'text-amber-800'}`}>
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <button className="px-8 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-green-600/30 transition-all duration-300 flex items-center gap-2 group">
                <span>Explore Our Process</span>
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  </div>
</section>
    </div>
  );
};

export default Founders;