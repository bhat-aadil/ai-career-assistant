import { useContext, useEffect } from "react";
import Head from "./head";
import { Outlet } from "react-router-dom";
import { JobContext } from "../../api/context";

export default function JobSearch() {
  const { location, selectCountry } = useContext(JobContext);
  useEffect(() => {
    selectCountry();
  }, [location]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Head />
      <Outlet />
    </div>
  );
}
