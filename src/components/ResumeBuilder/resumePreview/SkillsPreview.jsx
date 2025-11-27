import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import { FaTools, FaArrowCircleRight } from "react-icons/fa";

export default function Skills() {
  const { skill } = useContext(ResumeContext);
  return (
    <>
      <section>
        <h3 className="text-white text-xl flex items-center gap-2 mt-4">
          <FaTools /> Skills
        </h3>
        <hr className="bg-white h-1 rounded w-1/2 mb-4" />
        {skill.map((block, index) => (
          <div key={index} className="flex text-white mt-1 items-center gap-2">
            <FaArrowCircleRight className="text-sm text-white" /> {block.value}
          </div>
        ))}
      </section>
    </>
  );
}
