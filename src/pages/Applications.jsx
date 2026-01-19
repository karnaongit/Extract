import { motion } from 'framer-motion';
import { Utensils, Coffee, Cookie, Beef, Package, Pizza } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';

const Applications = () => {
  const applications = [
    {
      icon: <Utensils size={40} />,
      title: 'Seasonings & Spice Blends',
      description: 'Our oleoresins and extracts provide consistent flavor and color intensity for dry seasoning mixes, rubs, and spice blends used across food manufacturing.',
      image: 'https://plus.unsplash.com/premium_photo-1669130744503-4939a5bcef43?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      gradient: 'from-red-600 to-orange-500',
      examples: ['Taco seasonings', 'BBQ rubs', 'Curry powders', 'Spice mixes']
    },
    {
      icon: <Coffee size={40} />,
      title: 'Sauces & Gravies',
      description: 'Natural color stability and flavor enhancement for liquid applications including hot sauces, marinades, gravies, and condiment bases.',
      image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?q=80&w=1200',
      gradient: 'from-amber-600 to-red-500',
      examples: ['Hot sauces', 'BBQ sauces', 'Gravies', 'Marinades']
    },
    {
      icon: <Cookie size={40} />,
      title: 'Snacks & Savory Coatings',
      description: 'Heat-stable oleoresins and colors designed for high-temperature processing in extruded snacks, chips, and savory coatings.',
      image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?q=80&w=1200',
      gradient: 'from-yellow-600 to-orange-500',
      examples: ['Chips & crisps', 'Extruded snacks', 'Popcorn seasonings', 'Coated nuts']
    },
    {
      icon: <Beef size={40} />,
      title: 'Meat & Protein Processing',
      description: 'Clean-label natural colors and flavor enhancers for processed meats, plant-based proteins, and seafood applications.',
      image: 'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?q=80&w=1200',
      gradient: 'from-rose-600 to-red-500',
      examples: ['Sausages', 'Plant-based meats', 'Deli meats', 'Seafood products']
    },
    {
      icon: <Package size={40} />,
      title: 'Ready-to-Eat & Prepared Foods',
      description: 'Natural ingredient solutions for convenience foods, frozen meals, and shelf-stable prepared food products.',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1200',
      gradient: 'from-green-600 to-emerald-500',
      examples: ['Frozen dinners', 'Soup mixes', 'Instant meals', 'Meal kits']
    },
    {
      icon: <Pizza size={40} />,
      title: 'Condiments',
      description: 'Stable color and flavor profiles for ketchup, mustard, mayonnaise, dressings, and other condiment applications.',
      image: 'https://images.unsplash.com/photo-1528712306091-ed0763094c98?q=80&w=1200',
      gradient: 'from-yellow-500 to-amber-600',
      examples: ['Ketchup', 'Mustard', 'Salad dressings', 'Dipping sauces']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1556910110-a5a63dfd393c?q=80&w=2400" 
            alt="Food manufacturing"
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
                Industrial Food Manufacturing
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Applications
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Our ingredients are used across industrial food manufacturing environments, 
              delivering consistent quality and performance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-green-300 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={app.image} 
                      alt={app.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${app.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-500`} />
                    
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute bottom-4 left-4 w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-slate-900 shadow-xl`}
                    >
                      {app.icon}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-green-800 transition-colors duration-300">
                      {app.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                      {app.description}
                    </p>

                    {/* Examples */}
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-green-800 mb-2">Example Applications:</p>
                      <div className="flex flex-wrap gap-2">
                        {app.examples.map((example, idx) => (
                          <span 
                            key={idx} 
                            className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full border border-green-200"
                          >
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Decorative Line */}
                    <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${app.gradient} transition-all duration-500 rounded-full`} />
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="p-8 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-slate-900 text-center">
                Important Responsibility Notice
              </h3>
              <p className="text-slate-700 text-center leading-relaxed">
                Customers are responsible for validating ingredient suitability for their formulations and processes. 
                All applications require proper testing and compliance verification before commercial use. 
                Sunrise Extracts provides technical documentation to support your evaluation process.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Applications;