import { marginX } from "@/app/constants";
import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "News", href: "#news" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  return (
    <Box py="30px" bg="brand.green">
      <Flex justify="space-between" marginX={marginX}>
        <Image src="/logo.svg" width={197} height={40} alt="logo" />
        <Flex gap="6" display={{ base: "none", md: "flex" }}>
          {navItems.map((item, i) => (
            <Text
              fontWeight={i === 0 ? "700" : "normal"}
              color="brand.white"
              key={item.name}
              opacity={i === 0 ? 1 : 0.8}
              pos="relative"
              _before={
                i === 0
                  ? {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "3px",
                      bottom: "-4px",
                      backgroundColor: "brand.main",
                      borderRadius: "10px",
                    }
                  : {}
              }
            >
              {item.name}
            </Text>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
