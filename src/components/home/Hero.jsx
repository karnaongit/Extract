import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Button from '../shared/Button';
import AnimatedSection from '../shared/AnimatedSection';
import { Link } from 'react-router-dom';
const Hero = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2400" 
          alt="Natural spices and ingredients"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-yellow-900/90" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-20">
        <AnimatedSection>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <img 
              src="/src/assets/logo.png" 
              alt="Sunrise Extracts" 
              className="h-32 w-32 mx-auto drop-shadow-2xl rounded-t-full"
            />
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span className="text-white drop-shadow-lg">
              Food-Grade Oleoresins,
            </span>
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent drop-shadow-lg">
              Natural Food Colors
            </span>
            <br />
            <span className="text-white drop-shadow-lg">
              & Essential Oils
            </span>
          </motion.h1>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <p className="text-xl md:text-2xl text-green-50 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
            Sunrise Extracts supplies food-grade oleoresins, natural food colors, essential oils, 
            and botanical extracts for industrial food manufacturing applications, supported by 
            documentation-driven processes and responsive U.S.-based coordination.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          

<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
  <Link to="/contact">
    <Button variant="primary" icon>
      Request Specifications / COA / SDS
    </Button>
  </Link>

  <Link to="/contact">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 bg-white/20 backdrop-blur-sm border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300"
    >
      Request Samples or Commercial Information
    </motion.button>
  </Link>
</div>

        </AnimatedSection>

        {/* Trust Bar */}
        <AnimatedSection delay={0.8}>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm">
            {[
              'B2B Supply',
              'Industrial Food Applications Only',
              'Documentation Available Upon Request'
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/30"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-white font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="text-yellow-400" size={40} />
      </motion.button>
    </section>
  );
};

export default Hero;