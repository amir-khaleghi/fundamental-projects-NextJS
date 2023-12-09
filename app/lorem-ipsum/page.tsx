'use client';

import { data } from '@/context/data';
import { nanoid } from 'nanoid';
import { FormEvent, useState } from 'react';

interface DataType {
  data: string[];
}

const Page: React.FC<DataType> = () => {
  /* State ______________________________________________ */
  const [count, setCount] = useState(1);
  const [text, setText] = useState<string[]>([]);
  /* Handler ____________________________________________ */
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setText(data.slice(0, count));
  };
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <section className="container w-2/3">
      <h1 className="text-4xl font-bold">Try the Lorem Ipsum:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex items-center  pt-4"
        action=""
      >
        <label
          className="text-2xl pr-4"
          htmlFor="amount"
        >
          Paragraphs:
        </label>
        <div>
          <input
            type="number"
            className="border rounded-r-none text-center  shadow-lg"
            id="amount"
            value={count}
            name="amount"
            max={8}
            min={1}
            onChange={(e) => setCount(parseInt(e.target.value))}
          />
          <button
            type="submit"
            className="btn-primary rounded-r-lg"
          >
            Generate
          </button>
        </div>
      </form>
      <article>
        {text.map((item: String) => {
          return (
            <p
              className="border-b py-4 font-serif"
              key={nanoid()}
            >
              <span className="text-6xl font-bold font-serif">{item[0]}</span>
              {item.slice(1)}
            </p>
          );
        })}
      </article>
    </section>
  );
};
export default Page;
