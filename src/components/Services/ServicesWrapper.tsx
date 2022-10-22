import { Box, Heading } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";
import { SERVICES_LIST_HEIGHT } from "./Services.style";

const servicesWrapperStyles = css`
  height: ${SERVICES_LIST_HEIGHT}px;
`;

function ServicesWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box
      padding="6"
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
      css={servicesWrapperStyles}
    >
      <Heading size="lg" marginBottom={3}>
        Сервисы
      </Heading>
      {children}
    </Box>
  );
}

export default ServicesWrapper;
