import { useState } from 'react';
import { newPerson } from '@/utils/actions';

const Form = () => {
  const [image, setImage] = useState(null);

  /* Handler */
  const handleForm = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', e.target.name.value);
    formData.append('age', e.target.age.value);
    formData.append('image', image);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        const imageUrl = data.url;
        // Handle the imageUrl as needed (e.g., update state, display image)
        console.log('Image uploaded successfully:', imageUrl);
      } else {
        console.error('Error uploading image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    // Reset the form after preventing default behavior
    e.target.reset();
  };

  /* Render */
  return (
    <form
      action={newPerson}
      className="grid grid-cols-1 rounded-lg  md:grid-cols-2 gap-2 p-4 m-4 back-shadow"
      onSubmit={handleForm}
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
          onChange={(e) => setImage(e.target.files[0])}
        />
      </div>
      <button className="btn-primary md:col-span-2 rounded-xl text-xs md:text-sm">
        New Buddy
      </button>
    </form>
  );
};

export default Form;
