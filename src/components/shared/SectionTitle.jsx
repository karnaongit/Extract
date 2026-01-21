import AnimatedSection from './AnimatedSection';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
  <AnimatedSection className="pb-6">
    <h2 className="
      text-5xl md:text-6xl lg:text-7xl
      font-bold
      bg-gradient-to-r from-yellow-500 via-green-600 to-yellow-400
      bg-clip-text text-transparent
    ">
      {title}
    </h2>
  </AnimatedSection>

  {subtitle && (
    <AnimatedSection delay={0.2}>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6">
        {subtitle}
      </p>
    </AnimatedSection>
  )}
</div>

  );
};

export default SectionTitle;