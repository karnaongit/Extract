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
      <section className="px-6 py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1400" 
                alt="Agricultural landscape"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/95 via-green-900/70 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <h2 className="text-4xl font-bold mb-4">Our Commitment</h2>
                <p className="text-xl text-green-100 leading-relaxed">
                  Combining agricultural heritage with professional expertise, we are committed to 
                  serving industrial food manufacturers with disciplined operations, quality focus, 
                  and responsive U.S.-based coordination. Our roots in agriculture inform our deep 
                  respect for quality at origin and throughout the entire supply chain.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Founders;