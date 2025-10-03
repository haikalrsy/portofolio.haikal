import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import Lanyard from "./Lanyard";
import RotatingText from "../RotatingText";

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
    <section className="relative mx-auto h-screen w-full overflow-hidden pb-0">
      {/* Stage Light Effect - Realistic Spotlight */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-primary to-primary" />
        
        {/* Main Spotlight Source - Top Center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full">
          {/* Light source (bulb) */}
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-20 h-20 bg-amber-200 rounded-full blur-2xl"
            animate={{
              opacity: [0.8, 1, 0.8],
              scale: [0.95, 1.05, 0.95],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Bright core */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-amber-50 rounded-full blur-xl" />
          
          {/* Light cone/beam - Main spotlight */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[800px] opacity-40"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(255, 248, 220, 0.6) 0%, rgba(255, 243, 196, 0.3) 20%, rgba(255, 240, 180, 0.1) 40%, transparent 70%)',
              clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)',
            }}
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Secondary light beams */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[900px] opacity-30"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(255, 250, 230, 0.4) 0%, rgba(255, 243, 196, 0.2) 25%, transparent 60%)',
              clipPath: 'polygon(45% 0%, 55% 0%, 100% 100%, 0% 100%)',
            }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
          
          {/* Wide ambient glow */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1000px] opacity-20"
            style={{
              background: 'radial-gradient(ellipse at top, rgba(255, 250, 230, 0.3) 0%, rgba(255, 243, 196, 0.1) 30%, transparent 70%)',
            }}
            animate={{
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
        

        
        {/* Dust particles in light beam */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-cyan-white rounded-full blur-sm"
              style={{
                left: `${40 + Math.random() * 20}%`,
                top: `${Math.random() * 30}%`,
              }}
              animate={{
                y: [0, 300, 600],
                opacity: [0, 0.6, 0],
                x: [0, (Math.random() - 0.5) * 50],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero text */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        
        <div className="flex-1 max-w-full lg:max-w-[50%] xl:max-w-[45%]">
          <div className="flex flex-wrap items-baseline gap-3 sm:gap-4 mb-6 sm:mb-8">
            <h1 className={`${styles.heroHeadText} text-white leading-none`}>
              Hi, I'm
            </h1>
            <RotatingText
              texts={['Haikal','Software Engineering', 'a Developer']}
              mainClassName="px-2 sm:px-5 md:px-6 text-[18px] sm:text-[20px] md:text-[30px] lg:text-[40px] font-black text-white overflow-hidden py-2 sm:py-2.5 md:py-3 rounded-xl bg-transparent backdrop-blur-md border-2 border-purple-400/50 shadow-xs shadow-white"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.040}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              rotationInterval={2000}
            />
          </div>
          <p className={`${styles.heroSubText} text-white-100 leading-relaxed`}>
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
          h-[200px] w-[100px]
          
          // Small tablet (sm): Move to right side, medium size
          sm:bottom-[80px] sm:right-[5%] sm:left-auto sm:translate-x-0
          sm:h-[220px] sm:w-[220px]
          
          //   Medium tablet (md): Larger size, better positioning
          md:bottom-[60px] md:right-[8%]
          md:h-[280px] md:w-[280px]
          
          // Large tablet/small desktop (lg): Right side, good size
          lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto
          lg:right-[5%] lg:h-[350px] lg:w-[350px]
          
          // Desktop (xl): Optimal desktop experience
          xl:top-[15%] xl:translate-y-0 xl:right-[3%]
          xl:h-[500px] xl:w-[600px]
          
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