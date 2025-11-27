import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import { FaAward, FaCertificate } from "react-icons/fa";
export default function Awards() {
  const { certificate } = useContext(ResumeContext);
  return (
    <>
      <section className="bg-blue-900 mt-4 p-2">
        <h3 className="text-white text-2xl font-semibold flex items-baseline gap-2 p-2">
          {" "}
          <FaAward /> Awards
        </h3>
        {certificate &&
          certificate.map((block, index) => (
            <div
              key={index}
              className="text-white w-full flex mx-8 p-1 items-center gap-2"
            >
              <FaCertificate />
              {block.value}
            </div>
          ))}
      </section>
    </>
  );
}
