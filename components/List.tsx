'use client';

import Image from 'next/image';
import Link from 'next/link';

import Form from './Form';
import { CgProfile } from 'react-icons/cg';
import { FaWindowClose } from 'react-icons/fa';
import useCustomReducer from '@/context/useCustomReducer';
import useHandlers from '@/context/useHandlers';
import TitleTag from './TitleTag';
const List = () => {
  /* Usereducer ___________________________________________ */
  const { state, dispatch } = useCustomReducer();

  /* Handlers ___________________________________________ */
  const { removeItem, resetList, clearList } = useHandlers({ dispatch });

  return (
    <div className="relative back-shadow rounded-xl w-full h-full ">
      {/* title */}
      <TitleTag
        state={state}
        text={'Friends Birthday (Card)'}
      />

      <Form dispatch={dispatch} />

      {/* container */}
      <div className="flex gap-4 flex-col p-4 ">
        {state.friends.map((birth) => {
          const { id, img, name, age } = birth;

          return (
            // rows
            <div
              className="relative border justify-between flex items-center  rounded-lg border-y hover:rotate-1 cursor-pointer pr-2  hover-shadow"
              key={name}
            >
              {img && (
                <Link
                  href={`birthday-buddy/${id}`}
                  className="absolute inset-0"
                />
              )}
              {img ? (
                <Image
                  className="md:w-40 h-20 w-20  md:h-40 object-cover "
                  src={img}
                  alt={name}
                  width={400}
                  height={400}
                />
              ) : (
                <div className=" ">
                  <CgProfile className=" h-20  w-full md:h-40" />
                </div>
              )}
              <div className="mt-4  text-center text-xs ">
                <p className=" text-sm md:text-lg font-semibold mb-2">{name}</p>
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
          className="btn-danger"
        >
          Clear List
        </button>
        <button
          onClick={resetList}
          className="btn-secondary"
        >
          Reset List
        </button>
      </div>
    </div>
  );
};
export default List;
