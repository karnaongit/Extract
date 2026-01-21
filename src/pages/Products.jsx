import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Palette, Flower2, Leaf, Sparkles, FileText } from 'lucide-react';
import { Link } from "react-router-dom";


const MotionLink = motion(Link);

// Fixed AnimatedSection Component
const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: false, // Changed from true to false
    margin: "-50px 0px" // Reduced margin
  });

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    fade: { y: 0, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directions[direction]
      }}
      animate={isInView ? {
        opacity: 1,
        y: 0,
        x: 0
      } : {}}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: false, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl border-2 border-slate-200 hover:border-green-300 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/800x450/FFFFFF/3B82F6?text=${encodeURIComponent(product.name)}`;
          }}
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${product.bgGradient} opacity-40 group-hover:opacity-30 transition-opacity duration-500`} />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${product.gradient} text-white shadow-lg backdrop-blur-sm`}>
            {product.category}
          </span>
        </div>

        {/* Icon Overlay */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className={`absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-xl flex items-center justify-center text-white shadow-lg`}
        >
          {product.icon}
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-green-800 transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
          {product.description}
        </p>

        {/* Features List */}
        <div className="mb-6 space-y-2">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${product.gradient} mt-2 flex-shrink-0`} />
              <p className="text-sm text-slate-600">{feature}</p>
            </div>
          ))}
        </div>

        {/* Documentation */}
        <div className="mb-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
          <p className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-2">
            <FileText size={14} />
            Documentation Available:
          </p>
          <div className="flex flex-wrap gap-2">
            {product.documentation.map((doc, idx) => (
              <span key={idx} className="text-xs px-2 py-1 bg-white rounded border border-slate-200 text-slate-600">
                {doc}
              </span>
            ))}
          </div>
        </div>

        {/* Decorative Element */}
        <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${product.gradient} transition-all duration-500 rounded-full`} />
      </div>
    </motion.div>
  );
};

// Product Grid Component
const ProductGrid = ({ products }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Oleoresins', 'Food Colors', 'Essential Oils', 'Extracts'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div>
      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
              activeFilter === category
                ? 'bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg'
                : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700'
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* No Results */}
      {filteredProducts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <p className="text-slate-500 text-lg">No products found in this category.</p>
        </motion.div>
      )}
    </div>
  );
};

// Main Products Component
const Products = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    console.log('Products page mounted');
    setIsMounted(true);
    
    // Optional: Preload images
    const preloadImages = () => {
      const images = [
        'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=800',
        'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800',
        'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800',
        'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800',
        'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=800'
      ];
      
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    
    return () => setIsMounted(false);
  }, []);

  const productsData = [
    {
      id: 5,
      name: 'Beetroot Extract',
      category: 'Food Colors',
      description: 'Natural red-purple color derived from beetroot for beverage and food coloring applications.',
      icon: <Palette size={32} />,
      gradient: 'from-pink-600 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=800',
      features: [
        'Natural pink to red shades',
        'Water-soluble format',
        'Low pH stability',
        'Vegan and allergen-friendly'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
    },
    {
      id: 6,
      name: 'Spirulina Extract',
      category: 'Food Colors',
      description: 'Natural blue-green color from spirulina algae for innovative food and beverage applications.',
      icon: <Sparkles size={32} />,
      gradient: 'from-teal-600 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?q=80&w=800',
      features: [
        'Natural blue coloring',
        'High protein content',
        'Light-sensitive formulation',
        'Plant-based solution'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },
    {
      id: 8,
      name: 'Peppermint Essential Oil',
      category: 'Essential Oils',
      description: 'Premium peppermint oil for cooling sensation and minty flavor in confectionery and beverages.',
      icon: <Flower2 size={32} />,
      gradient: 'from-green-600 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800',
      features: [
        'High menthol content',
        'Cooling effect profile',
        'Steam distilled quality',
        'Standardized potency'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },
    {
      id: 9,
      name: 'Orange Essential Oil',
      category: 'Essential Oils',
      description: 'Natural orange oil for sweet citrus notes in food manufacturing and flavoring applications.',
      icon: <Flower2 size={32} />,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      image: 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=800',
      features: [
        'Sweet citrus aroma',
        'Cold-pressed quality',
        'Natural flavor enhancement',
        'Versatile application'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
    },
    {
      id: 11,
      name: 'Garlic Extract',
      category: 'Extracts',
      description: 'Deodorized garlic extract for savory applications without strong odor in processed foods.',
      icon: <Leaf size={32} />,
      gradient: 'from-slate-600 to-gray-500',
      bgGradient: 'from-slate-50 to-gray-50',
      image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=800',
      features: [
        'Deodorized formulation',
        'Allicin content standardized',
        'Savory flavor enhancement',
        'Reduced odor profile'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
    },
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-700">Loading products...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(45, 80, 22, 0.2) 1px, transparent 0)`,
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
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                Industrial Food Ingredients
              </span>
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-green-800 via-green-700 to-yellow-600 bg-clip-text text-transparent">
              Our Products
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Sunrise Extracts supplies food-grade oleoresins, natural food colors, essential oils, 
              and botanical extracts for industrial food manufacturing applications.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Important Notice */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="p-6 bg-gradient-to-br from-green-50 to-yellow-50 border-2 border-green-200 rounded-2xl shadow-sm">
              <p className="text-center text-slate-700 text-sm md:text-base">
                <span className="text-green-800 font-semibold">Important Notice:</span> Product details 
                and samples are shared following customer verification and confirmation of food use. 
                All specifications and availability are subject to confirmation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-32">
        <div className="max-w-7xl mx-auto">
          <ProductGrid products={productsData} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="p-12 bg-white rounded-2xl border-2 border-green-200 shadow-xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Need Custom Solutions?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Additional botanical and spice extracts may be considered based on application fit 
                and agreed supply programs. Contact us to discuss your specific requirements.
              </p>
             <MotionLink
  to="/contact"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 inline-block bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-green-700/30 transition-all duration-300"
>
  Contact Our Team
</MotionLink>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;