import React, { useEffect, useState } from "react";
import { Box, Input } from "@chakra-ui/react";
import SearchCard from "./SearchCard";

const OSDR = () => {
  const [data, setData] = useState("");
  const [searchTerm, setSerchTerm] = useState("");
  const [from, setFrom] = useState(0);
  const [type, setType] = useState("");
  //   const [filterField, setFilterField] = useState("");
  //   const [filterValue, setFilterValue] = useState("");

  const handleSerch = (event) => {
    setSerchTerm(event.target.value);
  };
  useEffect(() => {
    async function fetchAPIData() {
      const url1 = `https://osdr.nasa.gov/osdr/data/search?term=${searchTerm}&from=${from}&type=cgene,nih_geo_gse,ebi_pride&size=10`;
      try {
        const response = await fetch(url1);
        const apiData = await response.json();
        setData(apiData);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, [searchTerm]);
  return (
    <>
      <Box display="flex" alignContent="center" justifyContent="center">
        <Input placeholder="Search ..." onChange={handleSerch} />
      </Box>
      <Box mt={4}>
        {data?.hits?.hits.map((hit) => (
          <SearchCard key={hit._id} data={hit} />
        ))}
      </Box>
    </>
  );
};

export default OSDR;
