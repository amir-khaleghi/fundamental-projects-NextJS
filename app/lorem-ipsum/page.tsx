'use client';

import { text } from '@/context/data';
import { useState } from 'react';

const page = () => {
  const [count, setCount] = useState(1);
  return (
    <section className="container">
      <h1 className="text-4xl font-bold">Try the Lorem Ipsum:</h1>
      <form
        className="flex "
        action=""
      >
        <label
          className="text-2xl"
          htmlFor="amount"
        >
          Paragraphs:
        </label>
        <input
          type="number"
          className="border raounded-lg"
          id="amount"
          value={count}
          name="amount"
          max={8}
          min={1}
          onChange={(e) => setCount(e.target.value)}
        />
      </form>
    </section>
  );
};
export default page;
