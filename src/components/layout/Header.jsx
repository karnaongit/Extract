import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    
    { name: 'Applications', path: '/applications' },
    { name: 'Quality', path: '/quality' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Founders', path: '/founders' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg py-3 shadow-lg shadow-green-900/5' 
            : 'bg-transparent py-5 '
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center gap-3 md:gap-4">
  {/* Powerful Logo Container with Glow Effect */}
  <motion.div
    className="relative"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    {/* Outer Glow */}
    <div className="absolute -inset-3 bg-gradient-to-r from-amber-300/30 to-emerald-300/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    {/* Middle Glow */}
    <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-200/40 to-emerald-200/40 rounded-full blur-lg opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
    
    {/* Logo Image */}
    <div className="relative h-18 w-18 md:h-24 md:w-24 bg-gradient-to-br from-amber-50 via-white to-emerald-50 rounded-full p-1.5 border-[3px] md:border-4 border-white shadow-2xl">
      <img 
        src="/logo_1.png" 
        alt="Sunrise Extracts" 
        className="h-full w-full object-cover rounded-full"
      />
      {/* Shine Effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/40 via-transparent to-transparent pointer-events-none"></div>
    </div>
    
    {/* Corner Accents */}
    <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-full border border-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute -bottom-1 -left-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-full border border-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </motion.div>

  {/* Powerful Text */}
  <div className="relative min-w-0">
    {/* Text Glow */}
    <div className="absolute -inset-4 bg-gradient-to-r from-amber-200/20 to-emerald-200/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    
    {/* Main Text with Strong Presence */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2 }}
      className="relative font-extrabold leading-none tracking-tight"
      style={{
        fontFamily: "'Montserrat', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
        fontSize: "clamp(1.8rem, 6vw, 2.8rem)",
        fontWeight: 900,
        background: "linear-gradient(135deg, #fbbf24 0%, #34d399 50%, #f59e0b 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        letterSpacing: "-0.02em",
        textTransform: "uppercase"
      }}
    >
      SUNRISE
      <br className="sm:hidden" />
      <span className="hidden sm:inline"> </span>
      EXTRACTS
    </motion.div>

    {/* Powerful Subtitle */}
    {/* <div className="mt-2 md:mt-3 relative">
      <div className="inline-flex items-center gap-1.5 md:gap-2 px-2.5 md:px-3 py-1 md:py-1.5 bg-gradient-to-r from-amber-50/90 to-emerald-50/90 backdrop-blur-sm rounded-full border border-white/80 shadow-lg">
        
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-amber-400 to-emerald-400 rounded-full"></div>
        
        
        <p className="text-xs md:text-sm font-bold tracking-widest bg-gradient-to-r from-amber-700 to-emerald-700 bg-clip-text text-transparent">
          INDUSTRIAL GRADE
        </p>
        
        
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-emerald-400 to-amber-400 rounded-full"></div>
      </div>
    </div> */}

    {/* Animated Power Line */}
    <div className="absolute -bottom-2 md:-bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-300 to-emerald-300 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
    
    {/* Reflection Effect */}
    <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-white/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
  </div>
</Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="relative group"
              >
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-yellow-400'
                    : 'text-black hover:text-green-400'
                }`}>
                  {item.name}
                </span>
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-green-700 to-yellow-500 transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden lg:block px-6 py-2.5 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-green-700/30 transition-all duration-300"
          >
            Request Info
          </motion.button> */}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-green-900 z-50 relative"
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute inset-0 bg-green-900/20 backdrop-blur-sm"
            />

            <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white border-l border-green-200">
              <nav className="flex flex-col gap-2 p-8 pt-24">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                        location.pathname === item.path
                          ? 'bg-gradient-to-r from-green-50 to-yellow-50 text-green-700 border border-green-200'
                          : 'text-slate-600 hover:bg-green-50 hover:text-green-700'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="mt-6 px-6 py-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-green-700/30 transition-all duration-300"
                >
                  Request Information
                </motion.button> */}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;