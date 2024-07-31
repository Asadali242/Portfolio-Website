import Tile from "./Tile";
import { skillsData } from "../lib/data";
import { motion } from "framer-motion";
import Button from "./Button";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      duration: 0.5,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full relative min-h-screen flex items-center justify-center pt-4 pb-8 mb-6"
    >
      <div className="absolute inset-0 w-full grid grid-cols-11 lg:grid-cols-20 h-full overflow-y-clip z-0">
        {Array.from({ length: 20 * 12 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <h3 className="text-3xl font-semibold capitalize mb-8 md:mb-12">
          My Skills
        </h3>
        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 text-base text-neutral-800 max-w-full sm:max-w-3xl">
          {skillsData.map((skill, index) => (
            <motion.li
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              custom={index}
            >
              <Button text={skill} className="cursor-default" />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
