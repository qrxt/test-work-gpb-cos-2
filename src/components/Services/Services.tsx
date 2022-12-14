import React, { CSSProperties } from "react";
import { FixedSizeList as VirtualizedList } from "react-window";
import { size } from "lodash";
import { Link, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import AutoSizer from "react-virtualized-auto-sizer";
import { css } from "@emotion/react";
import { Link as ReachLink } from "react-router-dom";
import { Service } from "types/service";
import { servicesListStyles, SERVICES_LIST_ITEM_SIZE } from "./Services.style";

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
      <ListItem
        key={service.id}
        style={style}
        css={listItemStyles}
        data-testid="service-list-item"
      >
        <ListIcon as={SettingsIcon} color="green.500" marginRight={4} />
        <Link as={ReachLink} to={`/service/${service.id}`}>
          <Text>{service.name}</Text>
        </Link>
      </ListItem>
    );
  };

  return (
    <List css={servicesListStyles} data-testid="services-list">
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedList
            width={width}
            height={height}
            itemCount={size(services)}
            itemSize={SERVICES_LIST_ITEM_SIZE}
          >
            {Row}
          </VirtualizedList>
        )}
      </AutoSizer>
    </List>
  );
}

export default Services;
