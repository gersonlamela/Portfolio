import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const ScrollRevealSection = ({ children }) => {
  useEffect(() => {
    ScrollReveal().reveal('.reveal', {
      
      duration: 1000,
      distance: '100%',
      origin: 'left',
    });
  }, []);

  return <div className="reveal">{children}</div>;
};

export default ScrollRevealSection;

