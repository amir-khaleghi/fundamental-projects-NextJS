import reducer from '@/context/reducer';
import { memo, useReducer, useState } from 'react';
import { ADD_NEW_FRIEND } from '@/context/actions';

const Form = ({ dispatch }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState('');
  // const [state, dispatch] = useReducer(reducer, props);

  const addNewFriend = (e) => {
    e.preventDefault();
    const fakeId = Date.now();
    const newFriend = { id: fakeId, name, age, img };
    console.log(newFriend);

    dispatch({ type: ADD_NEW_FRIEND, payload: newFriend });

    // const formData = new FormData(e.currentTarget);
    // // console.log([...formData]); // Log form data to identify any issues
    // formData.forEach((file) => console.log('File: ', file));
    // const newUser = Object.fromEntries(formData);
    // console.log(newUser);
    setName('');
    setAge('');
    setSelectedFile(null);
    setImg('');
    e.currentTarget.reset();
  };

  /* Handle File ________________________________________ */

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);

    // Create a preview URL for the selected image
    const previewUrl = URL.createObjectURL(file);
    setImg(previewUrl);
  };

  return (
    <form
      className="grid grid-cols-1 md:grid-cols-2 gap-2 p-4 m-4 back-shadow"
      onSubmit={addNewFriend}
    >
      <div className="form-input">
        <label htmlFor="name">Name:</label>
        <input
          onChange={(e) => setName(e.target.value)}
          className=" w-full"
          type="text"
          id="name"
        />
      </div>
      <div className="form-input">
        <label htmlFor="age">Age:</label>
        <input
          onChange={(e) => setAge(e.target.value)}
          className=" w-full"
          type="number"
          id="age"
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
      <button className="btn-primary md:col-span-2 rounded-xl text-sm">
        New Birthday Buddy
      </button>
    </form>
  );
};
export default memo(Form);
