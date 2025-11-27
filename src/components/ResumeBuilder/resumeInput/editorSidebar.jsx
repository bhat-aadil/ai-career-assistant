import { useContext, useState } from "react";
import { ResumeContext } from "../../../api/resumeContext";
import PersonalInfo from "./personalInfoBlock";
import ContactBlock from "./contactBlock";
import EducationBlock from "./educationBlock";
import ExperienceBlock from "./experienceBlock";
import SkillsBlock from "./skillsBlock";
import LanguageBlock from "./languageBlock";
import CertificateBlock from "./certificateBlock";
import About from "./About";

export default function EditorSidebar() {
  const {
    education,
    experience,
    setEducation,
    setExperience,
    skill,
    setSkill,
    language,
    setLanguage,
    certificate,
    setCertificate,
  } = useContext(ResumeContext);
  function addEducation() {
    setEducation([
      ...education,
      {
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
        grade: "",
        location: "",
      },
    ]);
  }
  function addExperience() {
    setExperience([
      ...experience,
      {
        position: "",
        company: "",
        startYear: "",
        endYear: "",
        description: "",
      },
    ]);
  }
  function addSkill() {
    setSkill([...skill, { value: "" }]);
  }
  function addLanguage() {
    setLanguage([...language, { value: "" }]);
  }
  function addCertificate() {
    setCertificate([...certificate, { value: "" }]);
  }
  return (
    <div className="flex w-1/4 max-sm:w-full h-screen bg-white rounded-2xl shadow-2xl overflow-scroll">
      <div className="w-full flex flex-col p-4">
        {/* Add Personal Info, About and Contact info */}
        <PersonalInfo />
        <About />
        <ContactBlock />
        {/* Add Skills */}
        <div className="flex flex-col">
          <h3 className="text-2xl mt-4">Skills</h3>
          <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />
          <SkillsBlock />
          <button
            className="bg-blue-500 w-44 h-8 text-xl text-white mt-2 rounded"
            onClick={() => addSkill()}
          >
            Add Skill
          </button>
        </div>
        {/* Add Education Info */}
        <div className="flex flex-col">
          <h3 className="text-2xl mt-4">Education</h3>
          <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />

          <EducationBlock />

          <button
            className="bg-blue-500 w-44 h-8 text-xl text-white mt-2 rounded"
            onClick={() => addEducation()}
          >
            Add Education
          </button>
        </div>
        {/* Add Experience Info */}
        <div className="flex flex-col">
          <h3 className="text-2xl mt-4">Experience</h3>
          <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />

          <ExperienceBlock />

          <button
            className="bg-blue-500 w-44 h-8 text-xl text-white mt-2 rounded"
            onClick={() => addExperience()}
          >
            Add Experience
          </button>
        </div>
        {/* Add Certificates and Awards */}
        <div className="flex flex-col">
          <h3 className="text-2xl mt-4">Certificate</h3>
          <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />
          <CertificateBlock />
          <button
            className="bg-blue-500 w-44 h-8 text-xl text-white mt-2 rounded"
            onClick={() => addCertificate()}
          >
            Add Certificate
          </button>
        </div>
        {/* Add Languages */}
        <div className="flex flex-col">
          <h3 className="text-2xl mt-4">Languages</h3>
          <hr className="w-1/2 h-1 text-blue-500 bg-blue-500 rounded-full" />

          <LanguageBlock />

          <button
            className="bg-blue-500 w-44 h-8 text-xl text-white mt-2 rounded"
            onClick={() => addLanguage()}
          >
            Add Language
          </button>
        </div>
      </div>
    </div>
  );
}
