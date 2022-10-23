import React from "react";
import { Box, SkeletonText } from "@chakra-ui/react";
import AbsoluteLoadingIndicator from "components/AbsoluteLoadingIndicator";

function ServicesLoading() {
  return (
    <AbsoluteLoadingIndicator>
      <Box>
        <SkeletonText noOfLines={8} spacing="7" />
      </Box>
    </AbsoluteLoadingIndicator>
  );
}

export default ServicesLoading;
