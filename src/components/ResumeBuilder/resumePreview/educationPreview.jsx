import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import { FaGraduationCap } from "react-icons/fa";
export default function EducationPreview() {
  const { education } = useContext(ResumeContext);
  return (
    <>
      <section className="bg-blue-900 mt-4 p-2">
        <h3 className="text-white text-2xl font-semibold flex itmes-center gap-2 p-2">
          {" "}
          <FaGraduationCap /> Education
        </h3>
        {education &&
          education.map((block, index) => (
            <div
              key={index}
              className="flex max-sm:flex-col max-sm:gap-5 gap-10 m-4 p-2"
            >
              <h2 className="text-xl text-white font-bold">
                {block.startYear}-{block.endYear}
              </h2>
              <div>
                <p className="text-2xl text-white font-bold">{block.degree}</p>
                <p className="text-xl font-semibold text-white">
                  {block.institution}
                </p>
                <p className="text-white"> {block.location}</p>
                <p className="text-white">Grade : {block.grade}</p>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
