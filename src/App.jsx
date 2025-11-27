import Home from "./Home";
import JobSearch from "./components/JobSearch/jobSearch";
import Tailored from "./components/TailoredResume-CoverLetter/tailoredResumeCoverLetter";
import ResumeMaker from "./components/ResumeBuilder/resumeMaker";
import Display from "./components/JobSearch/display";
import Details from "./components/JobSearch/details";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="jobs" element={<JobSearch />}>
            <Route index element={<Display />} />

            <Route path=":id" element={<Details />} />
          </Route>
          <Route path="/tailored" element={<Tailored />} />
          <Route path="/resumeMaker" element={<ResumeMaker />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
