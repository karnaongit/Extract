import { motion } from 'framer-motion';
import { ClipboardCheck, FileText, Package, ArrowRight } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import SectionTitle from '../shared/SectionTitle';
import { Link } from "react-router-dom";

const MotionLink = motion(Link);
const HowWeWork = () => {
  const steps = [
    {
      number: '01',
      icon: <ClipboardCheck size={32} />,
      title: 'Application Review',
      description: 'We begin by understanding your specific food manufacturing application, formulation requirements, and intended use to ensure product fit.',
      color: 'from-green-600 to-green-500'
    },
    {
      number: '02',
      icon: <FileText size={32} />,
      title: 'Documentation & Evaluation',
      description: 'Complete documentation including Specifications, COA, SDS, and other required materials are provided for your technical review and approval.',
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      number: '03',
      icon: <Package size={32} />,
      title: 'Supply Coordination',
      description: 'Once approved, we coordinate reliable supply with responsive U.S.-based service to support your production schedule.',
      color: 'from-emerald-600 to-teal-500'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          title="How We Work"
          subtitle="A streamlined, documentation-driven process for industrial food manufacturers"
          className="mb-20"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative group"
              >
                {/* Card */}
                <div className="relative p-8 bg-white rounded-2xl border-2 border-slate-200 hover:border-green-300 transition-all duration-500 h-full shadow-sm hover:shadow-xl">
                  {/* Step Number */}
                  <div className={`absolute -top-4 -right-4 text-8xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                    {step.number}
                  </div>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`relative z-10 w-20 h-20 mb-6 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl group-hover:shadow-green-600/30 transition-all duration-500`}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-slate-900 group-hover:text-green-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                    <motion.div
                      animate={{ x: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="text-green-600" size={32} />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection delay={0.8}>
          <div className="mt-20 text-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block p-8 bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl border-2 border-green-200 shadow-lg"
            >
              <p className="text-xl text-slate-700 mb-6 font-medium">
                Ready to discuss your ingredient requirements?
              </p>
             <MotionLink
  to="/contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-green-700/30 transition-all duration-300 inline-flex items-center gap-2"
>
  Get Started
  <ArrowRight size={20} />
</MotionLink>
            </motion.div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default HowWeWork;