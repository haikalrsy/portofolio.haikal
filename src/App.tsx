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

  // Tech logos untuk LogoLoop - sesuai dengan skills
  const techLogos = [
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiFigma />, title: "Figma", href: "https://www.figma.com" },
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
          
          {/* LogoLoop with proper props */}
          <div className="h-[00px] relative overflow-hidden my-10">
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