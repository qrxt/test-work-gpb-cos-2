import { Box, Container, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;
  const layoutWrapperStyles = css`
    width: 100%;
  `;
  return (
    <Container
      maxW="container.sm"
      css={css`
        height: 100%;
      `}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        css={css`
          height: 100%;
        `}
      >
        <Box css={layoutWrapperStyles}>{children}</Box>
      </Flex>
    </Container>
  );
}

export default Layout;
