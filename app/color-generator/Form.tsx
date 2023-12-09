'use client';
import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');

  /* Handler ____________________________________________ */
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <section className="pb-4">
      <form
        action=""
        onSubmit={handleSubmit}
      >
        <div className="flex items-center flex-col md:flex-row">
          <label
            className="text-2xl font-semibold md:pr-4"
            htmlFor="color"
          >
            Color Generator
          </label>
          <input
            className="h-10 w-10 mr-2 p-0 "
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div className="md:flex">
            <input
              className="md:rounded-r-none shadow-lg  w-full"
              id="color"
              type="text"
              value={color}
              placeholder="#f15025"
              onChange={(e) => setColor(e.target.value)}
            />
            <button
              className="hover-105 bg-green-300 shadow-lg border md:rounded-l-none rounded-lg w-full mt-2"
              style={{ background: color }}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};
export default Form;
