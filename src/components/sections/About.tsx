import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { services } from "../../constants";
import { SectionWrapper } from "../../hoc";
import { fadeIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { InstagramIcon, GitHubIcon, WhatsAppIcon } from "./socialicons";
import StarBorder from "../StarBorder";

interface IServiceCard {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<IServiceCard> = ({ index, title, icon }) => (
  <StarBorder as="button" className="custom-class" color="white" speed="5s">
    <Tilt
      glareEnable
      tiltEnable
      tiltMaxAngleX={30}
      tiltMaxAngleY={30}
      glareColor="#aaa6c3"
    >
      <div className="max-w-[250px] w-full xs:w-[250px]">
        <motion.div className="bg-transparent shadow-card w-full rounded-[20px] p-[1px] z-0">
          <div className="bg-transparent flex h-[280px] flex-col items-center justify-evenly rounded-[20px] px-10 py-12 gap-x-8">
            <img src={icon} alt={title} className="h-16 w-16 object-contain" />
            <h3 className="text-center text-[20px] font-bold text-white">
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
    </Tilt>
  </StarBorder>
);

const About = () => {
  const socialLinks = {
    instagram: "https://instagram.com/haikalrasyaputraa",
    github: "https://github.com/haikalrsy",
    whatsapp: "https://wa.me/6281386805356",
  };

  return (
    <section className="relative">
      <div className="relative z-10">
        <Header useMotion={true} {...config.sections.about} />

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary mt-4 max-w-3xl text-[17px] leading-[30px]"
        >
          {config.sections.about.content}
        </motion.p>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 md:gap-x-14 xl:gap-x-20 gap-y-10 md:gap-y-14 xl:gap-y-16 justify-items-center">

          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>

        {/* Social Media Section */}
        <motion.div
          variants={fadeIn("up", "", 0.3, 1)}
          className="mt-24 flex flex-col items-center gap-8"
        >
          <h2 className="text-white text-[24px] font-bold">Follow Me On</h2>

          <div className="flex gap-8 flex-wrap justify-center">
            {/* Instagram */}
            <StarBorder as="button" className="custom-class" color="white" speed="5s">
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-transparent hover:bg-white hover:text-black text-white px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <InstagramIcon className="w-6 h-6" />
                <span className="font-semibold">Instagram</span>
              </a>
            </StarBorder>

            {/* GitHub */}
            <StarBorder as="button" className="custom-class" color="white" speed="5s">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-transparent text-white px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <GitHubIcon className="w-6 h-6" />
                <span className="font-semibold">GitHub</span>
              </a>
            </StarBorder>

            {/* WhatsApp */}
            <StarBorder as="button" className="custom-class" color="white" speed="5s">
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                <WhatsAppIcon className="w-6 h-6" />
                <span className="font-semibold">WhatsApp</span>
              </a>
            </StarBorder>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
