import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up' // 'up', 'down', 'left', 'right', 'fade'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const directions = {
    up: { y: 50, x: 0 },
    down: { y: -50, x: 0 },
    left: { x: 50, y: 0 },
    right: { x: -50, y: 0 },
    fade: { y: 0, x: 0 }
  };

  const initial = {
    opacity: 0,
    ...directions[direction]
  };

  const animate = {
    opacity: isInView ? 1 : 0,
    y: isInView ? 0 : directions[direction].y,
    x: isInView ? 0 : directions[direction].x
  };

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;