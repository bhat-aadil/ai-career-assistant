import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";

export default function SkillsBlock() {
  const { skill, setSkill } = useContext(ResumeContext);

  function handleSkill(index, newValue) {
    const updatedSkill = [...skill];
    updatedSkill[index].value = newValue;
    setSkill(updatedSkill);
  }
  function deleteSkill(index) {
    const updatedSkill = skill.filter((_, i) => i !== index);
    setSkill(updatedSkill);
  }
  return (
    <>
      {skill.map((block, index) => (
        <div
          key={index}
          className="bg-gray-100 w-10/12 rounded shadow-md shadow-gray-200 p-2 flex flex-col items-center mt-4"
        >
          <form action="" className="w-full flex flex-col items-center">
            <input
              type="text"
              placeholder="skill"
              className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
              value={block.value}
              onChange={(e) => handleSkill(index, e.target.value)}
            />
          </form>
          <button
            className="bg-red-600 w-44 h-8 text-xl text-white mt-2 rounded"
            onClick={() => deleteSkill(index)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}
