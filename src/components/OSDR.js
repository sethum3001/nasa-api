import React, { useEffect, useState } from "react";
import { Box, Input, Checkbox, CheckboxGroup, Spinner } from "@chakra-ui/react";
import SearchCard from "./SearchCard";

const OSDR = () => {
  const [data, setData] = useState("");
  const [searchTerm, setSerchTerm] = useState("");
  const [from, setFrom] = useState(0);
  const [type, setType] = useState("cgene");
  const [loading, setLoading] = useState(false);

  const handleSerch = (event) => {
    setSerchTerm(event.target.value);
  };

  const handlePaginationIncrease = () => {
    setFrom(from + 10);
  };

  const handlePaginationDecrease = () => {
    setFrom(from - 10);
  };

  const handleCheckboxChange = (values) => {
    setType(values.join(","));
  };

  useEffect(() => {
    async function fetchAPIData() {
      // setLoading(true);
      const url1 = `https://osdr.nasa.gov/osdr/data/search?term=${searchTerm}&from=${from}&type=${type}&size=10`;
      try {
        const response = await fetch(url1);
        const apiData = await response.json();
        setData(apiData);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setLoading(false);
      }
    }
    fetchAPIData();
  }, [searchTerm, from, type]);
  return (
    <div className="w-full">
      {
        // loading ? (
        //   <div className="flex items-center justify-center h-screen content-center">
        //     <Spinner
        //       thickness="4px"
        //       speed="0.65s"
        //       emptyColor="gray.200"
        //       color="blue.500"
        //       size="xl"
        //     />
        //   </div>
        // ) :
        <div>
          <Box className="">
            <Input
              className="w-full md:w-auto"
              placeholder="Search ..."
              onChange={handleSerch}
            />
          </Box>

          <div className="flex flex-col md:flex-row">
            <div className="w-full mt-6 md:w-1/6 md:mr-4">
              <h2 className="text-lg text-center">Data Source</h2>
              <CheckboxGroup
                colorScheme="blue"
                defaultValue={["cgene"]}
                onChange={handleCheckboxChange}
                className="flex flex-col"
              >
                <div className="flex mt-3 justify-between md:flex-col md:items-center">
                  <Checkbox value="cgene">Gene Lab</Checkbox>
                  <Checkbox value="nih_geo_gse">NIH GEO</Checkbox>
                  <Checkbox value="ebi_pride">EBI PRIDE</Checkbox>
                </div>
              </CheckboxGroup>
            </div>
            <div className="md:w-5/6 md:pr-10">
              <div className="">
                {data?.hits?.hits.map((hit) => (
                  <SearchCard key={hit._id} data={hit} />
                ))}
              </div>
              <div className="flex justify-between mt-10">
                <div className="">
                  <p className="text-base">
                    Showing {from + 1} to {from + 10} out of {data?.hits?.total}
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handlePaginationDecrease}
                    className={`flex items-center px-4 py-2 text-black rounded-lg ${
                      from === 0
                        ? "bg-gray-100 cursor-not-allowed text-gray-400"
                        : "bg-slate-200 hover:bg-slate-300"
                    }`}
                    disabled={from === 0}
                  >
                    <i className="mr-1 fas fa-chevron-left"></i>Previous
                  </button>
                  <button
                    onClick={handlePaginationIncrease}
                    className="flex items-center px-4 py-2 text-black rounded-lg bg-slate-200 hover:bg-slate-300"
                  >
                    <span>Next</span>
                    <i className="ml-1 fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default OSDR;
