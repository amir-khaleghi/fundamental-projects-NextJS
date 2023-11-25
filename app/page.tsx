import { FaTwitterSquare } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="  font-8xl  flex items-start justify-center rounded-xl">
      <p className="back-shadow text-xl  p-10 md:text-4xl leading-loose ">
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
