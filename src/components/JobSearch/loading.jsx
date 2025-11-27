import { FaSpinner } from "react-icons/fa";
export default function Loading() {
  return (
    <div>
      <FaSpinner className="font-bold text-3xl animate-spin" />
    </div>
  );
}
