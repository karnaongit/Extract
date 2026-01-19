import { motion } from 'framer-motion';
import { Droplet, Palette, Flower2, Leaf } from 'lucide-react';
import AnimatedSection from '../shared/AnimatedSection';
import SectionTitle from '../shared/SectionTitle';

const WhatWeSupply = () => {
  const products = [
    {
      icon: <Droplet size={32} />,
      title: 'Spice Oleoresins',
      description: 'Paprika Oleoresin and Capsicum Oleoresin supplied with Specification, Batch COA, and SDS upon request.',
      gradient: 'from-red-600 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      image: 'https://media.istockphoto.com/id/491468680/photo/spices-on-wooden-table-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=zcXUqWG0BOvOlW5liEIn33NjbnVdJX78RqCtE1dMjvg='
    },
    {
      icon: <Palette size={32} />,
      title: 'Natural Food Colors',
      description: 'Plant-derived color solutions for clean-label formulations. Performance depends on formulation and processing conditions.',
      gradient: 'from-yellow-600 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      image: 'https://images.unsplash.com/photo-1598563597339-df4d424e8959?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      icon: <Flower2 size={32} />,
      title: 'Essential Oils',
      description: 'Food-grade essential oils used for aroma and flavor enhancement in industrial applications.',
      gradient: 'from-green-600 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=800'
    },
    {
      icon: <Leaf size={32} />,
      title: 'Botanical Extracts',
      description: 'Additional botanical and spice extracts may be considered based on application fit and agreed supply programs.',
      gradient: 'from-teal-600 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=800'
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-transparent to-green-100" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <SectionTitle
          title="What We Supply"
          subtitle="Premium ingredients for industrial food manufacturing"
          className="mb-20"
        />

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 hover:border-green-300 transition-all duration-500 shadow-sm hover:shadow-xl bg-white"
              >
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.bgGradient} opacity-30 group-hover:opacity-20 transition-opacity duration-500`} />
                  
                  {/* Icon Overlay */}
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
                  >
                    {product.icon}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900 group-hover:text-green-800 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    {product.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`mt-6 h-1 w-0 group-hover:w-20 bg-gradient-to-r ${product.gradient} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Important Notice */}
        <AnimatedSection delay={0.5}>
          <div className="mt-16 p-6 bg-gradient-to-br from-green-50 to-yellow-50 border-2 border-green-200 rounded-2xl">
            <p className="text-center text-slate-700 text-sm md:text-base">
              <span className="text-green-800 font-semibold">Important Notice:</span> Product details 
              and samples are shared following customer verification and confirmation of food use.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default WhatWeSupply;