import { useContext } from "react";
import { ResumeContext } from "../../../api/resumeContext";

export default function CertificateBlock() {
  const { certificate, setCertificate } = useContext(ResumeContext);

  function handleCertificate(index, newValue) {
    const updatedCertificate = [...certificate];
    updatedCertificate[index].value = newValue;
    setCertificate(updatedCertificate);
  }
  function deleteCertificate(index) {
    const updatedCertificate = certificate.filter((_, i) => i !== index);
    setCertificate(updatedCertificate);
  }
  return (
    <>
      {certificate &&
        certificate.map((block, index) => (
          <div
            key={index}
            className="bg-gray-100 w-10/12 rounded shadow-md shadow-gray-200 p-2 flex flex-col items-center mt-4"
          >
            <form action="" className="w-full flex flex-col items-center">
              <input
                type="text"
                placeholder="certification or award"
                className="bg-gray-200 w-full h-12 rounded shadow-lg shadow-gray-300 mt-2"
                value={block.value}
                onChange={(e) => handleCertificate(index, e.target.value)}
              />
            </form>
            <button
              className="bg-red-600 w-44 h-8 text-xl text-white mt-2 rounded"
              onClick={() => deleteCertificate(index)}
            >
              Delete
            </button>
          </div>
        ))}
    </>
  );
}
