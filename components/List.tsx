'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInVariants } from '@/lib/variants';
const List = ({ props }) => {
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
        <h3 className="bg-base-yellow  rounded-t-lg p-4 text-center">
          <span>#0{props.length}</span> Friends Birthday is Today (List)
        </h3>
        {/* container */}
        <div className="flex gap-4 flex-col p-4 ">
          {props.map((birth) => {
            const { img, name, age } = birth;
            return (
              // rows
              <div
                className="relative justify-between flex items-center gap-8 rounded-lg border-y cursor-pointer p-2 pr-10 hover-105 hover-shadow"
                key={name}
              >
                <Link
                  href={`birthday-buddy/${name}`}
                  className="absolute inset-0"
                />
                <Image
                  className="w-20 rounded-full h-20 object-cover"
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
export default List;
