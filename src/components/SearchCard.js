import React from "react";
import { Link } from "@chakra-ui/react";

const SearchCard = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-4">
      <h1 className="text-blue-700 text-xl ">
        <Link
          href={`https://osdr.nasa.gov/bio/repo/data/studies/${data._source.Accession}`}
        >
          {data._source["Project Title"]
            ? data._source["Project Title"]
            : data._source["Study Title"]}
        </Link>
      </h1>
      <p className="py-2 line-clamp-3 overflow-hidden text-base">
        {data._source["Study Description"]}
      </p>
      <div className="flex justify-between">
        <h1 className="text-sm">
          Release Date:
          <span className="italic">
          { " " + new Date(
            data._source["Study Public Release Date"] * 1000
          ).toDateString()}
            </span> 
          
        </h1>
        <span className="text-sm">Source: <span className="italic">{data._source["Data Source Type"]}</span></span>
      </div>
    </div>
  );
};

export default SearchCard;
