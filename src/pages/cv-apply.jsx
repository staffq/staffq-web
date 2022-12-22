import React from "react";
import Cvapply from "./Naviagation/CvApply";
import { useEffect , useState } from "react";
const index = () => {
  const [query, setQuery] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); //gets the query parameter from url

    const myParam = urlParams.get("cv"); //get the excat query from the params

    var queryCode = (myParam); //Json parse the stringfy ovjects

    setQuery(queryCode);
  }, []);
  return (
    <div>
      <Cvapply data={query} />
    </div>
  );
};

export default index;
