import { useState } from "react";
import Button from "./button";
import Textarea from "./textArea";
import { jsPDF } from "jspdf";

export default function Tailored() {
  const [jobDescription, setJobDescription] = useState("");
  const [resume, setResume] = useState("");
  const [tailoredResume, setTailoredResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [loading, setLoading] = useState(false);

  // generate resume
  const generateTailoredResume = async (e) => {
    e.preventDefault();
    if (jobDescription === "" || resume === "") return;
    setLoading(true);
    try {
      const res = await fetch(
        "http://localhost:3001/api/gemini/tailor-resume",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resume, jobDescription }),
        }
      );

      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }
      const data = await res.json();
      setTailoredResume(data.result);
    } catch (err) {
      console.error("Failed to generate resume:", err.message);
    }

    setLoading(false);
  };
  // generate cover letter
  const generateCoverLetter = async (e) => {
    e.preventDefault();
    if (jobDescription === "" || resume === "") return;
    setLoading(true);
    console.log("cover clicked");
    try {
      const res = await fetch(
        "http://localhost:3001/api/gemini/generate-cover-letter",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ resume, jobDescription }),
        }
      );
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`HTTP ${res.status}: ${text}`);
      }

      const data = await res.json();
      setCoverLetter(data.result);
    } catch (err) {
      console.error("Failed to generate cover letter:", err.message);
    }
    setLoading(false);
  };

  // server download
  const downloadServerPDF = async (text, filename) => {
    const res = await fetch("http://localhost:3001/api/generate-pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: text,
        filename: filename || "download",
      }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename || "download"}.pdf`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  //copy data
  function copyText(text) {
    const textToCopy = text;
    navigator.clipboard.writeText(textToCopy);
  }

  return (
    <div className=" max-w-4xl mx-auto p-4 space-y-6 relative">
      <h1 className="text-3xl text-gray-500 font-bold text-center">
        Tailor Resume or Generate Cover Letter
      </h1>

      <section className=" bg-gray-200 flex flex-col p-2 rounded shadow-xl">
        <div className=" flex gap-10 ">
          <Textarea
            rows={12}
            placeholder="Paste your resume here..."
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
          <Textarea
            rows={12}
            placeholder="Paste job description here..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <Button
            onClick={generateTailoredResume}
            disabled={loading}
            text="Tailor Resume"
          />
          <Button
            onClick={generateCoverLetter}
            disabled={loading}
            text="Cover Letter"
          />
        </div>
      </section>

      {tailoredResume && (
        <section className=" bg-gray-200 rounded-2xl shadow-xl p-2">
          <div className="p-4">
            <h2 className="text-xl text-gray-500 font-semibold mb-4">
              Tailored Resume
            </h2>
            <p className="whitespace-pre-wrap">{tailoredResume}</p>
          </div>
          <button
            className="bg-blue-400 text-white w-28 h-10 rounded mx-1 cursor-pointer"
            onClick={() => downloadServerPDF(tailoredResume, "Tailored_Resume")}
          >
            Download
          </button>
          <button
            onClick={() => copyText(tailoredResume)}
            className="bg-blue-400 text-white w-28 h-10 rounded mx-1 cursor-pointer"
          >
            Copy
          </button>
        </section>
      )}

      {coverLetter && (
        <section className=" bg-gray-200 rounded-2xl shadow-xl p-2">
          <div className="p-4">
            <h2 className="text-2xl text-gray-500 font-semibold mb-4">
              Cover Letter
            </h2>
            <p className="whitespace-pre-wrap ">{coverLetter}</p>
          </div>
          <button
            onClick={() => downloadServerPDF(coverLetter, "Cover_Letter")}
            className="bg-blue-400 text-white w-28 h-10 rounded mx-1 cursor-pointer"
          >
            Download
          </button>
          <button
            onClick={() => copyText(coverLetter)}
            className="bg-blue-400 text-white w-28 h-10 rounded mx-1 cursor-pointer"
          >
            Copy
          </button>
        </section>
      )}
    </div>
  );
}
