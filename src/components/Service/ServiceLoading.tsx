import { Box, SkeletonText } from "@chakra-ui/react";
import AbsoluteLoadingIndicator from "components/AbsoluteLoadingIndicator";
import React from "react";

function ServiceLoading() {
  return (
    <AbsoluteLoadingIndicator>
      <Box>
        <SkeletonText noOfLines={2} spacing="4" marginBottom={6} />
        <SkeletonText noOfLines={2} spacing="4" />
      </Box>
    </AbsoluteLoadingIndicator>
  );
}

export default ServiceLoading;
