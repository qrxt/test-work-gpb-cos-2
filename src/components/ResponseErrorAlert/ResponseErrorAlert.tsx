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
}

function ResponseErrorAlert(props: ResponseErrorAlertProps) {
  const { repeatRequestHandle } = props;

  return (
    <VStack padding={6}>
      <Alert status="error">
        <AlertIcon />
        <AlertDescription>Произошла ошибка!</AlertDescription>
      </Alert>
      <Button w="100%" onClick={repeatRequestHandle}>
        Повторить запрос
      </Button>
    </VStack>
  );
}

export default ResponseErrorAlert;
