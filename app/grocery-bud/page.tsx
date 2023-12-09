'use client';
import { useEffect, useState } from 'react';
import Form from './Form';
import { nanoid } from 'nanoid';
// ─── Toastify ───────────────────────
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Items from './Items';

// ─── Local Storage ────────────────────────────────── 🟩 ─
//set local
const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};
//get local
const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    let list = localStorage.getItem('list');
    if (list) {
      list = JSON.parse(list);
    } else {
      list = [];
    }
    return list;
  } else {
    return [];
  }
};

//default list
const defaultList =
  typeof window !== 'undefined' && localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list'))
    : [];
/* ■■■■■■■■■■■■■■■■■■■■■■■■ Comp ■■■■■■■■■■■■■■■■■■■■■■■■ */
const Page = () => {
  getLocalStorage();
  const [items, setItems] = useState(defaultList);

  /* Handler ______________________________________________ */
  //add Item
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('new item added');
  };

  //delete item
  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => item.id !== id);
    setItems(filteredItems);
    setLocalStorage(filteredItems);
    toast.success('Item removed');
  };

  //editItem
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item edited');
  };

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <section className="back-shadow p-4 flex flex-col rounded-xl ">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />

      <Items
        deleteItem={deleteItem}
        items={items}
        editItem={editItem}
      />
    </section>
  );
};
export default Page;
