import AnimatedSection from './AnimatedSection';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      <AnimatedSection>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          {title}
        </h2>
      </AnimatedSection>
      
      {subtitle && (
        <AnimatedSection delay={0.2}>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
};

export default SectionTitle;