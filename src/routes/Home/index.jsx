import React from "react";
import heroImg from "./../../assets/hero.jpg";
import ProfExperience from '../../components/ProfExpereince';
import Contact from "../../components/Contact";


const Home = () => {
  return (
    <>
      <div className="w-screen">
        <div className="container flex-row mx-auto">
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
              With seven years of full-stack development experience,
              specializing in algorithms, data structures, design, and
              architectural patterns, and a solid grasp of computer science
              fundamentals. Renowned for developing scalable solutions, agile
              leadership, and innovative problem-solving, with significant
              contributions across FinTech, EdTech, and Hospitality sectors.
            </div>
          </div>

          {/* expereince */}
        <ProfExperience />
        </div>
        {/* contact me */}
        <Contact />
      </div>
    </>
  );
};

export default Home;
