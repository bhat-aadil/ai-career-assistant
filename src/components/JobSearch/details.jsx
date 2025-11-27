import { useContext } from "react";
import { JobContext } from "../../api/context";
import { useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  const { results } = useContext(JobContext);
  const result = results.find((r) => r.id == id);

  return (
    <div className=" flex  flex-col items-center justify-center p-4 ">
      <div className="  bg-gray-200 w-4/5 shadow-xl p-2 m-4 rounded-xl">
        <h2 className="font-bold text-gray-500 flex gap-3 m-2">
          Company:
          <span className=" text-orange-400">
            {result.company.display_name}
          </span>
        </h2>

        <h2 className="font-bold text-gray-500 flex gap-3 m-2">
          Job Title: <span className=" text-blue-400">{result.title}</span>
        </h2>

        <p className=" m-2">{result.description}</p>
        <p className="text-gray-500 font-bold m-2 overflow-hidden">
          Visit: <br />{" "}
          <a href={result.redirect_url} className="text-blue-800">
            {" "}
            {result.redirect_url.slice(0, 50) + "..."}
          </a>
        </p>
      </div>
    </div>
  );
}
