'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { IoArrowBackCircleSharp, IoArrowForwardCircle } from 'react-icons/io5';
import { BsChatRightQuoteFill } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component } from 'react';
import Slider from 'react-slick';
import { list } from '@/context/data';

const SimpleSlider = () => {
  const [people, setPeople] = useState(list);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    pauseOnHover: true,
    dotsClass: 'slick-dots slick-thumb',
  };
  return (
    <section className="slick-container  w-[220px]  md:w-[400px] back-shadow rounded-xl  cursor-pointer">
      <h2 className="mb-10 text-4xl font-semibold pt-4">Our Team</h2>
      <Slider {...settings}>
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <div className="flex flex-col items-center w-fit">
                <Image
                  className="rounded-full w-20 h-20 object-cover md:h-40 md:w-40 shadow-xl  border-green-500 border-4  "
                  src={image}
                  alt={name}
                  width={200}
                  height={200}
                />
                <h5 className="text-xl font-bold p-2 text-green-600 capitalize">
                  {name}
                </h5>
                <p className="text-lg font-semibold pb-2">{title}</p>
                <p className=" text-center p-4">{quote}</p>
              </div>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};
export default SimpleSlider;
