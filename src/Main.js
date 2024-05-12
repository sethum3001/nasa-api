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
            className="bg-gray-800"
          >
           APOD
          </Tab>
          <Tab
            _selected={{ color: "black", bg: "white" }}
            borderRadius={0}
            className="bg-gray-800"
            color="white"
          >
           OSDR
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
