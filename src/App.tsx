import { BrowserRouter } from "react-router-dom";
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiFlutter, 
  SiPhp, 
  SiLaravel, 
  SiGit, 
  SiFigma 
} from 'react-icons/si';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";
import LogoLoop from "./components/LogoLoop";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  // Tech logos dengan warna asli masing-masing
  const techLogos = [
    { 
      node: <span style={{ color: '#E34F26' }}><SiHtml5 size={50} /></span>, 
      title: "HTML5", 
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML" 
    },
    { 
      node: <span style={{ color: '#1572B6' }}><SiCss3 size={50} /></span>, 
      title: "CSS3", 
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS" 
    },
    { 
      node: <span style={{ color: '#F7DF1E' }}><SiJavascript size={50} /></span>, 
      title: "JavaScript", 
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" 
    },
    { 
      node: <span style={{ color: '#3178C6' }}><SiTypescript size={50} /></span>, 
      title: "TypeScript", 
      href: "https://www.typescriptlang.org" 
    },
    { 
      node: <span style={{ color: '#61DAFB' }}><SiReact size={50} /></span>, 
      title: "React", 
      href: "https://react.dev" 
    },
    { 
      node: <span style={{ color: '#02569B' }}><SiFlutter size={50} /></span>, 
      title: "Flutter", 
      href: "https://flutter.dev" 
    },
    { 
      node: <span style={{ color: '#06B6D4' }}><SiTailwindcss size={50} /></span>, 
      title: "Tailwind CSS", 
      href: "https://tailwindcss.com" 
    },
    { 
      node: <span style={{ color: '#339933' }}><SiNodedotjs size={50} /></span>, 
      title: "Node.js", 
      href: "https://nodejs.org" 
    },
    { 
      node: <span style={{ color: '#777BB4' }}><SiPhp size={50} /></span>, 
      title: "PHP", 
      href: "https://www.php.net" 
    },
    { 
      node: <span style={{ color: '#FF2D20' }}><SiLaravel size={50} /></span>, 
      title: "Laravel", 
      href: "https://laravel.com" 
    },
    { 
      node: <span style={{ color: '#F05032' }}><SiGit size={50} /></span>, 
      title: "Git", 
      href: "https://git-scm.com" 
    },
    { 
      node: <span style={{ color: '#F24E1E' }}><SiFigma size={50} /></span>, 
      title: "Figma", 
      href: "https://www.figma.com" 
    },
  ];

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          
          {/* LogoLoop with colored icons */}
          <div className="h-[100px] relative overflow-hidden my-10">
            <LogoLoop
              logos={techLogos}
              speed={100}
              direction="left"
              logoHeight={50}
              gap={40}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="#050816"
              ariaLabel="Technology stack"
            />
          </div>
          
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;