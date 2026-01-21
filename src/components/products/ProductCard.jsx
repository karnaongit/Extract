import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText } from 'lucide-react';

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

export default ProductCard;