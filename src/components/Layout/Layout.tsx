import { Box, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  const wrapperStyles = css`
    height: 100%;
    width: 100%;
  `;

  return (
    <Flex justifyContent="center" alignItems="center" css={wrapperStyles}>
      <Box>{children}</Box>
    </Flex>
  );
}

export default Layout;
