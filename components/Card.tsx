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
    <div className="relative  back-shadow w-full h-full rounded-2xl   rounded-tl-none    flex flex-col ">
      {/* title */}
      <TitleTag
        state={state}
        text={'Friends Birthday (Card)'}
      />
      {/* form that use memo */}
      <Form dispatch={dispatch} />
      {/* container */}
      <div className=" card">
        {state.friends.map((birth) => {
          const { id, img, name, age } = birth;

          return (
            // rows
            <div
              className="card-row"
              key={id}
            >
              {img && (
                <Link
                  href={`birthday-buddy/${id}`}
                  className="absolute inset-0"
                />
              )}
              {img ? (
                <Image
                  className="card-img"
                  src={img}
                  alt={name}
                  width={400}
                  height={400}
                />
              ) : (
                <div>
                  <CgProfile className=" card-thumbnail" />
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
