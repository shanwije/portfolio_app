import React, { useContext } from "react";
import heroImg from "./../../assets/hero.jpg";
import ProfExperience from "../../components/ProfExpereince";
import Contact from "../../components/Contact";
import NavigationContext from "../NavContext/NavigationContext";

const Home = () => {
  const navItems = useContext(NavigationContext);

  const desc = `With seven years of full-stack development experience,
  specializing in algorithms, data structures, design, and
  architectural patterns, and a solid grasp of computer science
  fundamentals. Renowned for developing scalable solutions, agile
  leadership, and innovative problem-solving, with significant
  contributions across FinTech, EdTech, and Hospitality sectors.`;

  return (
    <>
      <div className="w-screen">
        <div className="container flex-row mx-auto">
          <section ref={navItems[0].ref}>
            {/* Hero content */}

            <div className="flex mx-auto px-4 md:grid md:grid-cols-5">
              <div className="hidden sm:block flex-col col-span-2">
                <img
                  class="w-full h-auto max-w-72 rounded-full justify-center items-center my-5 mx-auto"
                  src={heroImg}
                  alt="hero"
                  width={300}
                  height={300}
                />
              </div>
              <div className="flex justify-center items-center md:col-span-3 mx-3 my-3">
                {desc}
              </div>
            </div>
          </section>
          <section ref={navItems[1].ref}>
            {/* Experience content */}
            <ProfExperience />
          </section>
          <section ref={navItems[2].ref}>
            {/* Contact Me content */}
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
