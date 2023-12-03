'use client';
import Tours from '@/components/Tours';

const Page = () => {
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className=" flex flex-col h-full container items-center gap-8">
      <h1 className="title ">Our Tours</h1>
      <Tours />
    </div>
  );
};
export default Page;
