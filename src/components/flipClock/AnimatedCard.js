import React from 'react'

const AnimatedCard = ({ position, animation, digit }) => {
  return(
    <div className={`flipCard ${position} ${animation}`}>
      <span>{digit}</span>
    </div>
  );
};

export default AnimatedCard
