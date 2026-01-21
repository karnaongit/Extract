import { motion } from 'framer-motion';
import { Users, Award, MapPin, Target } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';

const About = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Disciplined Operations',
      description: 'We maintain rigorous processes and documentation standards to ensure consistency and reliability in every interaction.',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      icon: <Users size={32} />,
      title: 'Professional Coordination',
      description: 'Direct, responsive U.S.-based service that understands the demands of industrial food manufacturing.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <Award size={32} />,
      title: 'Quality Focus',
      description: 'Raised in agricultural families with deep respect for quality at origin and throughout the supply chain.',
      gradient: 'from-amber-600 to-yellow-500'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Strategic Location',
      description: 'Operating from a small business-qualified location in 109 Hay Street Suite 202, Fayetteville, NC 28301 US serving manufacturers nationwide.',
      gradient: 'from-purple-600 to-pink-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2400" 
            alt="Agricultural landscape"
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
                Woman-Owned Business

              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              About Sunrise Extracts
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              A U.S.-based, woman-owned food ingredients supply company focused on delivering 
              quality and reliability to industrial food manufacturers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000" 
                  alt="Agriculture and farming"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-slate-900">
                  Agricultural Heritage, Professional Service
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Sunrise Extracts is a U.S.-based, woman-owned food ingredients supply company 
                    focused on delivering food-grade oleoresins, natural food colors, essential oils, 
                    and botanical extracts to industrial food manufacturers.
                  </p>
                  <p>
                    Our approach emphasizes disciplined documentation, supply reliability, and 
                    professional coordination. Founded by individuals raised in agricultural families, 
                    we bring a deep understanding of quality at origin and the importance of consistent, 
                    reliable supply chain management.
                  </p>
                  <p>
                    Operating from 109 Hay Street, Suite 202, Fayetteville, NC 28301, US, we provide responsive U.S.-based coordination 
                    and service to manufacturers nationwide, supporting their procurement and quality 
                    review processes with comprehensive documentation and professional communication.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Our Approach"
            subtitle="Core principles that guide our service to industrial food manufacturers"
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group text-center p-8 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl border-2 border-slate-200 hover:border-green-300 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {value.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-green-800 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="px-6 py-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl bg-white border-2 border-green-200 shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-12">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
                    <Award className="text-green-700" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">
                    Woman-Owned Business
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Sunrise Extracts is a certified woman-owned business, bringing diverse 
                    perspectives and commitment to excellence in food ingredient supply.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Woman-Owned
                    </span>
                  </div>
                </div>
                <div className="p-12 bg-gradient-to-br from-green-100 to-yellow-100">
                  <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="text-yellow-700" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-slate-900">
                    HUBZone-eligible
                  </h2>
                  <p className="text-slate-700 leading-relaxed mb-6">
                    Operating from a HUBZone-eligible Operating location in Raleigh, North Carolina, 
                    supporting economic development and providing quality service.
                  </p>
                  <div className="flex gap-4">
                    <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-semibold">
                      HUBZone
                    </span>
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

export default About;