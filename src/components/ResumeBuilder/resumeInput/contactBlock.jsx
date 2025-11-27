import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
export default function ContactBlock({}) {
  const {
    phone,
    email,
    linkedIn,
    gitHub,
    address,
    setPhone,
    setAddress,
    setEmail,
    setGitHub,
    setLinkedIn,
  } = useContext(ResumeContext);
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl mt-4">Contact Info</h3>
      <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="text"
        placeholder="LinkedIn"
        value={linkedIn}
        onChange={(e) => setLinkedIn(e.target.value)}
      />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="text"
        placeholder="GitHub"
        value={gitHub}
        onChange={(e) => setGitHub(e.target.value)}
      />
      <input
        className="bg-gray-200 w-10/12 h-12 rounded shadow-lg shadow-gray-300 mt-2"
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </div>
  );
}
