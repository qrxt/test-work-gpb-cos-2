import { Box, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { SERVICES_LIST_HEIGHT } from "./Services.style";

const servicesWrapperStyles = css`
  height: ${SERVICES_LIST_HEIGHT}px;
`;

interface ServicesWrapperProps {
  children: React.ReactNode;
  heading: string;
}

function ServicesWrapper(props: ServicesWrapperProps) {
  const { children, heading } = props;
  return (
    <Box
      padding="6"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      css={servicesWrapperStyles}
      display="flex"
      flexDirection="column"
    >
      <Heading size="lg" marginBottom={3}>
        {heading}
      </Heading>
      {children}
    </Box>
  );
}

export default ServicesWrapper;
