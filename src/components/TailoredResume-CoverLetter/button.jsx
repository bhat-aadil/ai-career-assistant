import { Loader2 } from "lucide-react";
export default function Button({ onClick, disabled, text }) {
  return (
    <>
      <button
        onClick={onClick}
        disabled={disabled}
        className="bg-blue-400 text-white w-28 h-10 rounded  mt-2 cursor-pointer"
      >
        {disabled ? <Loader2 className="animate-spin" /> : text}
      </button>
    </>
  );
}
