import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
export default function About({}) {
  const { about, setAbout } = useContext(ResumeContext);
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl mt-4">About</h3>
      <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />
      <textarea
        name="desc"
        id=""
        placeholder="Brief description about yourself..."
        className="bg-gray-200  w-10/12 rounded shadow-lg shadow-gray-300 mt-2"
        rows="7"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
      ></textarea>
    </div>
  );
}
