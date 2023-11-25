import { TiArrowBack } from 'react-icons/ti';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="shadowAnimation relative w-fit h-fit md:w-[800px] md:h-[800px] flex items-center gap-8 rounded-lg border-y  back-shadow">
      <div className=" shadowAnimation absolute text-4xl left-4 rounded-full  back-shadow top-4 cursor-pointer hover-105">
        <div className="w-8 h-8 shadowAnimation"></div>
      </div>
      <div className="absolute text-white text-center  backdrop-blur-xl w-full bottom-10 md:bottom-20 left-0  ">
        <h4 className="text-xl md:text-4xl "></h4>
        <h4>
          <span></span>
        </h4>
      </div>
    </div>
  );
}
