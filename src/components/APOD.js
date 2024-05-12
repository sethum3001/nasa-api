import React, { useEffect, useState } from "react";
import { Box, Heading, Text, Input, Spinner } from "@chakra-ui/react";

// Function to get the first day of the week before a given date
function getFirstDayOfWeekBefore(date) {
  const dayOfWeek = date.getDay();
  const daysToSubtract = ((dayOfWeek + 6) % 7) + 1;
  const firstDayOfWeekBefore = new Date(
    date.getTime() - daysToSubtract * 24 * 60 * 60 * 1000
  );
  return firstDayOfWeekBefore.toISOString().split("T")[0];
}

// Function to get yesterday's date
function getYesterday(date) {
  const yesterday = new Date(date.getTime() - 1 * 24 * 60 * 60 * 1000);
  return yesterday.toISOString().split("T")[0];
}

const APOD = () => {
  const [data, setData] = useState(null);
  const [prevImgs, setPrevImgs] = useState(null);
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");
  const [selectedImg, setSelectedImg] = useState(null);

  const today = new Date(); // Get today's date
  const firstDayOfWeekBefore = getFirstDayOfWeekBefore(today);
  const yesterday = getYesterday(today);

  const handleDate = (event) => {
    setSelectedImg(null);
    setDate(event.target.value);
  };

  const handleImgClick = (img) => {
    setSelectedImg(img);
  };

  useEffect(() => {
    async function fetchAPIData() {
      setLoading(true);
      const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
      const url1 = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;
      const url2 = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${firstDayOfWeekBefore}&end_date=${yesterday}`;
      try {
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const apiData1 = await response1.json();
        const apiData2 = await response2.json();
        setData(apiData1);
        setPrevImgs(apiData2);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchAPIData();
  }, [date]);

  return (
    <div className="flex flex-col md:flex-row rounded-lg ">
      {loading ? (
        <Box className=" h-screen w-screen flex justify-center items-center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            data-testid="spinner"
          />
        </Box>
      ) : (
        <>
          <div className="flex flex-col items-center gap-3 w-full md:w-2/3 md:mr-4 ">
            <div className="">
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                value={
                  selectedImg?.date || date || today.toISOString().split("T")[0]
                }
                onChange={handleDate}
                min="1995-06-16"
                max={today.toISOString().split("T")[0]}
              />
            </div>
            <div className="w-full md:w-1/2  content-center">
              {data?.url && /\.(jpeg|jpg|gif|png)$/.test(data.url) ? (
                <img
                  src={selectedImg?.url || data?.url}
                  className="w-full h-full object-cover aspect-square rounded-lg shadow-md"
                  loading="lazy"
                  alt="Main"
                />
              ) : (
                <iframe
                  src={data?.url}
                  title={data?.title}
                  className="w-full h-full object-cover aspect-video"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </div>
            <div>
              <Heading size="md">{selectedImg?.title || data?.title}</Heading>
              <Text>{selectedImg?.explanation || data?.explanation}</Text>
            </div>
          </div>
          <div className="w-full mt-4 md:w-1/3 flex flex-col gap-10 justify-start items-center ">
            <div>
              <h1 className="text-xl ">Last Week Images</h1>
            </div>
            <div className="flex flex-wrap justify-evenly gap-4">
              {prevImgs &&
                prevImgs.map(
                  (img) =>
                    img.url.match(/\.(jpeg|jpg|gif|png)$/) && (
                      <Box
                        key={img.date}
                        onClick={() => handleImgClick(img)}
                        className="cursor-pointer flex w-24 h-24 md:w-48 md:h-48"
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="rounded-lg shadow-md w-full h-full object-cover"
                        />
                      </Box>
                    )
                )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default APOD;
