'use client';
// next
// ──────────────────────────────────────────────────── 🟩 ─
import Image from 'next/image';
import Link from 'next/link';

// icons
// ──────────────────────────────────────────────────── 🟩 ─
import { FaWindowClose } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

// comp
// ──────────────────────────────────────────────────── 🟩 ─
import Form from './Form';
import TitleTag from './TitleTag';

// hooks
// ──────────────────────────────────────────────────── 🟩 ─
import useCustomReducer from '@/context/useCustomReducer';
import useHandlers from '@/context/useHandlers';

/* ■■■■■■■■■■■■■■■■■■■■■■ Component ■■■■■■■■■■■■■■■■■■■■■ */
const Card = () => {
  /* Hooks ______________________________________________ */
  //useReducer
  const { state, dispatch } = useCustomReducer();
  // handlers
  const { removeItem, resetList, clearList } = useHandlers({ dispatch });

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className="relative bg-blue-50 back-shadow w-full h-full rounded-2xl   rounded-tl-none    flex flex-col ">
      {/* title */}
      <TitleTag
        state={state}
        text={'Friends Birthday (Card)'}
      />
      {/* form that use memo */}
      <Form dispatch={dispatch} />
      {/* container */}
      <div className=" grid md:grid-cols-2 rounded-b-xl  lg:grid-cols-3 items-center justify-center gap-4 flex-wrap p-4 text-center  ">
        {state.friends.map((birth) => {
          const { id, img, name, age } = birth;

          return (
            // rows
            <div
              className="relative justify-between flex flex-col items-center gap-8 rounded-lg border-y hover:rotate-1 cursor-pointer border h-full pb-4 hover-shadow bg-white "
              key={id}
            >
              <Link
                href={`birthday-buddy/${id}`}
                className="absolute inset-0 "
              />
              {img ? (
                <Image
                  className="rounded-t-lg md:mt-2 md:w-40 w-full h-full md:rounded-full md:h-40 object-cover z-2"
                  src={img}
                  alt={name}
                  width={400}
                  height={400}
                />
              ) : (
                <div className=" ">
                  <CgProfile className=" h-40  w-full md:h-40" />
                </div>
              )}

              <div>
                <p className="text-lg font-semibold">{name}</p>
                {age && (
                  <p>
                    <span className="text-back-yellow">{age}</span> Years
                  </p>
                )}
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

      <div className="w-full gap-4 items-center justify-center mb-2 flex ">
        <button
          onClick={clearList}
          className="btn-danger"
        >
          Clear List
        </button>
        <button
          onClick={resetList}
          className="btn-secondary "
        >
          Reset List
        </button>
      </div>
    </div>
  );
};
export default Card;
