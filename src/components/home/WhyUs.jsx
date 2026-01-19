import { motion } from 'framer-motion';
import { FileCheck, Target, Truck, Phone, Shield } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import SectionTitle from '../shared/SectionTitle';

const WhyUs = () => {
  const features = [
    {
      icon: <Target size={28} />,
      title: 'Application-Focused Portfolio',
      description: 'Our ingredients are selected and supplied based on your specific manufacturing applications and requirements.'
    },
    {
      icon: <FileCheck size={28} />,
      title: 'Documentation Support',
      description: 'Complete access to Specifications, COA, SDS, Allergen Statements, and traceability information upon request.'
    },
    {
      icon: <Truck size={28} />,
      title: 'Supply Planning',
      description: 'Reliable coordination and planning to ensure consistent availability for your production schedules.'
    },
    {
      icon: <Phone size={28} />,
      title: 'U.S.-Based Coordination',
      description: 'Responsive, professional service from our Raleigh, North Carolina location with direct communication.'
    },
    {
      icon: <Shield size={28} />,
      title: 'Compliance-Driven Approach',
      description: 'All products supplied with a focus on regulatory compliance and quality standards for industrial food use.'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=2400" 
          alt="Natural ingredients background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/95 via-green-800/90 to-green-900/95" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <AnimatedSection>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
              Why Sunrise Extracts
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-lg md:text-xl text-green-100 max-w-3xl mx-auto">
              Disciplined documentation, supply reliability, and professional coordination
            </p>
          </AnimatedSection>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 hover:border-yellow-400/50 transition-all duration-500 group shadow-lg hover:shadow-2xl hover:bg-white/15"
              >
                <div className="relative">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 mb-6 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center text-green-900 shadow-lg group-hover:shadow-yellow-400/50 group-hover:shadow-2xl transition-all duration-500"
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-green-100 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;