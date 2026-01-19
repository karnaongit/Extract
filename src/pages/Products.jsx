import { motion } from 'framer-motion';
import { Droplet, Palette, Flower2, Leaf, Beaker, Sparkles } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';
import SectionTitle from '../components/shared/SectionTitle';
import ProductGrid from '../components/products/ProductGrid';

const Products = () => {
  const productsData = [
    {
      id: 1,
      name: 'Paprika Oleoresin',
      category: 'Oleoresins',
      description: 'High-quality paprika oleoresin for natural color and flavor enhancement in food manufacturing applications.',
      icon: <Droplet size={32} />,
      gradient: 'from-red-600 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      image: 'https://images.unsplash.com/photo-1583454166245-196168ece1e2?q=80&w=800',
      features: [
        'Natural red color intensity',
        'Heat-stable formulation',
        'Clean label compatible',
        'Multiple ASTA unit options'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },
    {
      id: 2,
      name: 'Capsicum Oleoresin',
      category: 'Oleoresins',
      description: 'Concentrated capsicum extract providing heat and pungency for seasonings and spice applications.',
      icon: <Droplet size={32} />,
      gradient: 'from-orange-600 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      image: 'https://images.unsplash.com/photo-1583454155184-1bde83ece2a5?q=80&w=800',
      features: [
        'Standardized heat levels',
        'Scoville unit consistency',
        'Oil-soluble format',
        'Extended shelf stability'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },
    {
      id: 3,
      name: 'Turmeric Oleoresin',
      category: 'Oleoresins',
      description: 'Natural turmeric extract for golden-yellow coloring in food products with curcumin content.',
      icon: <Beaker size={32} />,
      gradient: 'from-yellow-600 to-amber-500',
      bgGradient: 'from-yellow-50 to-amber-50',
      image: 'https://images.unsplash.com/photo-1615485500134-275c08a2b9d0?q=80&w=800',
      features: [
        'High curcumin content',
        'Natural yellow pigment',
        'Clean label solution',
        'Multiple concentration options'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
    },
    {
      id: 4,
      name: 'Annatto Extract',
      category: 'Food Colors',
      description: 'Plant-derived natural food color providing yellow to orange hues for clean-label formulations.',
      icon: <Palette size={32} />,
      gradient: 'from-amber-600 to-orange-500',
      bgGradient: 'from-amber-50 to-orange-50',
      image: 'https://images.unsplash.com/photo-1505575967455-48710f36b1fb?q=80&w=800',
      features: [
        'Oil-soluble and water-soluble formats',
        'Natural yellow-orange coloring',
        'pH stable across ranges',
        'Clean label certified'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    },
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
      id: 7,
      name: 'Lemon Essential Oil',
      category: 'Essential Oils',
      description: 'Food-grade lemon essential oil for citrus aroma and flavor enhancement in industrial applications.',
      icon: <Flower2 size={32} />,
      gradient: 'from-yellow-500 to-lime-500',
      bgGradient: 'from-yellow-50 to-lime-50',
      image: 'https://images.unsplash.com/photo-1587486937736-e8c6a2f7e5b6?q=80&w=800',
      features: [
        'Cold-pressed extraction',
        'Natural citrus aroma',
        'Food-grade quality',
        'Consistent flavor profile'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Country of Origin']
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
      id: 10,
      name: 'Ginger Extract',
      category: 'Extracts',
      description: 'Concentrated ginger extract for spicy, warming flavor notes in food and beverage formulations.',
      icon: <Leaf size={32} />,
      gradient: 'from-amber-600 to-yellow-600',
      bgGradient: 'from-amber-50 to-yellow-50',
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?q=80&w=800',
      features: [
        'Concentrated gingerol content',
        'Spicy flavor profile',
        'Water and oil soluble options',
        'Heat-stable formulation'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
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
    {
      id: 12,
      name: 'Black Pepper Extract',
      category: 'Extracts',
      description: 'Piperine-rich black pepper extract for pungency and bioavailability enhancement.',
      icon: <Leaf size={32} />,
      gradient: 'from-gray-700 to-slate-600',
      bgGradient: 'from-gray-50 to-slate-50',
      image: 'https://images.unsplash.com/photo-1599807689214-cd6ab88aaa01?q=80&w=800',
      features: [
        'High piperine content',
        'Natural pungency',
        'Bioavailability enhancer',
        'Clean label ingredient'
      ],
      documentation: ['Specification', 'COA', 'SDS', 'Allergen Statement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Background Pattern */}
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
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-12 bg-white rounded-2xl border-2 border-green-200 shadow-xl text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                Need Custom Solutions?
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Additional botanical and spice extracts may be considered based on application fit 
                and agreed supply programs. Contact us to discuss your specific requirements.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-green-700/30 transition-all duration-300"
              >
                Contact Our Team
              </motion.button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Products;