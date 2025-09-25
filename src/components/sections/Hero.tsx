import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import Lanyard from "./Lanyard";

const Hero = () => {
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive configurations
  const getLanyardConfig = () => {
    const { width } = screenSize;
    
    if (width < 640) { // Mobile
      return {
        position: [0, 0, 8] as [number, number, number],
        fov: 25,
      };
    } else if (width < 1024) { // Tablet
      return {
        position: [2, 0, 10] as [number, number, number],
        fov: 22,
      };
    } else { // Desktop
      return {
        position: [4, 0, 12] as [number, number, number],
        fov: 20,
      };
    }
  };

  const lanyardConfig = getLanyardConfig();

  return (
    <section className="relative mx-auto h-screen w-full overflow-hidden">
      {/* Hero text */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        
        <div className="flex-1 max-w-full lg:max-w-[50%] xl:max-w-[45%]">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Haikal</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]} <br />
            {config.hero.p[2]}
          </p>
        </div>
      </div>

      {/* 3D Lanyard - Ultra Responsive */}
      <div
        className="
          absolute z-30
          
          // Mobile (xs-sm): Center bottom, smaller size
          bottom-[120px] left-1/2 -translate-x-1/2 
          h-[180px] w-[180px]
          
          // Small tablet (sm): Move to right side, medium size
          sm:bottom-[80px] sm:right-[5%] sm:left-auto sm:translate-x-0
          sm:h-[220px] sm:w-[220px]
          
          // Medium tablet (md): Larger size, better positioning
          md:bottom-[60px] md:right-[8%]
          md:h-[280px] md:w-[280px]
          
          // Large tablet/small desktop (lg): Right side, good size
          lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto
          lg:right-[5%] lg:h-[350px] lg:w-[350px]
          
          // Desktop (xl): Optimal desktop experience
          xl:top-[15%] xl:translate-y-0 xl:right-[3%]
          xl:h-[420px] xl:w-[420px]
          
          // Large desktop (2xl): Maximum impact
          2xl:top-[10%] 2xl:right-[5%]
          2xl:h-[500px] 2xl:w-[500px]
        "
      >
        <Lanyard 
          position={lanyardConfig.position} 
          gravity={[0, -40, 0]} 
          fov={lanyardConfig.fov}
          transparent={true}
        />
      </div>

      {/* Background gradient overlay untuk depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black/10 pointer-events-none z-20" />

      {/* Scroll indicator - Always visible */}
      <div className="absolute bottom-8 sm:bottom-10 flex w-full items-center justify-center z-40">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2 backdrop-blur-sm bg-black/20">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;