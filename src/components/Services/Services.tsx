import React, { CSSProperties } from "react";
import { Service } from "types/service";
import { FixedSizeList as VirtualizedList } from "react-window";
import { size } from "lodash";
import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import {
  servicesListStyles,
  SERVICES_LIST_WIDTH,
  SERVICES_LIST_HEIGHT,
  SERVICES_LIST_ITEM_SIZE,
} from "./Services.style";
import { css } from "@emotion/react";

interface ServicesProps {
  services: Service[];
}

const listItemStyles = css`
  display: flex;
  align-items: center;
`;

function Services(props: ServicesProps) {
  const { services } = props;

  const Row = ({ index, style }: { index: number; style: CSSProperties }) => {
    const service = services[index];

    return (
      <ListItem key={service.id} style={style} css={listItemStyles}>
        <ListIcon as={SettingsIcon} color="green.500" marginRight={4} />
        {service.name}
      </ListItem>
    );
  };

  return (
    <List css={servicesListStyles}>
      <VirtualizedList
        width={SERVICES_LIST_WIDTH}
        height={SERVICES_LIST_HEIGHT}
        itemCount={size(services)}
        itemSize={SERVICES_LIST_ITEM_SIZE}
      >
        {Row}
      </VirtualizedList>
    </List>
  );
}

export default Services;
