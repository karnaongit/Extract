import { motion } from 'framer-motion';
import { FileCheck, FileText, AlertCircle, MapPin, Shield, CheckCircle } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';

const Quality = () => {
  const documents = [
    {
      icon: <FileText size={32} />,
      title: 'Product Specification',
      description: 'Detailed technical specifications including physical and chemical parameters, quality standards, and product characteristics.',
      gradient: 'from-blue-600 to-cyan-500'
    },
    {
      icon: <FileCheck size={32} />,
      title: 'Batch Certificate of Analysis (COA)',
      description: 'Batch-specific analytical results confirming product meets established specifications and quality requirements.',
      gradient: 'from-green-600 to-emerald-500'
    },
    {
      icon: <AlertCircle size={32} />,
      title: 'Safety Data Sheet (SDS)',
      description: 'Comprehensive safety information including handling, storage, and emergency response procedures.',
      gradient: 'from-orange-600 to-amber-500'
    },
    {
      icon: <Shield size={32} />,
      title: 'Allergen Statement',
      description: 'Clear disclosure of potential allergens and cross-contamination risks for regulatory compliance.',
      gradient: 'from-purple-600 to-pink-500'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Country of Origin',
      description: 'Documentation of raw material sourcing and country of origin for traceability requirements.',
      gradient: 'from-red-600 to-rose-500'
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Traceability Information',
      description: 'Complete supply chain traceability from source to delivery for quality assurance and compliance.',
      gradient: 'from-teal-600 to-green-500'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2400" 
            alt="Quality documentation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-green-900/85 to-slate-900/90" />
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
              <span className="px-4 py-2 bg-green-400/20 backdrop-blur-sm border border-green-400/30 text-green-200 rounded-full text-sm font-semibold">
                Documentation-First Approach
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Quality & Documentation
            </h1>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
              Sunrise Extracts supports procurement and quality review with comprehensive 
              documentation for every product and batch.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Documentation Grid */}
      <section className="px-6 py-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <SectionTitle
            title="Available Documentation"
            subtitle="Comprehensive technical and regulatory documentation to support your quality review"
            className="mb-20"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-green-300 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className={`w-20 h-20 mb-6 bg-gradient-to-br ${doc.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {doc.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-green-800 transition-colors duration-300">
                    {doc.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {doc.description}
                  </p>

                  {/* Decorative Line */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${doc.gradient} transition-all duration-500 rounded-full`} />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-6 py-32 bg-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579154392429-0e6b4e850ad2?q=80&w=1400" 
                alt="Quality testing"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 via-green-900/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <h2 className="text-4xl font-bold mb-4">Documentation Availability</h2>
                <p className="text-lg text-green-100 leading-relaxed">
                  Documentation availability varies by product, batch, and application. All materials are 
                  provided following customer verification and confirmation of intended food manufacturing use. 
                  Contact our team to request specific documentation for your requirements.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Notice Section */}
      <section className="px-6 pb-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-5xl mx-auto space-y-6">
          <AnimatedSection>
            <div className="p-8 bg-white border-2 border-green-200 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FileCheck className="text-green-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    Customer Responsibility
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    While we provide comprehensive documentation, customers remain responsible for validating 
                    ingredient suitability for their specific formulations, processes, and compliance requirements. 
                    All documentation is provided for informational and quality review purposes.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="text-yellow-700" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">
                    Compliance Standards
                  </h3>
                  <p className="text-slate-700 leading-relaxed">
                    All products are supplied for industrial food manufacturing applications in accordance with 
                    applicable U.S. regulations and quality standards. Documentation supports your compliance 
                    and quality assurance processes.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Quality;