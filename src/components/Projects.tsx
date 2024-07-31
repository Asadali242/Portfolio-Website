import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { projectsData } from "../lib/data";
import EncryptButton from "./Button";
import { FaGithub } from "react-icons/fa";
import Tile from "./Tile";

type ProjectProps = (typeof projectsData)[number];

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  tags,
  githubLink,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, opacity }}
      className="group mb-8 last:mb-0 transition-transform duration-500 w-full max-w-md mx-auto"
    >
      <section className="bg-neutral-100 border border-neutral-300 rounded-lg overflow-hidden relative shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="p-6 flex flex-col h-full">
          <h3 className="text-xl font-semibold text-neutral-900">{title}</h3>
          <p className="mt-2 text-neutral-700 text-sm">{description}</p>
          <ul className="flex flex-wrap mt-3 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-neutral-800 text-neutral-50 px-3 py-1 text-xs uppercase rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
          {githubLink && (
            <EncryptButton
              text="View on GitHub"
              url={githubLink}
              className="mt-4 w-full"
              icon={<FaGithub />}
            />
          )}
        </div>
      </section>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full relative min-h-screen flex items-center justify-center scroll-mt-28 lg:pb-28 pt-8"
    >
      <div className="absolute inset-0 w-full h-full grid grid-cols-11 lg:grid-cols-20 overflow-hidden z-0">
        {Array.from({ length: 20 * 24 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl font-bold my-6 text-center">My Projects</h2>
        <div className="flex flex-col items-center gap-8">
          {projectsData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
