import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Individual } from "./Individual";

export const Decentralized = () => {
  return (
    <Flex flex="1">
      <Box>
        <Tabs variant="unstyled">
          <TabList>
            <Tab
              color="rgba(255, 255, 255, 0.72)"
              _selected={{
                color: "#fff",
                bgColor: "rgba(255, 255, 255, 0.17)",
                borderRadius: "3.1rem",
              }}
              fontSize="1.4rem"
            >
              For individuals
            </Tab>
            <Tab
              color="rgba(255, 255, 255, 0.72)"
              fontSize="1.4rem"
              _selected={{
                color: "#fff",
                bgColor: "rgba(255, 255, 255, 0.17)",
                borderRadius: "3.1rem",
              }}
            >
              For business
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Individual />
            </TabPanel>
            <TabPanel>
              <Individual />
              {/* <p>two!</p> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};
