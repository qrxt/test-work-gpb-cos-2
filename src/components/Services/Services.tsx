import React, { CSSProperties } from "react";
import { Service } from "types/service";
import { FixedSizeList as VirtualizedList } from "react-window";
import { size } from "lodash";
import { Box, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { SettingsIcon } from "@chakra-ui/icons";
import AutoSizer from "react-virtualized-auto-sizer";
import { servicesListStyles, SERVICES_LIST_ITEM_SIZE } from "./Services.style";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

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
        <Link to={`/service/${service.id}`}>
          <Text>{service.name}</Text>
        </Link>
      </ListItem>
    );
  };

  return (
    <List css={servicesListStyles}>
      <AutoSizer>
        {({ height, width }) => (
          <VirtualizedList
            width={width}
            height={height - 30} // AutoSizer ignores padding bottom
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
