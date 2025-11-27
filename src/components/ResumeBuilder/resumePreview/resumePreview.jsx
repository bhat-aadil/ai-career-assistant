import { useRef } from "react";
import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import html2canvas from "html2canvas-pro";
import { jsPDF } from "jspdf";
import TopBar from "./TopBar";
import Skills from "./SkillsPreview";
import Language from "./LanguagePreview";
import EducationPreview from "./educationPreview";
import ExperiencePreview from "./experiencePreview";
import Awards from "./AwardsPreview";
import {
  FaMapMarker,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaUser,
  FaUserTie,
} from "react-icons/fa";
export default function ResumePreview() {
  const resumeRef = useRef();
  const { about, phone, email, gitHub, linkedIn, address } =
    useContext(ResumeContext);

  const downloadPDF = async () => {
    const element = resumeRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    const imageProps = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imageProps.height * pdfWidth) / imageProps.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("resume.pdf");
  };

  return (
    <div className="bg-gray-100  max-sm:w-fit rounded-2xl shadow-2xl p-4">
      {/* Resume Preview */}
      <div
        id="template"
        ref={resumeRef}
        className="w-[794px] min-h-[1123px] p-[20px] max-h-fit bg-gray-200"
      >
        <div
          className="w-full bg-blue-900 min-h-28 relative overflow-hidden"
          id="top-bar"
        >
          {/* Name, role and profile pic */}
          <TopBar />
        </div>
        <div className="flex w-full" id="bottom-bar">
          <div className="bg-blue-900 w-1/5 max-sm:w-2/5 p-2" id="left-side">
            {/* Contact Block */}
            <section className="w-full">
              <h3 className="text-white text-xl flex items-center gap-2 mt-4">
                {" "}
                <FaUser /> Contact
              </h3>
              <hr className="bg-white h-1 rounded w-1/2 mb-4" />
              <p className="text-white mt-2 flex items-center gap-2">
                <FaMapMarker /> {address}
              </p>
              <p className="text-white mt-2 flex items-center gap-2">
                <FaEnvelope /> {email}
              </p>
              <p className="text-white mt-2 flex items-center gap-2">
                <FaPhone /> {phone}
              </p>
              <p className="text-white mt-2 flex items-center gap-2">
                <FaLinkedin /> {linkedIn}
              </p>
              <p className="text-white mt-2 flex items-center gap-2">
                <FaGithub /> {gitHub}
              </p>
            </section>
            {/* Language and Skills */}
            <Skills />
            <Language />
          </div>
          {/* About, Experience,Education and Awards */}
          <div className=" w-4/5" id="right-side">
            <section className="bg-blue-900 mt-4 p-2">
              <h3 className="text-white text-2xl font-semibold flex items-center gap-2">
                <FaUserTie /> About Me
              </h3>
              <p className="text-white m-4 p-2">{about}</p>
            </section>
            <ExperiencePreview />
            <EducationPreview />
            <Awards />
          </div>
        </div>
      </div>
      {/* Download resume */}
      <button
        className="bg-green-500 w-44 h-8 text-xl text-white mt-2 rounded cursor-pointer"
        onClick={() => downloadPDF()}
      >
        Download
      </button>
    </div>
  );
}
