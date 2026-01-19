import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '',
  onClick,
  ...props 
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-green-700 to-green-600 text-white hover:shadow-2xl hover:shadow-green-700/30',
    secondary: 'border-2 border-green-600 text-green-700 hover:bg-green-50',
    outline: 'border border-slate-300 text-slate-700 hover:border-green-600 hover:text-green-700 hover:bg-green-50'
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        group px-8 py-4 font-semibold rounded-full 
        transition-all duration-300 
        flex items-center gap-2 justify-center
        ${variants[variant]} 
        ${className}
      `}
      {...props}
    >
      {children}
      {icon && (
        <ArrowRight 
          size={20} 
          className="group-hover:translate-x-1 transition-transform duration-300" 
        />
      )}
    </motion.button>
  );
};

export default Button;