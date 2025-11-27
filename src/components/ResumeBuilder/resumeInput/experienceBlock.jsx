import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
export default function ExperienceBlock() {
  const { experience, setExperience } = useContext(ResumeContext);

  function handleExperience(index, field, newValue) {
    const updatedExperience = [...experience];
    updatedExperience[index][field] = newValue;
    setExperience(updatedExperience);
  }

  function deleteExperience(index) {
    const updatedExperience = experience.filter((_, i) => i !== index);
    setExperience(updatedExperience);
  }

  return (
    <>
      {experience &&
        experience.map((block, index) => (
          <div
            key={index}
            className="bg-gray-100 w-10/12 rounded shadow-md shadow-gray-200 p-2 flex flex-col items-center mt-4"
          >
            <form action="" className="w-full flex flex-col items-center">
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Position"
                value={block.position}
                onChange={(e) =>
                  handleExperience(index, "position", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Company"
                value={block.company}
                onChange={(e) =>
                  handleExperience(index, "company", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Start Year"
                value={block.startYear}
                onChange={(e) =>
                  handleExperience(index, "startYear", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="End Year"
                value={block.endYear}
                onChange={(e) =>
                  handleExperience(index, "endYear", e.target.value)
                }
              />
              <textarea
                name="desc"
                id=""
                placeholder="Explain briefly about your experience and projects"
                className="bg-gray-200 w-full rounded shadow-lg shadow-gray-300 mt-2"
                rows="7"
                value={block.description}
                onChange={(e) =>
                  handleExperience(index, "description", e.target.value)
                }
              ></textarea>
            </form>
            <button
              className="bg-red-600 w-44 h-8 text-xl text-white mt-2 rounded"
              onClick={() => deleteExperience(index)}
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
}
