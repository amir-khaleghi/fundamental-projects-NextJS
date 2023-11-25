'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaWindowClose } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

import { motion } from 'framer-motion';
import { fadeInImage } from '@/lib/variants';
import { useReducer, useState } from 'react';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from '@/context/actions';
import { birthdayBuddy } from '@/lib/data';

import Form from './Form';
import reducer from '@/context/reducer';

const Card = () => {
  /* Usereducer ___________________________________________ */

  const [state, dispatch] = useReducer(reducer, { friends: birthdayBuddy });

  /* Handlers ___________________________________________ */
  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const resetList = () => {
    dispatch({ type: RESET_LIST });
  };
  const clearList = () => {
    dispatch({ type: CLEAR_LIST });
  };

  return (
    // <motion.div
    //   className="rounded-xl"
    //   variants={fadeInImage}
    //   initial="initial"
    //   whileInView="animate"
    //   viewport={{
    //     once: true,
    //   }}
    // >
    <div className="bg-blue-50 back-shadow w-full h-full  rounded-2xl  relative  flex flex-col">
      {/* title */}
      <h3 className="bg-red-400 text-xl font-semibold rounded-t-lg p-4 text-center ">
        <span>#0{state.friends.length} </span> Friends Birthday (Card)
      </h3>
      {/* form that use memo */}
      <Form dispatch={dispatch} />
      {/* container */}
      <div className=" grid md:grid-cols-2 rounded-b-xl  lg:grid-cols-3 items-center justify-center gap-4 flex-wrap p-4 text-center  ">
        {state.friends.map((birth) => {
          const { id, img, name, age } = birth;
          return (
            // rows
            <div
              className="relative justify-between flex flex-col items-center gap-8 rounded-lg border-y cursor-pointer p-2   hover-shadow bg-white "
              key={id}
            >
              <Link
                href={`birthday-buddy/${name}`}
                className="absolute inset-0 "
              />
              {img ? (
                <Image
                  className="md:w-40 w-full h-full rounded-full md:h-40 object-cover z-2"
                  src={img}
                  alt={name}
                  width={400} // Adjust the width accordingly
                  height={400} // Adjust the height accordingly
                />
              ) : (
                <div className=" ">
                  <CgProfile className=" h-40  w-full md:h-40" />
                </div>
              )}

              <div>
                <p className="text-lg font-semibold">{name}</p>
                <p>
                  <span>{age}</span> Years
                </p>
              </div>
              <button className=" z-10 absolute right-0 -top-0.5">
                <FaWindowClose
                  onClick={() => removeItem(id)}
                  className="text-3xl hover:text-red-500  "
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="w-full gap-4  flex ">
        <button
          onClick={clearList}
          className="btn-secondary rounded-tr-lg hover:bg-red-300 transition duration-200 w-full"
        >
          Clear List
        </button>
        <button
          onClick={resetList}
          className="btn-secondary  hover:bg-red-300 transition duration-200 w-full rounded-tl-lg"
        >
          Reset List
        </button>
      </div>
    </div>
    // </motion.div>
  );
};
export default Card;
