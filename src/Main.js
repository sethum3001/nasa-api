import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import APOD from "./components/APOD";

function Main() {
  return (
    <>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab>APOD</Tab>
          <Tab>Other</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <APOD />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default Main;
