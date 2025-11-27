import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
export default function TopBar() {
  const { profilePicture, name, title } = useContext(ResumeContext);
  return (
    <div>
      {profilePicture && (
        <div className="absolute left-3 top-2">
          <img
            src={URL.createObjectURL(profilePicture)}
            alt="prifile pic"
            width="100px"
            className="rounded-full shadow-sm shadow-gray-100"
          />
        </div>
      )}
      <div
        id="name-role"
        className="absolute right-20 top-4 max-sm:w-1/2 max-sm:right-0"
      >
        <p className="text-2xl text-white font-bold">{name}</p>
        <p className="text-white text-lg font-semibold">{title}</p>
      </div>
    </div>
  );
}
