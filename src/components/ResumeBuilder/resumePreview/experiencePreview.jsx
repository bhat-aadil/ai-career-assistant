import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import { FaBriefcase } from "react-icons/fa";
export default function ExperiencePreview() {
  const { experience } = useContext(ResumeContext);
  return (
    <>
      <section className="bg-blue-900 mt-4 p-2 ">
        <h3 className="text-white text-2xl font-semibold p-2 flex items-center gap-2">
          <FaBriefcase /> Work Experience
        </h3>
        {experience &&
          experience.map((block, index) => (
            <div
              key={index}
              className="flex max-sm:flex-col max-sm:gap-5 gap-10 m-4 p-2"
            >
              <h2 className="text-xl text-white font-bold">
                {block.startYear}-{block.endYear}
              </h2>
              <div>
                <p className="text-2xl text-white font-bold">{block.company}</p>

                <p className="text-xl font-semibold text-white">
                  {block.position}
                </p>
                <p className="text-white">{block.description}</p>
              </div>
            </div>
          ))}
      </section>
    </>
  );
}
