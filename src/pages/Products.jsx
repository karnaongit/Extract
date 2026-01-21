import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  Palette, 
  Flame, 
  Sprout, 
  Flower2, 
  Leaf, 
  Sparkles, 
  FileText, 
  Droplets,
  CircleDashed,
  ChefHat,
  Apple,
  Scale,
  ShieldCheck,
  X
} from 'lucide-react';
import { Link } from "react-router-dom";
import ProductGrid from '../components/products/ProductGrid';

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
    once: false,
    margin: "-50px 0px"
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

// Category Detail Modal Component
const CategoryDetailModal = ({ category, isOpen, onClose }) => {
  if (!isOpen) return null;

  // Category data from your document
  const categoryDetails = {
    'Oleoresins': {
      title: 'FOOD-GRADE OLEORESINS',
      description: 'Sunrise Extracts supplies food-grade oleoresins used for controlled color, flavor, and pungency in industrial food manufacturing applications. Oleoresins offer consistency and ease of handling compared to raw spices and powders.',
      primaryProducts: [
        'Paprika Oleoresin – Natural red to orange color for sauces, snacks, seasonings, and processed foods.',
        'Capsicum Oleoresin – Controlled heat and pungency for savory food applications.'
      ],
      additionalProducts: [
        'Black Pepper Oleoresin',
        'Turmeric Oleoresin',
        'Ginger Oleoresin',
        'Garlic Oleoresin',
        'Onion Oleoresin',
        'Coriander Oleoresin',
        'Clove Oleoresin',
        'Nutmeg Oleoresin'
      ],
      documentation: 'Product Specification, Batch COA, SDS'
    },
    'Natural Colors': {
      title: 'NATURAL FOOD COLORS (PLANT-DERIVED)',
      description: 'Sunrise Extracts offers plant-derived natural food color solutions designed to support clean-label and natural positioning in industrial food manufacturing.',
      primaryProducts: [
        'Paprika-Based Red / Orange',
        'Turmeric / Curcumin-Based Yellow',
        'Annatto (Bixin / Norbixin) – Yellow to Orange'
      ],
      additionalProducts: [
        'Beetroot Red',
        'Caramel Color (Class I – Natural)',
        'Spirulina-Based Blue / Green Blends'
      ],
      note: 'Shade, stability, and performance depend on formulation and processing conditions. Documentation is provided upon request.'
    },
    'Botanical Extracts': {
      title: 'BOTANICAL EXTRACTS',
      description: 'Sunrise Extracts supplies food-grade botanical extracts derived from spices, herbs, and plant materials for industrial food applications.',
      primaryProducts: [],
      additionalProducts: [
        'Turmeric Extract',
        'Ginger Extract',
        'Garlic Extract',
        'Black Pepper Extract',
        'Chili Extract',
        'Coriander Extract',
        'Other spice and herb extracts based on application requirements'
      ],
      note: 'Botanical extracts are supplied following application review and confirmation of intended food use. Documentation available upon request.'
    },
    'Essential Oils': {
      title: 'FOOD-GRADE ESSENTIAL OILS',
      description: 'Sunrise Extracts supplies food-grade essential oils intended exclusively for industrial food manufacturing, flavor formulation, and aroma applications.',
      primaryProducts: [],
      additionalProducts: [
        'Black Pepper Oil',
        'Ginger Oil',
        'Clove Oil',
        'Cardamom Oil',
        'Cinnamon Oil',
        'Citrus Oils (Orange, Lemon, Lime)',
        'Other food-grade essential oils based on application requirements'
      ],
      importantNotice: 'Essential oils supplied by Sunrise Extracts are not marketed or supplied for direct consumer retail, therapeutic, cosmetic, pharmaceutical, or medicinal use.',
      documentation: 'Product Specification, Batch COA, SDS'
    }
  };

  const detail = categoryDetails[category];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl"
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 p-6 border-b border-slate-200 bg-white rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                category === 'Oleoresins' ? 'from-red-500 to-orange-500' :
                category === 'Natural Colors' ? 'from-yellow-500 to-amber-500' :
                category === 'Botanical Extracts' ? 'from-green-500 to-emerald-500' :
                'from-blue-500 to-cyan-500'
              } flex items-center justify-center text-white`}>
                {category === 'Oleoresins' ? <Flame size={20} /> :
                 category === 'Natural Colors' ? <Palette size={20} /> :
                 category === 'Botanical Extracts' ? <Leaf size={20} /> :
                 <Droplets size={20} />}
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{detail.title}</h2>
                <p className="text-sm text-slate-600">{category}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
            >
              <X size={24} className="text-slate-500" />
            </button>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6">
          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-slate-800">Overview</h3>
            <p className="text-slate-700 leading-relaxed">{detail.description}</p>
          </div>

          {/* Primary Products */}
          {detail.primaryProducts.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800">Primary Products:</h3>
              <ul className="space-y-2">
                {detail.primaryProducts.map((product, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                    <span className="text-slate-700">{product}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional Products */}
          {detail.additionalProducts.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-800">
                {category === 'Oleoresins' || category === 'Natural Colors' ? 'Additional Products (On Request):' : 'Available Products (On Request):'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {detail.additionalProducts.map((product, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                    <span className="text-slate-700">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Important Notice */}
          {detail.importantNotice && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm font-semibold text-red-800 mb-1">Important Use Notice:</p>
              <p className="text-red-700 text-sm">{detail.importantNotice}</p>
            </div>
          )}

          {/* Note */}
          {detail.note && (
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">{detail.note}</p>
            </div>
          )}

          {/* Documentation */}
          {detail.documentation && (
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <FileText size={16} className="text-green-700" />
                <h4 className="text-sm font-semibold text-green-800">Documentation Available:</h4>
              </div>
              <p className="text-green-700 text-sm">{detail.documentation}</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 p-6 border-t border-slate-200 bg-white rounded-b-2xl">
          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Main Products Component
const Products = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    console.log('Products page mounted');
    setIsMounted(true);
    
    // Preload images for better UX
    const preloadImages = () => {
      const imageUrls = productsData.map(product => product.image);
      const uniqueImages = [...new Set(imageUrls)];
      
      uniqueImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    preloadImages();
    
    return () => setIsMounted(false);
  }, []);

  // Complete product data based on your document
  const productsData = [
    // OLEORESINS
    {
      id: 1,
      name: 'Paprika Oleoresin',
      category: 'Oleoresins',
      description: 'Natural red to orange color for sauces, snacks, seasonings, and processed foods with consistent pigmentation.',
      icon: <Flame size={28} />,
      gradient: 'from-red-600 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      image: '/products/Paprika-Oleoresin.jpg',
      features: [
        'Natural red to orange shades',
        'Consistent pigmentation',
        'Suitable for sauces and snacks',
        'Clean-label solution'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
    },
    {
      id: 2,
      name: 'Capsicum Oleoresin',
      category: 'Oleoresins',
      description: 'Controlled heat and pungency for savory food applications with standardized capsaicin content.',
      icon: <Flame size={28} />,
      gradient: 'from-red-700 to-rose-600',
      bgGradient: 'from-rose-50 to-red-50',
      image: '/products/Capsicum-Oleoresin.jpg',
      features: [
        'Controlled heat levels',
        'Standardized pungency',
        'Savory flavor enhancement',
        'Process-stable formulation'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Scoville Rating']
    },
    {
      id: 3,
      name: 'Turmeric Oleoresin',
      category: 'Oleoresins',
      description: 'High-curcumin oleoresin for natural yellow coloring and flavor in food applications.',
      icon: <Palette size={28} />,
      gradient: 'from-yellow-600 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      image: '/products/Turmeric-Oleoresin.jpg',
      features: [
        'High curcumin content',
        'Natural yellow coloring',
        'Antioxidant properties',
        'Light-stable formulation'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Curcumin Content']
    },
    {
      id: 4,
      name: 'Black Pepper Oleoresin',
      category: 'Oleoresins',
      description: 'Concentrated pepper flavor and pungency for processed foods and seasonings.',
      icon: <CircleDashed size={28} />,
      gradient: 'from-stone-700 to-stone-600',
      bgGradient: 'from-stone-50 to-gray-50',
      image: '/products/BlackPepper-Oleoresin.jpg',
      features: [
        'Standardized piperine',
        'Concentrated flavor',
        'Enhanced bioavailability',
        'Versatile applications'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Piperine Content']
    },
    {
      id: 5,
      name: 'Ginger Oleoresin',
      category: 'Oleoresins',
      description: 'Potent ginger flavor and bioactive compounds for beverage and food applications.',
      icon: <Sprout size={28} />,
      gradient: 'from-amber-600 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      image: '/products/Ginger-Oleoresin.jpg',
      features: [
        'High gingerol content',
        'Warm spicy flavor',
        'Digestive support properties',
        'Natural preservative'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Gingerol Content']
    },

    // NATURAL FOOD COLORS
    {
      id: 6,
      name: 'Turmeric / Curcumin Color',
      category: 'Natural Food Colors',
      description: 'Plant-derived yellow color from turmeric for clean-label food and beverage applications.',
      icon: <Palette size={28} />,
      gradient: 'from-yellow-500 to-lime-400',
      bgGradient: 'from-yellow-50 to-lime-50',
      image: '/products/Turmeric-Color.jpg',
      features: [
        '100% plant-derived',
        'Clean-label approved',
        'Heat-stable formulation',
        'Vegan and allergen-free'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Color Index']
    },
    {
      id: 7,
      name: 'Annatto Color (Bixin/Norbixin)',
      category: 'Natural Food Colors',
      description: 'Natural yellow to orange color derived from annatto seeds for dairy and food applications.',
      icon: <Palette size={28} />,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      image: '/products/Annatto.jpg',
      features: [
        'Yellow to orange shades',
        'Dairy-compatible',
        'pH-stable',
        'Natural coloring'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Color Value']
    },
    {
      id: 8,
      name: 'Beetroot Red',
      category: 'Natural Food Colors',
      description: 'Natural red-purple color from beetroot for beverage, dairy, and confectionery applications.',
      icon: <Apple size={28} />,
      gradient: 'from-pink-600 to-rose-500',
      bgGradient: 'from-pink-50 to-rose-50',
      image: '/products/Beetroot-Red.jpg',
      features: [
        'Vibrant red-purple shades',
        'Water-soluble',
        'Low pH stability',
        'Vegan-friendly'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Betanin Content']
    },
    {
      id: 9,
      name: 'Spirulina Blue/Green',
      category: 'Natural Food Colors',
      description: 'Natural blue-green color from spirulina algae for innovative food applications.',
      icon: <Sparkles size={28} />,
      gradient: 'from-teal-600 to-cyan-500',
      bgGradient: 'from-teal-50 to-cyan-50',
      image: '/products/spirulina-blue.jpg',
      features: [
        'Natural blue coloring',
        'High protein content',
        'Light-sensitive formulation',
        'Plant-based solution'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },

    // BOTANICAL EXTRACTS
    {
      id: 10,
      name: 'Garlic Extract',
      category: 'Botanical Extracts',
      description: 'Deodorized garlic extract for savory applications without strong odor in processed foods.',
      icon: <Leaf size={28} />,
      gradient: 'from-slate-600 to-gray-500',
      bgGradient: 'from-slate-50 to-gray-50',
      image: '/products/Garlic-Extract.jpg',
      features: [
        'Deodorized formulation',
        'Standardized allicin content',
        'Savory flavor enhancement',
        'Reduced odor profile'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allicin Content']
    },
    {
      id: 11,
      name: 'Turmeric Extract',
      category: 'Botanical Extracts',
      description: 'High-potency turmeric extract with standardized curcuminoids for food fortification.',
      icon: <Leaf size={28} />,
      gradient: 'from-yellow-600 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      image: '/products/turmeric-extract.jpg',
      features: [
        'High curcuminoid content',
        'Antioxidant properties',
        'Bioavailability enhanced',
        'Food-grade purity'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Curcuminoid %']
    },
    {
      id: 12,
      name: 'Ginger Extract',
      category: 'Botanical Extracts',
      description: 'Concentrated ginger extract for flavor and functional benefits in food applications.',
      icon: <Leaf size={28} />,
      gradient: 'from-amber-600 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      image: '/products/Ginger-Extract.jpg',
      features: [
        'Standardized gingerols',
        'Warm spicy flavor',
        'Digestive support',
        'Natural preservative'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Gingerol Content']
    },

    // ESSENTIAL OILS
    {
      id: 13,
      name: 'Peppermint Essential Oil',
      category: 'Foodgrade Essential Oils',
      description: 'Premium peppermint oil for cooling sensation and minty flavor in confectionery and beverages.',
      icon: <Droplets size={28} />,
      gradient: 'from-green-600 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      image: '/products/Peppermint-EssentialOil.jpg',
      features: [
        'High menthol content',
        'Cooling effect profile',
        'Steam distilled quality',
        'Standardized potency'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },
    {
      id: 14,
      name: 'Orange Essential Oil',
      category: 'Foodgrade Essential Oils',
      description: 'Natural orange oil for sweet citrus notes in food manufacturing and flavoring applications.',
      icon: <Droplets size={28} />,
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-50 to-amber-50',
      image: '/products/Orange-EssentialOil.jpg',
      features: [
        'Sweet citrus aroma',
        'Cold-pressed quality',
        'Natural flavor enhancement',
        'Versatile application'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
    },
    {
      id: 15,
      name: 'Black Pepper Essential Oil',
      category: 'Foodgrade Essential Oils',
      description: 'Concentrated black pepper oil for savory flavor enhancement in processed foods.',
      icon: <Droplets size={28} />,
      gradient: 'from-stone-700 to-stone-600',
      bgGradient: 'from-stone-50 to-gray-50',
      image: '/products/BlackPepper-EssentialOil.jpg',
      features: [
        'Potent pepper aroma',
        'Standardized composition',
        'Flavor enhancement',
        'Natural preservative'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Piperine Content']
    }
  ];

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-green-700">Loading complete product portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Category Detail Modal */}
      {selectedCategory && (
        <CategoryDetailModal 
          category={selectedCategory}
          isOpen={!!selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
  {/* Clean gradient background with subtle image */}
  <div className="absolute inset-0">
    <img 
      src="https://images.unsplash.com/photo-1547516508-4c1f9c7c4ec3?q=80&w=2070&auto=format&fit=crop"
      alt="Clean manufacturing background"
      className="w-full h-full object-cover opacity-15"
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50/30 to-yellow-50/20"></div>
    
    {/* Geometric pattern */}
    <div 
      className="absolute inset-0 opacity-5"
      style={{
        backgroundImage: `repeating-linear-gradient(45deg, #059669 25%, transparent 25%, transparent 75%, #059669 75%, #059669),
                         repeating-linear-gradient(45deg, #059669 25%, #ffffff 25%, #ffffff 75%, #059669 75%, #059669)`,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 30px 30px'
      }}
    ></div>
  </div>

  {/* Floating product cards in background */}
  <div className="absolute inset-0 overflow-hidden">
    {['/products/Paprika-Oleoresin.jpg', '/products/Turmeric-Color.jpg', '/products/Peppermint-EssentialOil.jpg'].map((img, i) => (
      <motion.div
        key={i}
        className="absolute w-32 h-32 md:w-40 md:h-40 rounded-2xl shadow-xl overflow-hidden border-4 border-white"
        style={{
          left: `${10 + i * 30}%`,
          top: `${20 + i * 20}%`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          delay: i * 2,
          ease: "easeInOut"
        }}
      >
        <img 
          src={img} 
          alt="Product" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
      </motion.div>
    ))}
  </div>

  <div className="relative max-w-7xl mx-auto text-center z-10">
    <AnimatedSection>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="mb-8 flex flex-wrap justify-center gap-3"
      >
        <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-green-800 rounded-full text-sm font-semibold flex items-center gap-2 border border-green-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <ChefHat size={16} />
          Industrial Food Ingredients
        </span>
        <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-yellow-800 rounded-full text-sm font-semibold flex items-center gap-2 border border-yellow-100 shadow-sm hover:shadow-md transition-shadow duration-300">
          <Scale size={16} />
          B2B Supply Solutions
        </span>
      </motion.div>
      
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-green-800 via-green-700 to-yellow-600 bg-clip-text text-transparent">
        Complete Product Portfolio
      </h1>
      
      <div className="relative">
        <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed p-8 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-100">
          Sunrise Extracts supplies premium food-grade ingredients for industrial manufacturing, 
          offering oleoresins, natural colors, botanical extracts, and essential oils with full 
          documentation and compliance support.
        </p>
        <div className="absolute -top-2 -left-2 -right-2 -bottom-2 bg-gradient-to-r from-green-100/50 to-yellow-100/50 rounded-3xl -z-10 blur-md"></div>
      </div>
    </AnimatedSection>
  </div>
