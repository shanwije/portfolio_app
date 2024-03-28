import React from "react";
import heroImg from "./../../assets/hero.jpg";
import ProfExperience from '../../components/ProfExpereince';

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
        <div className="mx-auto max-w-screen-md mt-8 p-4 bg-white shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-5">Contact Me</h2>

          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Your subject"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm"
                placeholder="Your message"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Home;
