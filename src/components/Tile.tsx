import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Tile = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('dark-mode');
    return savedMode === 'true' || (!savedMode && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  const controls = useAnimation();
  const [hovered, setHovered] = useState(false);

  // Update the dark mode state when the class on the HTML element changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hovered) {
      controls.start({
        backgroundColor: isDarkMode ? '#000000' : '#C5FF4A',
        transition: { duration: 0.1 },
      });
    } else {
      controls.start({
        backgroundColor: isDarkMode ? '#A3E635' : '#000000',
        transition: { duration: 1, ease: "easeOut" },
      });
    }
  }, [hovered, isDarkMode, controls]);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={controls}
      className="relative aspect-square bg-neutral-900 dark:bg-lime-400"
    >
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-neutral-700 dark:bg-white rounded-full"></div>
    </motion.div>
  );
};

export default Tile;
