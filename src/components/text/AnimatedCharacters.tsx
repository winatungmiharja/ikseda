import { motion } from 'framer-motion';
import React from 'react';

const AnimatedCharacters = ({ text }: { text: string }) => {
  const item = {
    hidden: {
      y: '200%',
      color: '#FEF7F1',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      color: '#FEF7F1',
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };
  const words = text.split(' ').map((word) => [...word.split(''), '\u00A0']);
  return (
    <div className='flex flex-wrap justify-center'>
      {words.map((_, index) => {
        return (
          <h4
            key={index}
            className='w-max font-bold leading-tight drop-shadow-md'
          >
            {words[index].map((element, index) => {
              return (
                <span
                  style={{
                    overflow: 'hidden',
                    display: 'inline-block',
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: 'inline-block' }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </h4>
        );
      })}
    </div>
  );
};

export default AnimatedCharacters;
