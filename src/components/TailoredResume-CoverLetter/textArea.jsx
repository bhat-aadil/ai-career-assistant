export default function Textarea({ rows, placeholder, value, onChange }) {
  return (
    <>
      <textarea
        className="bg-gray-100 shadow-xl w-11/12 rounded-2xl p-2"
        name=""
        id=""
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
}
