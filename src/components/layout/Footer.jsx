import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Founders', path: '/founders' },
      { name: 'Contact', path: '/contact' }
    ],
    products: [
      { name: 'Products', path: '/products' },
      { name: 'Applications', path: '/applications' },
      { name: 'Quality & Documentation', path: '/quality' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-green-50 to-yellow-50 border-t border-green-200 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(45, 80, 22, 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo_2.png" alt="Sunrise Extracts" className="h-20 w-20 bg-amber-50 rounded-full" />
                <h3 className="text-xl font-bold bg-gradient-to-r from-green-800 via-green-700 to-yellow-600 bg-clip-text text-transparent">
                  SUNRISE EXTRACTS
                </h3>
              </div>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Woman-owned, U.S.-based food ingredients supply company delivering premium oleoresins, natural food colors, and essential oils.
            </p>
            <div className="flex gap-2">
              <div className="px-3 py-1 bg-green-100 border border-green-300 rounded-full text-xs text-green-700 font-medium">
                Woman-Owned
              </div>
              <div className="px-3 py-1 bg-yellow-100 border border-yellow-300 rounded-full text-xs text-yellow-700 font-medium">
                Small Business
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-green-800 font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-green-700 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-green-800 font-semibold mb-4 text-sm uppercase tracking-wider">
              Products & Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-600 hover:text-green-700 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight 
                      size={14} 
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-green-800 font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <MapPin size={18} className="text-green-600 mt-0.5 flex-shrink-0" />
                <span>109 Hay Street Suite 202, Fayetteville,<br /> NC 28301 United States</span>
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm hover:text-green-700 transition-colors">
                <Mail size={18} className="text-green-600 flex-shrink-0" />
                <a href="mailto:info@sunriseextracts.net">info@sunriseextracts.net</a>
              </li>
              <li className="flex items-center gap-3 text-slate-600 text-sm hover:text-green-700 transition-colors">
                <Phone size={18} className="text-green-600 flex-shrink-0" />
                <a href="tel:++91 75690 89979">+91 75690 89979</a>
              </li>
              <li className="flex items-start gap-3 text-slate-600 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[18px] w-[18px] text-green-600 mt-0.5 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span>
                  <strong className="text-green-800">Business Hours</strong><br />
                  Monday – Friday: 9:00 AM – 5:00 PM (EST)<br />
                  Saturday & Sunday: Closed
                </span>
              </li>

              
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-green-200 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
            <p>© {currentYear} Sunrise Extracts. All rights reserved.</p>
            <p className="text-center md:text-right">
              Products supplied for industrial food manufacturing applications only.
            </p>
          </div>

          {/* Legal Disclaimer */}
          <div className="mt-6 p-4 bg-white/60 rounded-lg border border-green-200">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-green-800">Disclaimer:</strong> Products supplied for industrial food manufacturing applications only. No pharmaceutical, medical, or health claims are made or implied. Website content is informational and does not constitute an offer to sell.
            
            </p>
            <br />
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-green-800">Governing Law:</strong> This website and business operations are governed by the laws of the State of North Carolina, United States.
            </p>
          </div>
          

          
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;