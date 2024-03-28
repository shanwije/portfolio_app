import {useContext} from "react";
import ProfExperience from "../components/ProfExperience";
import Contact from "../components/Contact";
import NavigationContext from "../context/NavigationContext";
import HeroSection from "../components/HeroSection"; // Import the new component

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
                        <HeroSection desc={desc}/>
                    </section>
                    <section ref={navItems[1].ref}>
                        <ProfExperience/>
                    </section>
                    <section ref={navItems[2].ref}>
                        <Contact/>
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;