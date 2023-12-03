'use client';
import Slider from '@/components/Slider';
import { reviews } from '@/context/data';
const Page = () => {
  //decide which peron to display

  return (
    <div className=" h-fit md:w-80 w-50 ">
      <div className="back-shadow rounded-t-xl flex items-center p-2 justify-center mb-2 text-2xl font-bold ">
        Reviews Section
      </div>
      <Slider reviews={reviews} />
    </div>
  );
};
export default Page;
