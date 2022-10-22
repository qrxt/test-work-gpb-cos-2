import { Box } from "@chakra-ui/react";
import { css } from "@emotion/react";
import Header from "components/Header";
import Layout from "components/Layout";
import React from "react";

const layoutWrapperStyles = css`
  height: 100%;
`;

function Page({ children }: { children: React.ReactNode }) {
  return (
    <Box
      css={layoutWrapperStyles}
      display="flex"
      flexDirection="column"
      minW={320}
    >
      <Header />
      <Layout>{children}</Layout>
    </Box>
  );
}

export default Page;
