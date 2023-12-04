import Image from 'next/image';
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from 'react-icons/io5';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import { useState } from 'react';
/* Motion _______________________________________________ */
import { fadeInImage } from '@/utils/variants';
import { motion } from 'framer-motion';
// ──────────────────────────────────────────────────── 🟩 ─

const Slider = ({ reviews }) => {
  const [index, setIndex] = useState(0);
  const selectedPeron = reviews[index];
  const { name, job, image, text, id } = selectedPeron;

  /* Handlers _____________________________________________ */

  // ──────────────────────────────────────────────────── 🟩 ─
  // const checkNumber = (number) => {
  //   if (number > reviews.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return reviews.length - 1;
  //   }
  //   return number;
  // };

  // const nextItem = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = currentIndex + 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // const prevItem = () => {
  //   setIndex((currentIndex) => {
  //     const newIndex = currentIndex - 1;
  //     return checkNumber(newIndex);
  //   });
  // };
  // ──────────────────────────────────────────────────── 🟩 ─

  const nextPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviews.length;
      return newIndex;
    });
    // indexes    0  1  2  3   0  1  2  3 
    // newIndex   1  2  3  0   1  2  3  0
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1 + reviews.length) % reviews.length;
      return newIndex;
    });
    // indexes    0  1  2  3   0  1  2  3
    // newIndex   3  0  1  2   3  0  1  2 
  };

  //randomReview
  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    const newIndex = randomNumber % reviews.length;
    setIndex(newIndex);
    // setIndex(checkNumber(randomNumber));
  };

  return (
    <article
      key={id}
      className="back-shadow relative rounded-b-xl p-4 items-center flex flex-col h-fit "
    >
      {/* image */}
      <motion.div
        variants={fadeInImage}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        className="relative rounded-full  back-shadow"
      >
        <Image
          className="absolute right-2 top-1 rounded-full w-20 h-20 object-cover md:h-40 md:w-40 shadow-xl"
          src={image}
          width={300}
          height={300}
          alt={name}
        />
        <div className="rounded-full w-20 h-20 object-cover md:h-40 md:w-40 bg-green-300  "></div>
        <BsChatRightQuoteFill className="absolute top-2 -left-2 text-xl md:text-4xl text-green-600" />
      </motion.div>

      {/* title */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="title capitalize tracking-widest">{name}</h1>
        <h3 className="sub-title">{job}</h3>
      </div>
      <p className="text-center py-2  mx-4 text-xs md:text-sm md:mb-12">
        {text}
      </p>
      <div className="flex justify-center md:justify-between w-full inset-0  gap-2 items-center md:absolute px-4">
        <button>
          <IoArrowBackCircleSharp
            onClick={prevPerson}
            className="text-3xl text-green-600 hover-110 hover-shadow cursor-pointer"
          />
        </button>

        <button>
          <IoArrowForwardCircle
            onClick={nextPerson}
            className="text-3xl text-green-600 hover-110 hover-shadow cursor-pointer"
          />
        </button>
      </div>
      <button
        onClick={randomReview}
        className="btn-primary rounded-lg hover-105 mt-4 md:absolute z-20 bottom-0 mb-4"
      >
        Random
      </button>
    </article>
  );
};
export default Slider;
