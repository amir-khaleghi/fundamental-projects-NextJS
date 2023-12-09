'use client';
import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Page = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  /* Add Color ____________________________________________ */
  const addColor = (color) => {
    // console.log(color );
    try {
      const newColor = new Values(`${color}`).all(10);
      setColors(newColor);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <main className="container">
      <ToastContainer position="top-center" />
      <Form addColor={addColor} />
      <ColorList
        toast={toast}
        colors={colors}
      />
    </main>
  );
};
export default Page;
