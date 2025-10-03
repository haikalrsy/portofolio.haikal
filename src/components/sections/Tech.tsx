import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const Tech = () => {
  return (
    <>
    <header>
    <div>
            <h1 className="text-center text-4xl font-bold mb-10" data-aos = "zoom-in-out" >
              My Skills
            </h1>
          </div>
          </header>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
