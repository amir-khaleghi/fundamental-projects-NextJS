'use client';
import Tours from '@/components/Tours';

const Page = () => {
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div className="container flex flex-col  items-center gap-8">
      <h1 className="title ">Our Tours</h1>
      <Tours />
    </div>
  );
};
export default Page;
