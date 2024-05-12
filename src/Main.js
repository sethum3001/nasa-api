import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import APOD from "./components/APOD";
import OSDR from "./components/OSDR";
import Header from "./components/Header";

function Main() {
  return (
    <Box>
      <Header />
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            _selected={{ color: "black", bg: "white" }}
            borderRadius={0}
            color="white"
            className="bg-blue-900 "
          >
           Astronomy Photo Of The Day
          </Tab>
          <Tab
            _selected={{ color: "black", bg: "white" }}
            borderRadius={0}
            className="bg-blue-900"
            color="white"
          >
           Open Science Data Repository
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <APOD />
          </TabPanel>
          <TabPanel>
            <OSDR />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Main;
