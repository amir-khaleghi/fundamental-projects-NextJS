'use client';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from '@/context/actions';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeInImage } from '@/lib/variants';
import Form from './Form';
import { useReducer } from 'react';
import reducer from '@/context/reducer';
import { birthdayBuddy } from '@/lib/data';
import { CgProfile } from 'react-icons/cg';
import { FaWindowClose } from 'react-icons/fa';

const List = () => {
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
    //   variants={fadeInImage}
    //   initial="initial"
    //   whileInView="animate"
    //   viewport={{
    //     once: true,
    //   }}
    // >
    <div className=" back-shadow rounded-xl w-full h-full ">
      {/* title */}
      <h3 className="bg-base-yellow  rounded-t-lg p-4 text-center">
        <span>#0{state.friends.length}</span> Friends Birthday (List)
      </h3>
      <Form dispatch={dispatch} />

      {/* container */}
      <div className="flex gap-4 flex-col p-4 ">
        {state.friends.map((birth) => {
          const { id, img, name, age } = birth;
          return (
            // rows
            <div
              className="relative justify-between flex items-center gap-8 rounded-lg border-y hover:rotate-1 cursor-pointer p-2 pr-10  hover-shadow"
              key={name}
            >
              <Link
                href={`birthday-buddy/${name}`}
                className="absolute inset-0"
              />
              {img ? (
                <Image
                  className="md:w-40 w-20 h-20 rounded-full md:h-40 object-cover z-2"
                  src={img}
                  alt={name}
                  width={400} // Adjust the width accordingly
                  height={400} // Adjust the height accordingly
                />
              ) : (
                <div className=" ">
                  <CgProfile className=" h-20  w-full md:h-40" />
                </div>
              )}
              <div className="mt-4">
                <p className="text-lg font-semibold">{name}</p>
                <p>
                  <span>{age}</span> Years
                </p>
              </div>
              <button className=" z-10 absolute right-0 -top-0.5 ">
                <FaWindowClose
                  onClick={() => removeItem(id)}
                  className="text-3xl hover:text-red-500   "
                />
              </button>
            </div>
          );
        })}
      </div>

      <div className="w-full gap-4  flex ">
        <button
          onClick={clearList}
          className="btn-secondary hover:bg-red-300 transition duration-200 w-full rounded-tr-lg"
        >
          Clear List
        </button>
        <button
          onClick={resetList}
          className="btn-secondary rounded-tl-lg hover:bg-red-300 transition duration-200 w-full"
        >
          Reset List
        </button>
      </div>
    </div>
    // </motion.div>
  );
};
export default List;
