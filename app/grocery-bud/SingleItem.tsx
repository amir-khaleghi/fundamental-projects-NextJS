import { FaWindowClose } from 'react-icons/fa';

// ─── Comp ─────────────────────────────────────────── 🟩 ─

const SingleItem = ({ item, deleteItem, editItem }) => {
  // ─── State For Check Items ───────────────────────────────

  /* ■■■■■■■■■■■■■■■■■■■■■■ RETURN ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <div
      key={item.id}
      className="back-shadow flex justify-between items-center rounded-lg relative"
    >
      <div className="flex pl-4 items-center gap-2">
        <input
          className="m-0"
          type="checkbox"
          checked={item.completed}
          onChange={() => editItem(item.id)}
        />
        <p
          className={` ${
            item.completed && 'line-through'
          }   text-lg font-bold capitalize p-2 `}
        >
          {item.name}
        </p>
      </div>
      <button onClick={() => deleteItem(item.id)}>
        <FaWindowClose className="md:text-5xl text-2xl hover-105 m-0 p-0 hover:text-red-400 absolute right-0 -top-0.5" />
      </button>
    </div>
  );
};
export default SingleItem;
