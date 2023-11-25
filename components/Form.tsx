import { useState } from 'react';
import { ADD_NEW_FRIEND } from '@/context/actions';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');

  const addNewFriend = (e) => {
    e.preventDefault();
    // const fakeId = Date.now();

    const newFriend = { id: uuidv4(), name, age, img };

    dispatch({ type: ADD_NEW_FRIEND, payload: newFriend });

    // const formData = new FormData(e.currentTarget);
    // // console.log([...formData]); // Log form data to identify any issues
    // formData.forEach((file) => console.log('File: ', file));
    // const newUser = Object.fromEntries(formData);
    // console.log(newUser);
    setName('');
    setAge('');
    setImg('');
    e.currentTarget.reset();
  };

  /* Handle File ________________________________________ */

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Create a preview URL for the selected image
    const previewUrl = URL.createObjectURL(file);
    setImg(previewUrl);
  };

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <form
      className="grid grid-cols-1 rounded-lg  md:grid-cols-2 gap-2 p-4 m-4 back-shadow"
      onSubmit={addNewFriend}
    >
      <div className="form-input ">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className=" w-full"
          type="text"
          id="name"
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="age">Age:</label>
        <input
          onChange={(e) => setAge(e.target.value)}
          className=" w-full"
          type="number"
          id="age"
          required
        />
      </div>
      <div className="form-input">
        <label htmlFor="image">Image:</label>
        <input
          onChange={handleFileChange}
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
