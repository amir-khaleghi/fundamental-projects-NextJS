'use client';
import { shortList, list, longList } from '@/context/data';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from 'react-icons/io5';
import { BsChatRightQuoteFill } from 'react-icons/bs';

const Carousel = () => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  /* Handlers ___________________________________________ */
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  /* Autoslide __________________________________________ */

  useEffect(() => {
    let sliderId = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => {
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */

  return (
    <section className="relative md:w-1/2 w-full ">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="back-shadow  absolute rounded-b-xl items-center flex flex-col h-fit container  "
            key={id}
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              // visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
          >
            <Image
              className="rounded-full w-20 h-20 object-cover md:h-40 md:w-40 shadow-xl  border-green-500 border-4"
              src={image}
              alt={name}
              width={200}
              height={200}
            />
            <h5 className="text-xl font-bold p-2 text-green-600 capitalize">
              {name}
            </h5>

            <p className="text-lg font-semibold pb-2">{title}</p>
            <p className=" text-center w-2/3">{quote}</p>
            <div className="flex justify-center md:justify-between w-full inset-0  gap-2 items-center md:absolute  p-4">
              <button>
                <IoArrowBackCircleSharp
                  onClick={() => prevSlide()}
                  className="text-3xl text-green-600 hover-110 hover-shadow cursor-pointer"
                />
              </button>

              <button>
                <IoArrowForwardCircle
                  onClick={() => nextSlide()}
                  className="text-3xl text-green-600 hover-110 hover-shadow cursor-pointer"
                />
              </button>
            </div>
            <BsChatRightQuoteFill className="mt-4 text-4xl text-green-500" />
          </article>
        );
      })}
    </section>
  );
};
export default Carousel;
