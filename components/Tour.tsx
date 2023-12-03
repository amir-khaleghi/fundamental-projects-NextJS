import Image from 'next/image';
import { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  // console.log(info.substring(0, 20));

  return (
    <div
      className="relative back-shadow rounded-lg flex flex-col  w-full h-fit object-cover items-center "
      key={id}
    >
      <Image
        className="rounded-t-lg h-40 w-full object-cover"
        width={300}
        height={300}
        src={image}
        alt={name}
      />

      <h3 className="p-2 flex items-center justify-center text-center font-bold  w-full h-20 backdrop-blur-xl bg-green-50">
        {name}
      </h3>
      <p className="p-4 text-center">
        {readMore ? info : `${info.substring(0, 100)}`}
        <button
          onClick={() => {
            setReadMore(!readMore);
          }}
          className=" text-green-500 p-2  hover:bg-slate-100  "
        >
          {readMore ? 'show less' : '...read more'}
        </button>
      </p>

      <button
        onClick={() => removeTour(id)}
        className="btn-secondary  hover:bg-red-300 "
      >
        Not Interested
      </button>
      <p className="text-white absolute right-0 top-0 bg-green-500 rounded-tr-lg p-1 rounded-bl-lg">
        $ {price}
      </p>
    </div>
  );
};
export default Tour;
