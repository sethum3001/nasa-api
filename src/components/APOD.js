import React, { useEffect, useState } from "react";
import { Box, Image, Stack, Heading, Text, Input } from "@chakra-ui/react";

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
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState("");

  const today = new Date(); // Get today's date
  const firstDayOfWeekBefore = getFirstDayOfWeekBefore(today);
  const yesterday = getYesterday(today);

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
      const url1 = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;
      const url2 = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${firstDayOfWeekBefore}&end_date=${yesterday}`;
      const url3 = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;
      try {
        const response1 = await fetch(url1);
        const response2 = await fetch(url2);
        const response3 = await fetch(url3);
        const apiData = await response3.json();
        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchAPIData();
  }, [date]);

  return (
    <Box display="flex" alignContent="center" justifyContent="center">
      <Box
        maxW="4xl"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="6"
      >
        <Image src={data?.url} alt={data?.title} />
        <Stack mt="6" spacing="3">
          <Heading size="md">{data?.title}</Heading>
          <Text>{data?.explanation}</Text>
        </Stack>
      </Box>
      <Box display="flex" justifyItems="center">
        <Input
          placeholder="Select Date and Time"
          size="md"
          type="date"
          onChange={handleDate}
        />
      </Box>
    </Box>
  );
};

export default APOD;
