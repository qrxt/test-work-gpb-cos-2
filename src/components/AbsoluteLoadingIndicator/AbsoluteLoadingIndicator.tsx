import { Box, Flex, Portal, Spinner, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

const wrapperStyles = css`
  position: relative;
`;
const indicatorWrapperStyles = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function AbsoluteLoadingIndicator({ children }: { children: React.ReactNode }) {
  return (
    <Box css={wrapperStyles}>
      <Portal>
        <Box
          css={indicatorWrapperStyles}
          padding="6"
          borderRadius="lg"
          boxShadow="lg"
          bg="white"
        >
          <Flex alignItems="center">
            <Text marginRight={6}>Загрузка...</Text>
            <Spinner size="lg" color="green.300" />
          </Flex>
        </Box>
      </Portal>
      {children}
    </Box>
  );
}

export default AbsoluteLoadingIndicator;
