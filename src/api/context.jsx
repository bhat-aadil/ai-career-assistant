import { createContext, useState } from "react";
import codes from "../country";

export const JobContext = createContext();

export const JobContextProvider = ({ children }) => {
  let app_key = import.meta.env.VITE_ADZUNA_KEY;
  let app_id = import.meta.env.VITE_ADZUNA_ID;

  const [results, setResults] = useState([]);
  const [location, setLocation] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [country, setCountry] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function selectCountry() {
    codes.filter((item) => {
      if (item.name.toLowerCase() === location.toLowerCase()) {
        setCountry(item.code);
      }
    });
  }

  async function fetchJobs() {
    if (location == "" || jobDescription == "") return;
    setLoading(true);
    console.log(`Page no. ${page}`);

    let url = `https://api.adzuna.com/v1/api/jobs/${country}/search/${page}?app_id=${app_id}&app_key=${app_key}&results_per_page=10&what=${jobDescription}`;
    try {
      let response = await fetch(url);
      let data = await response.json();
      setResults(data.results);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <JobContext.Provider
      value={{
        results,
        location,
        setLocation,
        jobDescription,
        setJobDescription,
        selectCountry,
        fetchJobs,
        page,
        setPage,
        loading,
        setLoading,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};
