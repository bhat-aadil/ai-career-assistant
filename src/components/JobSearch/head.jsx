import { JobContext } from "../../api/context";
import { useContext } from "react";
export default function Head() {
  const {
    location,
    setLocation,
    fetchJobs,
    setJobDescription,
    jobDescription,
  } = useContext(JobContext);
  return (
    <div className=" bg-gray-200 shadow-xl flex flex-col items-center justify-center  w-4/5 m-4 p-4 rounded">
      <h1 className="text-3xl font-bold text-gray-700">Adzuna Jobs</h1>
      <form
        action=""
        className="flex max-sm:flex-col  gap-5 items-center w-full m-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="flex max-sm:flex-col  items-center gap-2 w-1/2">
          <label
            className="text-xl text-gray-500 font-semibold"
            htmlFor="description"
          >
            Description
          </label>
          <input
            type="text"
            htmlFor="description"
            placeholder="job description..."
            className=" bg-white h-10  w-4/5  max-sm:w-2/3 rounded-full p-2"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </div>
        <div className="flex items-center max-sm:flex-col  gap-2 w-1/2">
          <label
            className="text-xl text-gray-500 font-semibold"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            htmlFor="location"
            placeholder="country..."
            className=" bg-white h-10  w-4/5 max-sm:w-2/3 rounded-full p-2"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <button
          className="bg-gray-700 text-white rounded p-2 cursor-pointer h-10"
          onClick={() => fetchJobs()}
        >
          Search
        </button>
      </form>
    </div>
  );
}
