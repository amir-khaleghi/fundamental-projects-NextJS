/* ■■■■■■■■■■■■■■■■■■■■■■■■ Icons ■■■■■■■■■■■■■■■■■■■■■■■ */
import { SiHomeadvisor } from 'react-icons/si';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import {
  MdTour,
  MdRateReview,
  MdMenuBook,
  MdBackupTable,
  MdOutlineFormatColorFill,
  MdLocalGroceryStore,
} from 'react-icons/md';
import { TfiLayoutAccordionList, TfiLayoutSlider } from 'react-icons/tfi';
import { TbLayoutNavbarExpand } from 'react-icons/tb';
import { VscLayoutSidebarLeft } from 'react-icons/vsc';
import { BsMenuButtonFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';

export const Links = [
  { active: true, href: '/', label: 'Home', icon: <SiHomeadvisor /> },
  {
    active: true,
    href: '/birthday-buddy',
    label: 'Birthday Buddy',
    icon: <LiaBirthdayCakeSolid />,
  },
  { active: true, href: '/tours', label: 'Tours', icon: <MdTour /> },
  { active: false, href: '/reviews', label: 'reviews', icon: <MdRateReview /> },
  {
    active: false,
    href: '/accordion',
    label: 'accordion',
    icon: <TfiLayoutAccordionList />,
  },
  { active: false, href: '/menu', label: 'menu', icon: <MdMenuBook /> },
  { active: false, href: '/tabs', label: 'tabs', icon: <MdBackupTable /> },
  {
    active: false,
    href: '/slider',
    label: 'slider',
    icon: <TfiLayoutSlider />,
  },
  {
    active: false,
    href: '/lorem-ipsum',
    label: 'lorem-ipsum',
    icon: <MdTour />,
  },
  {
    active: false,
    href: '/color-generator',
    label: 'color-generator',
    icon: <MdOutlineFormatColorFill />,
  },
  {
    active: false,
    href: '/grocery-bud',
    label: 'grocery-bud',
    icon: <MdLocalGroceryStore />,
  },
  {
    active: false,
    href: '/navbar',
    label: 'navbar',
    icon: <TbLayoutNavbarExpand />,
  },
  {
    active: false,
    href: '/sidebar',
    label: 'sidebar',
    icon: <VscLayoutSidebarLeft />,
  },
  {
    active: false,
    href: '/submenus',
    label: 'submenus',
    icon: <BsMenuButtonFill />,
  },
  { active: false, href: '/cart', label: 'cart', icon: <FaCartArrowDown /> },
];

/* ■■■■■■■■■■■■■■■■■■■ Birthday Buddy ■■■■■■■■■■■■■■■■■■■ */
import img1 from '@/assets/images/p1.jpg';
import img2 from '@/assets/images/p2.jpg';
import img3 from '@/assets/images/p3.jpg';
import img4 from '@/assets/images/p4.jpg';
import img5 from '@/assets/images/p5.jpg';

export const birthdayBuddy = [
  {
    img: img1,
    name: 'Lola Gardner',
    age: '29',
  },
  {
    img: img2,
    name: 'Jack Little',
    age: '23',
  },
  {
    img: img3,
    name: 'Barbara Diangles',
    age: '24',
  },
  {
    img: img4,
    name: 'Hester Hogan',
    age: '21',
  },
  {
    img: img5,
    name: 'Bertie Yates',
    age: '34',
  },
];
