import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  Button,
  VStack,
} from "@chakra-ui/react";

interface ResponseErrorAlertProps {
  repeatRequestHandle: () => void;
  dataTestPrefix?: string;
}

function ResponseErrorAlert(props: ResponseErrorAlertProps) {
  const { repeatRequestHandle, dataTestPrefix } = props;

  const errorMessageDataTestId = dataTestPrefix
    ? `${dataTestPrefix}-error-message`
    : "error-message";
  const errorButtonDataTestId = dataTestPrefix
    ? `${dataTestPrefix}-error-repeat-request-button`
    : "error-repeat-request-button";

  return (
    <VStack padding={6}>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription data-testid={errorMessageDataTestId}>
          Произошла ошибка!
        </AlertDescription>
      </Alert>
      <Button
        w="100%"
        onClick={repeatRequestHandle}
        data-testid={errorButtonDataTestId}
      >
        Повторить запрос
      </Button>
    </VStack>
  );
}

export default ResponseErrorAlert;
