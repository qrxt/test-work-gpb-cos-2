import React, { useCallback } from "react";
import { Box, Flex } from "@chakra-ui/react";
import ServicesWrapper from "./ServicesWrapper";
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { servicesSlice } from "@redux/modules/services/slice";
import ResponseErrorAlert from "components/ResponseErrorAlert";

const wrapperStyles = css`
  width: 100%;
  height: 100%;
`;

function ServicesError() {
  const dispatch = useDispatch();

  const repeatRequestHandle = useCallback(() => {
    dispatch(servicesSlice.actions.getServices());
  }, [dispatch]);

  return (
    <ServicesWrapper heading="Услуги">
      <Box
        css={wrapperStyles}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <ResponseErrorAlert
            repeatRequestHandle={repeatRequestHandle}
            dataTestPrefix="services"
          />
        </Flex>
      </Box>
    </ServicesWrapper>
  );
}

export default ServicesError;
