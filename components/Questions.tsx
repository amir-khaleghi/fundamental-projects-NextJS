'use client';

import { questions } from '@/context/data';
import { useState } from 'react';
import Question from './Question';

const Questions = () => {
  const [data, setData] = useState(questions);
  const [activeId, setActiveId] = useState(null);

  /* Handler ____________________________________________ */
  const toggleQuestion = (id) => {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  };

  return (
    <div className="back-shadow flex flex-col gap-4 p-8 bg-red-400 rounded-xl md:w-[500px]  ">
      {data.map((question) => {
        return (
          <Question
            activeId={activeId}
            toggleQuestion={toggleQuestion}
            key={question.id}
            {...question}
          />
        );
      })}
    </div>
  );
};
export default Questions;
