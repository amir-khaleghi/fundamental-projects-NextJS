'use client';
import { url } from '@/constants/index';
import { useEffect, useState } from 'react';
const Page = () => {
  const [tours, setTour] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      console.log(tours);
      setTour(tours);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container w-fit  h-full gap-4  grid grid-cols-3">
      {tours.map((tour) => {
        return (
          <div
            className="back-shadow rounded-lg p-2 hover-105 "
            key={tour.id}
          >
            <Image></Image>

            <p>{tour.name}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Page;
