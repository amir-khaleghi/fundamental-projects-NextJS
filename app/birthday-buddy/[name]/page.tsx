'use client';
import { birthdayBuddy } from '@/context/data';
import Image from 'next/image';
import Link from 'next/link';
import { TiArrowBack } from 'react-icons/ti';
// ──────────────────────────────────────────────────── 🟩 ─
import { fadeInImage } from '@/utils/variants';
import { motion } from 'framer-motion';
// ──────────────────────────────────────────────────── 🟩 ─

const Page = ({ params }) => {
  // const decodedName = decodeURIComponent(params.name);

  const selectedPerson = birthdayBuddy.filter((birth) => {
    return birth.id === params.name;
  });
  const [{ img, name, age }] = selectedPerson;
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <motion.div
      variants={fadeInImage}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div
        className="relative w-fit flex items-center gap-8 rounded-lg border-y  back-shadow hover-shadow"
        key={name}
      >
        <Image
          className=" rounded-lg  object-cover md:h-[780px]"
          src={img}
          alt={name}
        />
        <div className="absolute text-4xl left-4 rounded-full hover:bg-base-yellow back-shadow top-4 cursor-pointer hover-105">
          <Link href="/birthday-buddy">
            <TiArrowBack />
          </Link>
        </div>
        <div className="absolute text-white text-center  backdrop-blur-xl w-full bottom-10 md:bottom-20 left-0  ">
          <h4 className="text-xl md:text-4xl mb-4 ">{name}</h4>
          <h4>
            <span className="text-black text-back-green">{age}</span> Years
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
