'use client';
import Menu from '@/components/Menu';
import { useState } from 'react';
import { menu } from '@/context/data';
import Category from '@/components/Category';
// ──────────────────────────────────────────────────── 🟩 ─

const Page = () => {
  const catItems = ['all', ...new Set(menu.map((data) => data.category))];

  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(catItems);

  /* Handler ____________________________________________ */
  const handleFilter = (category: string) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const filteredMenu = menu.filter((item) => item.category === category);
    setMenuItems(filteredMenu);
  };

  /* ■■■■■■■■■■■■■■■■■■■■■■ Return ■■■■■■■■■■■■■■■■■■■■■■ */
  return (
    <main className="container flex justify-center flex-col items-center gap-4">
      {/* title */}
      <div className="title back-shadow w-full p-4 flex justify-center items-center rounded-t-xl">
        Our Menu
      </div>
      {/* filter */}
      <Category
        handleFilter={handleFilter}
        categories={categories}
      />
      {/* menu */}
      <section className="">
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default Page;
