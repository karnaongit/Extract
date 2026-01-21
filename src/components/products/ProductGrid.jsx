// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import ProductCard from './ProductCard';

// const ProductGrid = ({ products }) => {
//   const [activeFilter, setActiveFilter] = useState('All');

//   const categories = ['All', 'Oleoresins', 'Food Colors', 'Essential Oils', 'Extracts'];

//   const filteredProducts = activeFilter === 'All' 
//     ? products 
//     : products.filter(product => product.category === activeFilter);

//   return (
//     <div>
//       {/* Filter Buttons */}
//       <div className="flex flex-wrap justify-center gap-4 mb-12">
//         {categories.map((category) => (
//           <motion.button
//             key={category}
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => setActiveFilter(category)}
//             className={`px-6 py-3 font-semibold rounded-full transition-all duration-300 ${
//               activeFilter === category
//                 ? 'bg-gradient-to-r from-green-700 to-green-600 text-white shadow-lg'
//                 : 'bg-white border-2 border-slate-200 text-slate-700 hover:border-green-300 hover:text-green-700'
//             }`}
//           >
//             {category}
//           </motion.button>
//         ))}
//       </div>

//       {/* Product Grid */}
//       <motion.div 
//         layout
//         className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//       >
//         {filteredProducts.map((product, index) => (
//           <ProductCard key={product.id} product={product} index={index} />
//         ))}
//       </motion.div>

//       {/* No Results */}
//       {filteredProducts.length === 0 && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-center py-20"
//         >
//           <p className="text-slate-500 text-lg">No products found in this category.</p>
//         </motion.div>
//       )}
//     </div>
//   );
// };

// export default ProductGrid;