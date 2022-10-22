import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { css } from "@emotion/react";
import { serviceSlice } from "@redux/modules/service/slice";
import ServicesWrapper from "components/Services/ServicesWrapper";
import React from "react";
import { useDispatch } from "react-redux";

const wrapperStyles = css`
  height: 100%;
`;

function ServiceError({ serviceId }: { serviceId: string }) {
  const dispatch = useDispatch();
  function repeatRequestHandle() {
    dispatch(serviceSlice.actions.getService({ id: serviceId }));
  }

  return (
    <ServicesWrapper heading="Услуга ...">
      <Box
        css={wrapperStyles}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <VStack padding={6}>
            <Alert status="error">
              <AlertIcon />
              <AlertDescription>Произошла ошибка!</AlertDescription>
            </Alert>
            <Button w="100%" onClick={repeatRequestHandle}>
              Повторить запрос
            </Button>
          </VStack>
        </Flex>
      </Box>
    </ServicesWrapper>
  );
}

export default ServiceError;
