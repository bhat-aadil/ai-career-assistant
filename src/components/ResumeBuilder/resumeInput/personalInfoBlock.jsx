import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
export default function PersonalInfo() {
  const { name, setName, title, setTitle, setProfilePicture } =
    useContext(ResumeContext);
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl mt-4">Personal Info</h3>
      <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="text"
        placeholder="Title or Role"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="file"
        accept="image/*"
        onChange={(e) => setProfilePicture(e.target.files[0])}
      />
    </div>
  );
}
