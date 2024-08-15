import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Animation } from "./Animation";
import Tile from "./Tile";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  // Update the dark mode state when the class on the HTML element changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="home"
      className="w-full relative min-h-screen flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full grid grid-cols-11 lg:grid-cols-20 h-screen overflow-y-clip z-0">
        {Array.from({ length: 20 * 12 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>

      <div className="absolute inset-0 flex flex-col md:flex-row gap-10 items-center justify-center z-10 pointer-events-none p-4 md:p-8 pt-40 lg:pt-0">
        <div className="flex flex-col gap-5 items-center md:items-start justify-center pointer-events-auto text-center md:text-left lg:pl-11">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-bold uppercase font-display tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem] p-2 rounded dark:text-neutral-900"
          >
            Hi, I'm Asad Mehboob Ali.
          </motion.h1>
          <div className={`text-2xl ${isDarkMode ? 'text-black' : 'text-lime-400'}`}>
            <TypeAnimation
              sequence={[
                "I'm a CS graduate from Drexel.",
                1000,
                "Nice to meet you!",
                1000,
                "Actively seeking full-time employment!",
                1000,
                "Check out my LinkedIn using the link below.",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center md:justify-start items-center gap-5">
            <p className={`text-xl ${isDarkMode ? 'text-black' : 'text-white'}`}>
            Say hello to <strong>DoubleA</strong>, my personal chatbot! Click the icon at the bottom right and start the conversation.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <Animation />
        </div>
      </div>
    </div>
  );
};

export default Hero;
