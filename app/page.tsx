import { FaTwitterSquare } from 'react-icons/fa';

export default function Home() {
  return (
    <div className=" md:ml-20 font-8xl  flex items-start justify-center rounded-xl">
      <p className="back-shadow  p-10 md:text-3xl leading-loose  md:leading-loose text-sm">
        This website features a collection of fundamental React projects
        intended to provide helpful practice and learning opportunities for
        developing React skills.☘ follow me on Twitter.
        <a href="https://twitter.com/Amir_kh_d">
          <FaTwitterSquare />
        </a>
      </p>
    </div>
  );
}
