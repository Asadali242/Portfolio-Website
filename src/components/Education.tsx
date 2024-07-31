import { motion } from "framer-motion";
import Tile from "./Tile";
import logo from "../assets/images/image4.png";

const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative w-full flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full grid grid-cols-11 lg:grid-cols-20 h-full overflow-y-clip z-0">
        {Array.from({ length: 20 * 12 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="bg-slate-100 text-slate-900 shadow-md rounded-lg p-6 mx-auto max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-4">
              <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                <h3 className="text-xl font-semibold mb-2">
                  B.S. Computer Science | Minor in Mathematics
                </h3>
                <div className="flex items-center mb-2">
                  <img
                    src={logo}
                    alt="Drexel University Logo"
                    className="w-11 h-11 mr-2"
                  />
                  <p className="text-lg font-medium">
                    Drexel University College of Computing & Informatics
                  </p>
                </div>
                <p className="text-md text-gray-600 dark:text-gray-400 mb-2">
                  Philadelphia, PA
                </p>
                <p className="text-md mb-1">
                  • Drexel Founder’s Scholarship Recipient – Merit scholarship
                  to study at Drexel University.
                </p>
                <p className="text-md mb-1">
                  • President’s List – Drexel University, College of Computing
                  and Informatics - Fall 2023 – Spring 2024
                </p>
                <p className="text-md mb-2">
                  • Dean’s List – Drexel University, College of Computing and
                  Informatics - Fall 2022 – Winter 2023
                </p>
                <p className="text-md font-semibold">
                  September 2019 – June 2024
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
