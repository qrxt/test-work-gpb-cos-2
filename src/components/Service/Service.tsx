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

  return (
    <dl>
      <dt>
        <Heading size="sm" data-testid="service-price-heading">
          Цена
        </Heading>
      </dt>
      <dd css={serviceValueStyles} data-testid="service-price-value">
        <Text>{service.price}₽</Text>
      </dd>

      <dt data-testid="service-description-heading">
        <Heading size="sm">Описание услуги</Heading>
      </dt>
      <dd css={serviceValueStyles} data-testid="service-description-value">
        <Text>{service.content}</Text>
      </dd>
    </dl>
  );
}

export default Service;
