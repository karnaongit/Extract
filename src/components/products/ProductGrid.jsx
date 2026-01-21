import { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductGrid = ({ products }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Categories from the document
  const categories = [
    'All',
    'Oleoresins',
    'Natural Food Colors', 
    'Botanical Extracts',
    'Foodgrade Essential Oils'
  ];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  return (
    <div>
      {/* Filter Buttons with Counts */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => {
          const productCount = category === 'All' 
            ? products.length 
            : products.filter(p => p.category === category).length;
          
          return (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-3 font-semibold rounded-full transition-all duration-300 flex items-center gap-2 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg'
                  : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700'
              }`}
            >
              {category}
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeFilter === category
                  ? 'bg-white/20 text-white'
                  : 'bg-slate-100 text-slate-600'
              }`}>
                {productCount}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* Category Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">
          {activeFilter === 'All' ? 'All Products' : activeFilter}
        </h2>
        <p className="text-slate-600">
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
        </p>
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
          <div className="w-24 h-24 mx-auto mb-6 opacity-20">
            <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <p className="text-slate-500 text-lg mb-4">No products found in this category.</p>
          <button
            onClick={() => setActiveFilter('All')}
            className="px-6 py-3 bg-green-100 text-green-700 font-semibold rounded-full hover:bg-green-200 transition-colors duration-300"
          >
            View All Products
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default ProductGrid;