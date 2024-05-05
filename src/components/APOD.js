import React, { useEffect, useState } from "react";
import {
  Box,
  Image,
  Stack,
  Heading,
  Text,
  Input,
  Wrap,
  WrapItem,
  Spinner,
} from "@chakra-ui/react";

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
    <Box
      display="flex"
      flexDirection={{ base: "row", md: "row" }}
      alignContent="center"
      justifyContent="center"
    >
      {loading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <>
          <Box
            maxW="4xl"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            p="6"
          >
            <Image
              src={selectedImg?.url || data?.url}
              alt={selectedImg?.title || data?.title}
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{selectedImg?.title || data?.title}</Heading>
              <Text>{selectedImg?.explanation || data?.explanation}</Text>
            </Stack>
          </Box>
          <Box display="flex" justifyItems="center">
            <Stack>
              <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"
                onChange={handleDate}
              />
              <Heading>Last Week Images</Heading>
              <Wrap>
                {prevImgs &&
                  prevImgs.map((img) => (
                    <WrapItem
                      key={img.date}
                      onClick={() => handleImgClick(img)}
                    >
                      <Image
                        src={img.url}
                        alt={img.title}
                        boxSize="100px"
                        objectFit="cover"
                        cursor="pointer"
                      />
                    </WrapItem>
                  ))}
              </Wrap>
            </Stack>
          </Box>
        </>
      )}
    </Box>
  );
};

export default APOD;
