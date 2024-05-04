import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import APOD from "./components/APOD";
import OSDR from "./components/OSDR";

function Main() {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>APOD</Tab>
          <Tab>OSDR</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <APOD/>
          </TabPanel>
          <TabPanel>
            <OSDR/>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Main;
