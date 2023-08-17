import { Box } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

export const Decentralized = () => {
  return (
    <Box>
      <Tabs variant="soft-rounded" colorScheme="rgba(255, 255, 255, 0.17)">
        <TabList>
          <Tab
            color="#fff"
            _focus={{
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            For individuals
          </Tab>
          <Tab
            color="rgba(255, 255, 255, 0.72)"
            _focus={{
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            For business
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};
