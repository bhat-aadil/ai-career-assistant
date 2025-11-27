import { Link } from "react-router-dom";
import { useContext } from "react";
import { JobContext } from "../../api/context";
import Loading from "./loading";

export default function Display() {
  const { results, page, setPage, fetchJobs, loading } = useContext(JobContext);
  function nextPage() {
    if (page <= 10) {
      setPage((prev) => prev + 1);
      console.log(page);
      window.scrollTo({ top: 0, behavior: "smooth" });

      fetchJobs();
    }
  }

  return (
    <div className="w-4/5 flex flex-col justify-center items-center m-4">
      {loading ? <Loading /> : null}
      {results ? (
        results.map((result, index) => (
          <div
            key={index}
            className={`bg-gray-100 shadow-xl m-2 p-2 w-full ${
              loading ? "opacity-50 pointer-events-none" : "opacity-100"
            }`}
          >
            <h2 className="text-xl text-gray-900 font-bold">{result.title}</h2>
            <h3 className="font-bold flex max-sm:flex-col justify-between text-gray-600">
              {result.company.display_name}{" "}
              <span className="text-orange-400">
                {result.location.display_name}
              </span>
            </h3>
            <p className="text-blue-800 w-3/4 overflow-hidden mt-2 my-2">
              <a href={result.redirect_url}>
                {result.redirect_url.slice(0, 50) + "..."}
              </a>
            </p>
            <Link to={result.id.toString()}>
              <button
                onClick={() => setDetails(true)}
                className="bg-blue-400 text-white rounded p-2 cursor-pointer"
              >
                View Details
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-xl text-gray-500 font-semibold">No Results</p>
      )}

      {results && results.length ? (
        <button
          onClick={() => nextPage()}
          className={`bg-gray-700 text-white rounded p-2 cursor-pointer ${
            page === 10 ? "hidden" : "block"
          } `}
        >
          Next
        </button>
      ) : null}
    </div>
  );
}
