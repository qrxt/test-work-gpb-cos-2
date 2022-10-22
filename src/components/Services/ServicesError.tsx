import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Box,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import ServicesWrapper from "./ServicesWrapper";
import { css } from "@emotion/react";
import { useDispatch } from "react-redux";
import { servicesSlice } from "@redux/modules/services/slice";

const wrapperStyles = css`
  width: 100%;
  height: 100%;
`;

function ServicesError() {
  const dispatch = useDispatch();
  function repeatRequestHandle() {
    dispatch(servicesSlice.actions.getServices());
  }

  return (
    <ServicesWrapper heading="Услуги">
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

export default ServicesError;
