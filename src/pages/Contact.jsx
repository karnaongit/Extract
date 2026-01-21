import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from 'lucide-react';
import AnimatedSection from '../components/shared/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    state: '',
    productInterest: '',
    application: '',
    volume: '',
    requestType: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setFormData({
          companyName: '',
          website: '',
          contactName: '',
          email: '',
          phone: '',
          state: '',
          productInterest: '',
          application: '',
          volume: '',
          requestType: '',
          message: ''
        });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.message || 'Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again or email us directly.');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2400" 
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-green-800/85 to-yellow-900/90" />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <AnimatedSection>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg">
              Contact Us
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your ingredient requirements? Get in touch with our team 
              for responsive, professional U.S.-based coordination.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="px-6 py-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <AnimatedSection>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-2xl border-2 border-green-200 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                    <MapPin className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Location</h3>
                  <p className="text-slate-700">
                   109 Hay Street Suite 202, Fayetteville,<br /> NC 28301 United States
                  </p>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-2xl border-2 border-green-200 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                    <Mail className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Email</h3>
                  <a 
                    href="mailto:info@sunriseextracts.net" 
                    className="text-green-700 hover:text-green-800 transition-colors"
                  >
                   info@sunriseextracts.net
                  </a>
                </motion.div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-2xl border-2 border-green-200 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-2xl flex items-center justify-center mb-6">
                    <Phone className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Phone</h3>
                  <a 
                    href="tel:+91 75690 89979" 
                    className="text-green-700 hover:text-green-800 transition-colors"
                  >
                   +91 75690 89979
                  </a>
                </motion.div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 bg-white rounded-2xl border-2 border-green-200 shadow-lg"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-green-500 rounded-2xl flex items-center justify-center mb-6">
                    <Clock className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">Business Hours</h3>
                  <p className="text-slate-700 leading-relaxed">
                    Monday – Friday: 9:00 AM – 5:00 PM (EST)<br />
                    Saturday & Sunday: Closed
                  </p>
                </motion.div>
              </AnimatedSection>

            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={0.3}>
                <div className="p-10 bg-white rounded-2xl border-2 border-slate-200 shadow-xl">
                  <h2 className="text-3xl font-bold mb-8 text-slate-900">Request Information</h2>
                  
                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-8 bg-green-50 border-2 border-green-300 rounded-xl text-center"
                    >
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h3>
                      <p className="text-green-700">
                        Your message has been received. We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mb-6 p-4 bg-red-50 border-2 border-red-300 rounded-lg text-red-700"
                        >
                          {error}
                        </motion.div>
                      )}
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Row 1 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            name="companyName"
                            required
                            value={formData.companyName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Website (Optional)
                          </label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Contact Name *
                          </label>
                          <input
                            type="text"
                            name="contactName"
                            required
                            value={formData.contactName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 3 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            State
                          </label>
                          <input
                            type="text"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 4 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Product Interest
                          </label>
                          <select
                            name="productInterest"
                            value={formData.productInterest}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          >
                            <option value="">Select a product</option>
                            <option value="Oleoresins">Oleoresins</option>
                            <option value="Natural Food Colors">Natural Food Colors</option>
                            <option value="Essential Oils">Essential Oils</option>
                            <option value="Botanical Extracts">Botanical Extracts</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Intended Application
                          </label>
                          <input
                            type="text"
                            name="application"
                            value={formData.application}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      {/* Row 5 */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Estimated Monthly Volume
                          </label>
                          <input
                            type="text"
                            name="volume"
                            value={formData.volume}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">
                            Request Type
                          </label>
                          <select
                            name="requestType"
                            value={formData.requestType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors"
                          >
                            <option value="">Select type</option>
                            <option value="Specification Request">Specification Request</option>
                            <option value="Sample Request">Sample Request</option>
                            <option value="Pricing Inquiry">Pricing Inquiry</option>
                            <option value="General Inquiry">General Inquiry</option>
                          </select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Message
                        </label>
                        <textarea
                          name="message"
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-green-500 focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.button
                        type="submit"
                        disabled={isLoading}
                        whileHover={{ scale: isLoading ? 1 : 1.02 }}
                        whileTap={{ scale: isLoading ? 1 : 0.98 }}
                        className={`w-full px-8 py-4 bg-gradient-to-r from-green-700 to-green-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                      >
                        {isLoading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                    </>
                  )}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Disclaimer */}
      <section className="px-6 pb-32 bg-gradient-to-br from-green-50 via-white to-yellow-50">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="p-8 bg-white border-2 border-slate-200 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-slate-900">Compliance & Legal Information</h3>
              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p>
                  <strong>Products Intended Use:</strong> Products are intended exclusively for industrial food manufacturing applications. 
                  No pharmaceutical, medical, or health claims are made or implied.
                </p>
                <p>
                  <strong>Limitation of Liability:</strong> Sunrise Extracts does not control customer formulations, processing, storage, 
                  or end use. Customers are responsible for compliance with all applicable regulations.
                </p>
                <p>
                  <strong>No Offer:</strong> Website content is informational only and does not constitute an offer to sell.
                </p>
                <p>
                  <strong>Third-Party Manufacturing:</strong> Products are sourced from qualified manufacturing partners under appropriate 
                  confidentiality agreements.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/60 rounded-lg border border-green-200">
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong className="text-green-800">Samples Policy:</strong> Samples may be provided to qualified business customers following application review and confirmation of intended industrial use.
            
            </p>
            
          </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;