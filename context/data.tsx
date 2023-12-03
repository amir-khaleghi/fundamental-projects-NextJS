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
  { active: true, href: '/reviews', label: 'reviews', icon: <MdRateReview /> },
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
import img1 from '@/assets/birthImg/p1.jpg';
import img2 from '@/assets/birthImg/p2.jpg';
import img3 from '@/assets/birthImg/p3.jpg';
import img4 from '@/assets/birthImg/p4.jpg';
import img5 from '@/assets/birthImg/p5.jpg';

export const birthdayBuddy = [
  {
    id: '1b381-2c6e-4d09-ba',
    img: img1,
    name: 'Lola Gardner',
    age: '29',
  },
  {
    id: '2b381-2c6e-4d09-ba',
    img: img2,
    name: 'Jack Little',
    age: '23',
  },
  {
    id: '3b381-2c6e-4d09-ba',
    img: img3,
    name: 'Barbara Diangles',
    age: '24',
  },
  {
    id: '4b381-2c6e-4d09-ba',
    img: img4,
    name: 'Hester Hogan',
    age: '21',
  },
  {
    id: '5b381-2c6e-4d09-ba',
    img: img5,
    name: 'Bertie Yates',
    age: '34',
  },
];

/* ■■■■■■■■■■■■■■■■■■■■■■■ Reviews ■■■■■■■■■■■■■■■■■■■■■■ */

export const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    image: img1,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    image: img3,
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    image: img2,
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'melina anderson',
    job: 'the boss',
    image: img4,
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
