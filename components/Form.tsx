import { useState } from 'react';
import { newPerson } from '@/utils/actions';
const Form = () => {
  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <form
      action={newPerson}
      // encType="multipart/form-data"
      className="grid grid-cols-1 rounded-lg  md:grid-cols-2 gap-2 p-4 m-4 back-shadow"
    >
      <div className="form-input ">
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          className=" w-full"
          type="text"
          id="name"
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="age">Age:</label>
        <input
          name="age"
          className=" w-full"
          type="number"
          id="age"
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          className="w-full"
          type="file"
          id="image"
        />
      </div>
      <button className="btn-primary md:col-span-2 rounded-xl text-xs md:text-sm">
        New Buddy
      </button>
    </form>
  );
};
export default Form;
