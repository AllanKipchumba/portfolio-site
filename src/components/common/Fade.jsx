import React from 'react';
import './Fade.css';

export const Fade = ({ children, top, left, bottom, right }) => {
  const direction = top ? 'fade-top' : left ? 'fade-left' : bottom ? 'fade-bottom' : right ? 'fade-right' : 'fade-top';
  
  return (
    <div className={direction}>
      {children}
    </div>
  );
};

