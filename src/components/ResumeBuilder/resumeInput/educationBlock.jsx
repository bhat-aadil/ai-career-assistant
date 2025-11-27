import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
export default function EducationBlock() {
  const { education, setEducation } = useContext(ResumeContext);
  function handleEducation(index, field, newValue) {
    const updatedEducation = [...education];
    updatedEducation[index][field] = newValue;
    setEducation(updatedEducation);
  }

  function deleteEducation(index) {
    const updatedEducation = education.filter((_, i) => i !== index);
    setEducation(updatedEducation);
  }
  return (
    <>
      {education &&
        education.map((block, index) => (
          <div
            key={index}
            className="bg-gray-100 w-10/12 rounded shadow-md shadow-gray-200 p-2 flex flex-col items-center mt-4"
          >
            <form action="" className="w-full flex flex-col items-center">
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Degree"
                value={block.degree}
                onChange={(e) =>
                  handleEducation(index, "degree", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Institution"
                value={block.institution}
                onChange={(e) =>
                  handleEducation(index, "institution", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Location"
                value={block.location}
                onChange={(e) =>
                  handleEducation(index, "location", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="Start Year"
                value={block.startYear}
                onChange={(e) =>
                  handleEducation(index, "startYear", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="End Year"
                value={block.endYear}
                onChange={(e) =>
                  handleEducation(index, "endYear", e.target.value)
                }
              />
              <input
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                type="text"
                placeholder="CGPA / Percentage"
                value={block.grade}
                onChange={(e) =>
                  handleEducation(index, "grade", e.target.value)
                }
              />
            </form>
            <button
              className="bg-red-600 w-44 h-8 text-xl text-white mt-2 rounded"
              onClick={() => deleteEducation(index)}
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
}
