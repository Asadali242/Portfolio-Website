import { motion } from "framer-motion";
import { links } from "../lib/data";
import { BsArrowRight } from "react-icons/bs";
import Button from "./Button";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[9rem] w-full shadow-black/[0.03] backdrop-blur-[0.5rem] lg:backdrop-blur-0 sm:top-7 sm:h-[8rem] sm:w-[36rem] "
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-6 text-base font-semibold sm:w-[initial] sm:flex-nowrap sm:gap-5 ">
          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Button
                text={link.name}
                url={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 bg-neutral-800 text-white rounded-lg shadow-md hover:bg-neutral-700 transition duration-300 ease-in-out gap-4"
                icon={
                  <BsArrowRight className="ml-2 h-5 w-5 text-neutral-400 group-hover:text-neutral-300 " />
                }
              />
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
