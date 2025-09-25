import { motion } from "framer-motion";
import { styles } from "../../constants/styles";
import { config } from "../../constants/config";
import Lanyard from "./Lanyard";

const Hero = () => {
  return (
    <section className="relative mx-auto h-screen w-full">
      {/* Hero text */}
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>
        
        <div>
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

      {/* 3D Lanyard - POSISI KANAN DEPAN */}
      <div className="absolute top-0 right-0 w-1/2 h-full z-50">
        <Lanyard position={[5, 0, 10]} gravity={[0, -40, 0]} />
      </div>

      {/* Atau kalau mau lebih spesifik posisinya */}
      {/* 
      <div className="absolute top-[120px] right-[10%] w-[400px] h-[600px] z-50">
        <Lanyard position={[0, 0, 5]} gravity={[0, -40, 0]} />
      </div>
      */}

      {/* Scroll indicator */}
      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center z-20">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
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