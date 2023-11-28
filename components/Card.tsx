'use client';
// react
import { useEffect, useState } from 'react';

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
import { clearList, deletePerson, resetList } from '@/utils/actions';

/* ■■■■■■■■■■■■■■■■■■■■■■ Component ■■■■■■■■■■■■■■■■■■■■■ */
const Card = ({ persons }) => {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(false);
  }, [persons]);
  // handlers
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className="relative back-shadow w-full h-full rounded-2xl   rounded-tl-none flex flex-col">
      {/* title */}
      <TitleTag
        persons={persons}
        text={'Friends Birthday (Card)'}
      />
      {/* form that use memo */}
      <Form />
      {/* container */}
      {isLoading && (
        <div className="loader-wrapper ">
          <div className="loader"></div>
        </div>
      )}
      <div className="card">
        {!isLoading &&
          persons.map((person) => {
            const { id, img, name, age } = person;

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
                    className="card-img back-shadow"
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
                    onClick={() => {
                      deletePerson(id);
                    }}
                    className="text-3xl hover:text-red-500  "
                  />
                </button>
              </div>
            );
          })}
      </div>

      <div className="w-full gap-4 items-center justify-center mb-2 flex ">
        <button
          onClick={() => {
            clearList();
            setIsLoading(false);
          }}
          className="btn-danger"
        >
          Clear List
        </button>
        <button
          onClick={() => {
            resetList();
            setIsLoading(true);
          }}
          className="btn-secondary "
        >
          Reset List
        </button>
      </div>
    </div>
  );
};
export default Card;
