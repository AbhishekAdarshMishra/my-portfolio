import Abhi from '/assets/images/abhishek.png';
import { motion } from 'framer-motion';

const Photo = () => {
  return (
    <div className="w-full h-full relative flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeIn', delay: 1 }}
        className="relative w-40 h-40"
      >
        <motion.svg
          className="absolute inset-0 w-full h-full"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 506 506"
        >
          <motion.circle
            cx="256"
            cy="256"
            r="256"
            fill="none"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 128 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.svg>

        <div className="absolute inset-0 w-40 h-40 rounded-full overflow-hidden">
          <img src={Abhi} className="object-cover w-40 h-40" />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
