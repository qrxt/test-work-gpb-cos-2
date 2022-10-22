import { Box, Container, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Header from "components/Header";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const layoutWrapperStyles = css`
  height: 100%;
`;

const layoutInnerWrapperStyles = css`
  width: 100%;
`;

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Box
      css={layoutWrapperStyles}
      display="flex"
      flexDirection="column"
      minW={320}
    >
      <Header />
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
          <Box minW={360} css={layoutInnerWrapperStyles}>
            {children}
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Layout;
