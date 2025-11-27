import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { JobContextProvider } from "./api/context.jsx";
import { ResumeContextProvider } from "./api/resumeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ResumeContextProvider>
      <JobContextProvider>
        <App />
      </JobContextProvider>
    </ResumeContextProvider>
  </StrictMode>
);
