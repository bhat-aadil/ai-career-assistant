import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import { FaGlobeAmericas, FaLanguage, FaGlobe } from "react-icons/fa";

export default function Language() {
  const { language } = useContext(ResumeContext);
  return (
    <>
      <section>
        <h3 className="text-white text-xl flex items-center mt-4 gap-2">
          <FaGlobeAmericas className="text-white" />
          Languages
        </h3>
        <hr className="bg-white h-1 rounded w-1/2 mb-4" />

        {language &&
          language.map((block, index) => (
            <div
              key={index}
              className="flex items-center  text-white gap-1 mt-1"
            >
              <FaLanguage /> {block.value}
            </div>
          ))}
      </section>
    </>
  );
}
