import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";

export default function LanguageBlock() {
  const { language, setLanguage } = useContext(ResumeContext);
  function deleteLanguage(index) {
    const updatedLanguage = language.filter((_, i) => i !== index);
    setLanguage(updatedLanguage);
  }
  function handleLanguage(index, newValue) {
    const updatedLanguage = [...language];
    updatedLanguage[index].value = newValue;
    setLanguage(updatedLanguage);
  }
  return (
    <>
      {language &&
        language.map((block, index) => (
          <div
            key={index}
            className="bg-gray-100 w-10/12 rounded shadow-md shadow-gray-200 p-2 flex flex-col items-center mt-4"
          >
            <form action="" className="w-full flex flex-col items-center">
              <input
                type="text"
                placeholder="language"
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                value={block.value}
                onChange={(e) => handleLanguage(index, e.target.value)}
              />
            </form>
            <button
              className="bg-red-600 w-44 h-8 text-xl text-white mt-2 rounded"
              onClick={() => deleteLanguage(index)}
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
}
