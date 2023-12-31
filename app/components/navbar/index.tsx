import { marginX } from "@/app/constants";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import MobileNav from "./components/mobile-nav";

export const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Our Products", href: "#products" },
  { name: "Projects", href: "#projects" },
  { name: "Services", href: "#services" },
  { name: "News", href: "#news" },
];

const Navbar = () => {
  return (
    <Box py="30px" bg="brand.green">
      <Flex justify="space-between" marginX={marginX}>
        <Image src="/logo.svg" width={197} height={40} alt="logo" />
        <Flex gap="6" display={{ base: "none", md: "flex" }} align="center">
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
          <Button
            bg="brand.main"
            p="20px"
            borderRadius="none"
            color="brand.green"
            transition="all 0.3s ease-in-out"
            _hover={{
              bg: "brand.black",
              color: "brand.white",
            }}
          >
            Contact Us
          </Button>
        </Flex>
        <Box display={{ base: "block", md: "none" }}>
          <MobileNav />
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
