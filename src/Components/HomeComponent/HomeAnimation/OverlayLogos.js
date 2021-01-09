import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

const importAll = r => r.keys().map(r)

const images = importAll(require.context('./assets/', false, /\.(png|jpe?g|svg)$/));

function OverlayLogos() {

  const [index, setIndex] = useState(0)
  const [currIndex, setCurrIndex] = useState(0)
  
  useEffect(() => {
    console.log(images)
    let localIndex = index
    const interval = setInterval(() => {
      if (localIndex < images.length)
        setIndex(localIndex++)
    }, 5000)
    if (localIndex === images.length - 2)
      clearInterval(interval)
    return () => clearInterval(interval)
  },[])


  const incrementCurrIndex = () => setCurrIndex(currIndex + 1)

  return (
    <div style={{ 
      display: 'flex',  
      width: '100vw', 
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: '2'
    }}>
      <AnimatePresence
        // exitBeforeEnter={true}
        onExitComplete={incrementCurrIndex}
      >
        {
          index === currIndex &&
          <motion.img
            src={images[index]}
            initial={{
              transform: "scale(0,0) translateY(-50%)",
            }}
            transition={{
              duration: 2.5
            }}
            animate={{
              transform: "scale(0.75, 0.75) translateY(0%)"
            }}
            exit={{
              transform: "scale(3,3)",
              opacity: 0
            }}
          />
        }
      </AnimatePresence>
    </div>
  );
}

export default OverlayLogos;
