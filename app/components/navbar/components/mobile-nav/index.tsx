"use client";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { navItems } from "../..";

const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <IconButton
        aria-label="Open Menu"
        as={RxHamburgerMenu}
        onClick={onOpen}
        boxSize={9}
        color="brand.white"
        bg="none"
        _hover={{ background: "none" }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="brand.main">
          <DrawerCloseButton
            color="brand.black"
            w="48px"
            h="48px"
            _focus={{
              color: "brand.white",
              boxShadow: "none",
              border: "none",
              outline: "none",
            }}
          />
          <DrawerHeader></DrawerHeader>

          <DrawerBody mt={5}>
            <Stack
              direction="column"
              align="flex-start"
              fontFamily="Poppins san-serif"
              fontWeight="300"
              lineHeight="44px"
              fontSize="20px"
              color="brand.white"
              gap={4}
            >
              {navItems.map((item) => (
                <Text
                  key={item.name}
                  as="a"
                  href={item.href}
                  fontSize="2xl"
                  color="brand.green"
                  fontWeight="semibold"
                  _hover={{
                    color: "brand.main",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    onClose();
                  }}
                >
                  {item.name}
                </Text>
              ))}

              <Button
                bg="brand.black"
                p="20px"
                borderRadius="none"
                color="brand.white"
                transition="all 0.3s ease-in-out"
                _hover={{
                  bg: "brand.buttonHover",
                }}
                fontSize="xl"
              >
                Contact Us
              </Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default MobileNav;
