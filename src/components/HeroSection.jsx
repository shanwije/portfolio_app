import heroImg from "../assets/hero.jpg";

const HeroSection = ({desc}) => {
    return (
        <section>
            {/* Hero content */}
            <div className="flex mx-auto px-4 md:grid md:grid-cols-5">
                <div className="hidden sm:block flex-col col-span-2">
                    <img
                        className="w-full h-auto max-w-72 rounded-full justify-center items-center my-5 mx-auto"
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
    );
};

export default HeroSection;
