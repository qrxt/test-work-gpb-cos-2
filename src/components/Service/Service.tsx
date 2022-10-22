import React from "react";
import { Service as ServiceData } from "types/service";
import { Heading, Text } from "@chakra-ui/react";
import { css } from "@emotion/react";

export interface ServiceProps {
  service: ServiceData;
}

const serviceValueStyles = css`
  margin-bottom: 12px;
`;

function Service(props: ServiceProps) {
  const { service } = props;
  console.log(service);

  return (
    <dl>
      <dt>
        <Heading size="sm">Цена</Heading>
      </dt>
      <dd css={serviceValueStyles}>
        <Text>{service.price}₽</Text>
      </dd>

      <dt>
        <Heading size="sm">Описание услуги</Heading>
      </dt>
      <dd css={serviceValueStyles}>
        <Text>{service.content}</Text>
      </dd>
    </dl>
  );
}

export default Service;
