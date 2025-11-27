import { createContext, useState } from "react";

export const ResumeContext = createContext();

export const ResumeContextProvider = ({ children }) => {
  //info input and preview
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [gitHub, setGitHub] = useState("");
  const [address, setAddress] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  //handle blocks
  const [education, setEducation] = useState([
    {
      degree: "",
      institution: "",
      startYear: "",
      endYear: "",
      grade: "",
      location: "",
    },
  ]);
  const [experience, setExperience] = useState([
    { position: "", company: "", startYear: "", endYear: "", description: "" },
  ]);
  const [skillsBlock, setSkillsBlock] = useState([]);
  const [languageBlock, setLanguageBlock] = useState([]);
  const [certificateBlock, setCertificateBlock] = useState([]);

  //skill, language, certificate- input and preview
  const [skill, setSkill] = useState([{ value: "" }]);
  const [language, setLanguage] = useState([{ value: "" }]);
  const [certificate, setCertificate] = useState([{ value: "" }]);
  //education- input and preview
  const [degree, setDegree] = useState("");
  const [institution, setInstitution] = useState("");
  const [location, setLocation] = useState("");
  const [eduStartYear, setEduStartYear] = useState("");
  const [eduEndYear, setEduEndYear] = useState("");

  // experience- input and preview
  const [position, setPosition] = useState("");
  const [company, setCompany] = useState("");
  const [expStartYear, setExpStartYear] = useState("");
  const [expEndYear, setExpEndYear] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ResumeContext.Provider
      value={{
        about,
        setAbout,
        name,
        setName,
        title,
        setTitle,
        phone,
        email,
        linkedIn,
        gitHub,
        address,
        setPhone,
        setAddress,
        setEmail,
        setGitHub,
        setLinkedIn,
        profilePicture,
        setProfilePicture,
        education,
        setEducation,
        experience,
        setExperience,
        degree,
        setDegree,
        institution,
        setInstitution,
        location,
        setLocation,
        eduStartYear,
        setEduStartYear,
        eduEndYear,
        setEduEndYear,
        position,
        setPosition,
        company,
        setCompany,
        expStartYear,
        setExpStartYear,
        expEndYear,
        setExpEndYear,
        description,
        setDescription,
        skillsBlock,
        setSkillsBlock,
        skill,
        setSkill,
        language,
        setLanguage,
        languageBlock,
        setLanguageBlock,
        certificateBlock,
        setCertificateBlock,
        certificate,
        setCertificate,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
