import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <h2 className="bg-gray-400 text-2xl text-white font-bold flex justify-center p-2">
        Your All In One AI Career Assistant
      </h2>

      <div className=" flex flex-col items-center">
        <p className="flex items-center text-xl gap-2 m-4 font-bold text-gray-400">
          Click <FaArrowDown />
        </p>
        {/* Go to Job Search */}
        <Link to="jobs">
          <button className="bg-blue-400 h-10 w-2xs text-xl text-white rounded p-2 m-1 cursor-pointer hover: transform hover:scale-125 transition-transform duration-1000">
            Find A Job
          </button>
        </Link>
        {/* Go to Tailor Resume or Coverletter */}
        <Link to="/tailored">
          <button className="bg-blue-400 h-10 w-2xs text-xl text-white rounded p-2 m-1 cursor-pointer hover: transform hover:scale-125 transition-transform duration-1000">
            Tailor Cover Letter
          </button>
        </Link>
        {/* Go to ResumeMaker */}
        <Link to="/resumeMaker">
          <button className="bg-blue-400 h-10 w-2xs text-xl text-white rounded p-2 m-1 cursor-pointer hover: transform hover:scale-125 transition-transform duration-1000">
            Create Resume
          </button>
        </Link>
      </div>
    </>
  );
}
