import { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';
/* Motion _______________________________________________ */
import { fadeInImage } from '@/utils/variants';
import { motion } from 'framer-motion';
const Question = ({ title, info, id, activeId, toggleQuestion }) => {
  const isActive = id === activeId;
  return (
    <div className="container flex flex-col gap-2 ">
      <div className="flex justify-between relative">
        <h1 className="font-bold text-xs md:text-lg mr-6">{title}</h1>
        {!isActive ? (
          <FaPlusCircle
            onClick={() => toggleQuestion(id)}
            className="text-xl absolute -right-5 hover:rotate-6 transform transition-all hover-110 cursor-pointer text-green-600"
          />
        ) : (
          <FaMinusCircle
            onClick={() => toggleQuestion(id)}
            className="text-xl absolute -right-5 hover:rotate-2 transition hover-110 cursor-pointer  text-red-600"
          />
        )}
      </div>
      {isActive && (
        <motion.div
          variants={fadeInImage}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          className="text-sm md:text-lg"
        >
          {info}
        </motion.div>
      )}
    </div>
  );
};
export default Question;
