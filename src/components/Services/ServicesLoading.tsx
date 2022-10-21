import React from "react";
import { Box, SkeletonText } from "@chakra-ui/react";
import AbsoluteLoadingIndicator from "components/AbsoluteLoadingIndicator";
import { SERVICES_LIST_WIDTH, SERVICES_LIST_HEIGHT } from "./Services.style";

function ServicesLoading() {
  return (
    <AbsoluteLoadingIndicator>
      <Box width={SERVICES_LIST_WIDTH} height={SERVICES_LIST_HEIGHT}>
        <SkeletonText noOfLines={8} spacing="9" />
      </Box>
    </AbsoluteLoadingIndicator>
  );
}

export default ServicesLoading;
