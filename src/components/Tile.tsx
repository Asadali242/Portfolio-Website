import { motion } from "framer-motion";

const Tile = () => {
  return (
    <motion.div
      whileHover={{
        zIndex: 1,
        backgroundColor: "#C5FF4A",
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
      className={`relative aspect-square bg-neutral-900`}
    >
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-neutral-700 rounded-full"></div>
    </motion.div>
  );
};

export default Tile;
