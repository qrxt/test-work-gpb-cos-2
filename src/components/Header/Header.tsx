import React from "react";
import { Box, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { Link as ReachLink, useLocation } from "react-router-dom";

const links = [
  {
    name: "Услуги",
    url: "/",
  },
]; // TODO: move to config

const NavLink = ({
  children,
  url,
}: {
  children: React.ReactNode;
  url: string | null;
}) =>
  url ? (
    <Link as={ReachLink} px={2} py={1} rounded={"md"} to={url}>
      {children}
    </Link>
  ) : (
    <Text px={2} py={1}>
      {children}
    </Text>
  );

function Header() {
  const { pathname } = useLocation();

  return (
    <>
      <Box bg={"gray.200"} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <HStack as={"nav"} spacing={4} display="flex">
              {links.map(({ name, url }) => {
                const currentUrl = url === pathname ? null : url;

                return (
                  <NavLink key={name} url={currentUrl}>
                    {name}
                  </NavLink>
                );
              })}
            </HStack>
          </HStack>
        </Flex>
      </Box>
    </>
  );
}

export default Header;
