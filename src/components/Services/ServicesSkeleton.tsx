import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";
import { SERVICES_LIST_WIDTH, SERVICES_LIST_HEIGHT } from "./Services.style";

function ServicesSkeleton() {
  return (
    <Box width={SERVICES_LIST_WIDTH} height={SERVICES_LIST_HEIGHT}>
      <SkeletonText noOfLines={8} spacing="9" />
    </Box>
  );
}

export default ServicesSkeleton;