</section>

      {/* Product Categories Summary */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Oleoresins',
                  count: '8+ Products',
                  description: 'Controlled color, flavor & pungency',
                  color: 'from-red-500 to-orange-500',
                  icon: <Flame className="w-6 h-6" />
                },
                {
                  title: 'Natural Colors',
                  count: '6+ Products',
                  description: 'Plant-derived clean-label solutions',
                  color: 'from-yellow-500 to-amber-500',
                  icon: <Palette className="w-6 h-6" />
                },
                {
                  title: 'Botanical Extracts',
                  count: '7+ Products',
                  description: 'Spice & herb extracts',
                  color: 'from-green-500 to-emerald-500',
                  icon: <Leaf className="w-6 h-6" />
                },
                {
                  title: 'Essential Oils',
                  count: '7+ Products',
                  description: 'Food-grade flavor & aroma',
                  color: 'from-blue-500 to-cyan-500',
                  icon: <Droplets className="w-6 h-6" />
                }
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => setSelectedCategory(category.title)}
                  className="bg-white p-6 rounded-2xl border-2 border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group relative overflow-hidden"
                >
                  {/* Hover effect background */}
                  <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                    style={{
                      backgroundImage: category.title === 'Oleoresins' ? 'linear-gradient(135deg, #ef4444, #f97316)' :
                                     category.title === 'Natural Colors' ? 'linear-gradient(135deg, #eab308, #f59e0b)' :
                                     category.title === 'Botanical Extracts' ? 'linear-gradient(135deg, #22c55e, #10b981)' :
                                     'linear-gradient(135deg, #3b82f6, #06b6d4)'
                    }}
                  />
                  
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 relative z-10`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 relative z-10 group-hover:text-green-800 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-2 relative z-10">{category.description}</p>
                  <p className="text-green-700 font-semibold relative z-10">{category.count}</p>
                  
                  {/* Click hint */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <span>Click for details</span>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Instruction text */}
            <div className="mt-6 text-center">
              <p className="text-slate-600 text-sm">
                Click on any category above to view detailed product information, specifications, and additional offerings.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Compliance Notice - Updated per document */}
      <section className="px-6 pb-12">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection delay={0.4}>
            <div className="p-6 bg-gradient-to-br from-green-50 to-yellow-50 border-2 border-green-200 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="text-green-700" size={24} />
                <h3 className="text-lg font-bold text-green-800">Important Compliance Notice</h3>
              </div>
              <p className="text-slate-700">
                All products are intended for <strong>industrial food manufacturing applications only</strong>. 
                Essential oils are <strong>not</strong> supplied for direct consumer retail, therapeutic, 
                cosmetic, pharmaceutical, or medicinal use. Product availability, specifications, and 
                documentation may vary by origin, batch, and supply program. Final suitability and 
                regulatory compliance remain the responsibility of the customer.
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
          <AnimatedSection delay={0.5}>
            <div className="p-12 bg-white rounded-2xl border-2 border-green-200 shadow-xl text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Custom Solutions & Additional Products
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Additional oleoresins, botanical extracts, and essential oils may be considered based 
                on application fit and agreed supply programs. Contact us with your specific requirements 
                for customized solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 inline-block bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-green-700/30 transition-all duration-300"
                >
                  Request Product Information
                </MotionLink>
                <MotionLink
                  to="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 inline-block bg-white border-2 border-green-600 text-green-700 font-semibold rounded-full hover:bg-green-50 transition-all duration-300"
                >
                  Request Samples
                </MotionLink>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;