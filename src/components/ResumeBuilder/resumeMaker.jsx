import EditorSidebar from "./resumeInput/editorSidebar";
import ResumePreview from "./resumePreview/resumePreview";

export default function ResumeMaker() {
  return (
    <>
      <div className="flex max-sm:flex-col p-8 gap-4 bg-gray-100">
        <EditorSidebar />
        <ResumePreview />
      </div>
    </>
  );
}
