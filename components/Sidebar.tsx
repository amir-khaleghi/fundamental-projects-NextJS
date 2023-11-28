import { Links } from '@/context/data';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav>
      <ul className="absolute back-shadow flex flex-col justify-start top-14  p-2 text-xl gap-2 ">
        {Links.map((link) => (
          <li
            className={`
          ${link.active ? 'bg-green-100' : 'bg-red-100'}
          relative flex border-b shadow-sm hover-105 hover:bg-base-yellow w-full items-center gap-2 text-3xl md:text-2xl p-2 rounded-xl
        `}
            key={link.href}
          >
            {/* full link */}
            <Link
              className="absolute inset-0"
              href={link.href}
            ></Link>
            {/* icon */}
            <Link href={link.href}>{link.icon}</Link>
            {/* label */}
            <Link
              className="hidden md:flex text-lg capitalize"
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Sidebar;
