import { Box, Flex } from "@chakra-ui/react";
import { css } from "@emotion/react";
import { serviceSlice } from "@redux/modules/service/slice";
import ResponseErrorAlert from "components/ResponseErrorAlert";
import ServicesWrapper from "components/Services/ServicesWrapper";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

const wrapperStyles = css`
  height: 100%;
`;

function ServiceError({ serviceId }: { serviceId: string }) {
  const dispatch = useDispatch();

  const repeatRequestHandle = useCallback(() => {
    dispatch(serviceSlice.actions.getService({ id: serviceId }));
  }, [dispatch, serviceId]);

  return (
    <ServicesWrapper heading="Услуга ...">
      <Box
        css={wrapperStyles}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <ResponseErrorAlert repeatRequestHandle={repeatRequestHandle} />
        </Flex>
      </Box>
    </ServicesWrapper>
  );
}

export default ServiceError;
