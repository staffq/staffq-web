import React, { useState } from "react";
import { useEffect } from "react";
import Finddescription from "./Naviagation/FindJobDescrpition";

const index = () => {
  const [query, setQuery] = useState({});

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search); //gets the query parameter from url

    const myParam = urlParams.get("find"); //get the excat query from the params

    var queryCode = JSON.parse(myParam); //Json parse the stringfy ovjects

    setQuery(queryCode);
  }, []);
  console.log(query?.jobTitle,"------->>>>>>>")
  return (
    <div>
      <Finddescription data={query}/>
    </div>
  );
};

export default index;
