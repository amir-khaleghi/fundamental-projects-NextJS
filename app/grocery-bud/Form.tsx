import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  /* State ______________________________________________ */
  const [newItemName, setNewItemName] = useState('');
  /* Handler ____________________________________________ */

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error('Please provide a value.');
    } else {
      addItem(newItemName);
    }
    setNewItemName('');
  };

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <form
      className="flex flex-col md:flex-row gap-2 items-center"
      onSubmit={handleSubmit}
    >
      <h4 className="font-bold text-xl">Grocery bud</h4>
      <div className="flex flex-col md:flex-row items-center gap-2 md:gap-0">
        <input
          className="w-full m-0 md:rounded-r-none "
          type="text"
          value={newItemName}
          onChange={(e) => {
            setNewItemName(e.target.value);
          }}
        />
        <button className=" bg-green-300 md:rounded-l-none hover-105 w-full md:w-fit p-2 md:p-0  rounded-lg text-sm">
          Add item
        </button>
      </div>
    </form>
  );
};
export default Form;
