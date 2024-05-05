import React from "react";
import { Heading, Box } from "@chakra-ui/react";

function Header() {
  return (
    <>
      <Box py="12px" bg="blue.400">
        <Heading >
          NASA API Application
        </Heading>
      </Box>
    </>
  );
}

export default Header;
