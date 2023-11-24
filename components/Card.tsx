'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@/lib/variants';
const Card = ({ props }) => {
  return (
    <motion.div
      variants={fadeInVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: false,
      }}
    >
      <div className=" back-shadow w-full h-full ">
        {/* title */}
        <h3 className="bg-red-400 rounded-t-lg p-4 text-center">
          <span>#0{props.length} </span> Friends Birthday is Today (Card)
        </h3>
        {/* container */}
        <div className="grid md:grid-cols-2  lg:grid-cols-3 items-center justify-center gap-4 flex-wrap p-4 text-center bg-blue-50">
          {props.map((birth) => {
            const { img, name, age } = birth;
            return (
              // rows
              <div
                className="relative justify-between flex flex-col items-center gap-8 rounded-lg border-y cursor-pointer p-2  hover-105 hover-shadow bg-white"
                key={name}
              >
                <Link
                  href={`birthday-buddy/${name}`}
                  className="absolute inset-0"
                />
                <Image
                  className="md:w-40 w-20 h-20 rounded-full md:h-40 object-cover"
                  src={img}
                  alt={name}
                />
                <div>
                  <h4>{name}</h4>
                  <p>
                    <span>{age}</span> Years
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};
export default Card;
