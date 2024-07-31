import React, { useEffect, useState, useRef } from "react";
import AboutImage from "../assets/images/image.jpeg";
import { motion } from "framer-motion";
import EncryptButton from "./Button";
import Pdf from "../assets/Asad_Mehboob_Ali_Resume.pdf";
import { BsArrowRight } from "react-icons/bs";
import Tile from "./Tile";

const About: React.FC = () => {
  const codeSnippet =
    '#include <iostream>\nint main() {\n  std::cout << "Profile_Picture" << std::endl;\n  return 0;\n}';
  const [displayedText, setDisplayedText] = useState<string>("");
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [shouldShowText, setShouldShowText] = useState<boolean>(true);
  const [showImage, setShowImage] = useState<boolean>(false);
  const [fade, setFade] = useState<"in" | "out" | null>(null); // State to control fade direction
  const [isAnimationStarted, setIsAnimationStarted] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsAnimationStarted(true);
          observer.disconnect();
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAnimationStarted) {
      const typingInterval = setInterval(() => {
        if (currentIndex < codeSnippet.length) {
          setDisplayedText((prev) => prev + codeSnippet.charAt(currentIndex));
          setCurrentIndex((prev) => prev + 1);
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setShouldShowText(false);
            setShowImage(true);
            setFade("in"); // Start fade-in effect
            setTimeout(() => {
              setFade("out"); // Start fade-out effect
              setTimeout(() => {
                setCurrentIndex(0);
                setDisplayedText("");
                setShouldShowText(true);
                setShowImage(false);
                setFade(null); // Reset fade state
                setIsAnimationStarted(true); // Restart animation
              }, 1000); // Duration of fade-out effect
            }, 3000); // Time the image is displayed before fading out
          }, 1000); // Delay before showing the image
        }
      }, 50);

      return () => clearInterval(typingInterval);
    }
  }, [isAnimationStarted, currentIndex]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full relative min-h-screen flex items-center justify-center scroll-mt-24 pb-28 pt-10 lg:pt-0"
    >
      <div className="absolute inset-0 w-full h-full grid grid-cols-11 lg:grid-cols-20 overflow-hidden z-0">
        {Array.from({ length: 480 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
      <div className="relative z-10 container px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 gap-0">
          {showImage && (
            <motion.div
              className="w-full flex justify-center mb-6 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: fade === "out" ? 0 : 1 }} // Control fade-in and fade-out
              transition={{
                duration: fade === "out" ? 1 : 1.5,
                ease: "easeInOut",
              }}
            >
              <motion.img
                src={AboutImage}
                alt="A professional portrait of the developer"
                className="w-48 md:w-60 object-cover rounded-md shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: fade === "out" ? 0 : 1 }} // Control fade-in and fade-out
                transition={{
                  duration: fade === "out" ? 1 : 1.5,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          )}
          {shouldShowText && (
            <div className="flex justify-center items-center mb-6">
              <p className="whitespace-pre-line text-lime-600 md:text-2xl ">
                {displayedText}
              </p>
            </div>
          )}
          <motion.div
            className="w-full md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed pb-8">
              I am a Computer Science graduate with a deep passion for
              harnessing the power of AI and machine learning to tackle global
              challenges. Driven by a relentless quest for excellence, I am
              constantly enhancing my programming and analytical skills to
              innovate and create impactful solutions. My focus lies in applying
              advanced technologies to address real-world problems, from
              environmental sustainability to healthcare improvements. I am
              seeking opportunities to collaborate on projects that strive for a
              positive global impact. Let’s connect and make a difference
              together.
            </p>
            <EncryptButton text="Resume" url={Pdf} icon={<BsArrowRight />} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
