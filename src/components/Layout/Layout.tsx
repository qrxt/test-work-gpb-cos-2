import { Box, Container, Flex } from "@chakra-ui/react";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <Container maxW="container.sm" height="100%">
      <Flex justifyContent="center" alignItems="center" height="100%">
        <Box minW={360} width="100%">
          {children}
        </Box>
      </Flex>
    </Container>
  );
}

export default Layout;
