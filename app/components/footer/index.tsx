import { marginX } from "@/app/constants";
import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";

const usefulLinks = [
  "New Projects",
  "Our Services",
  "Testimonials",
  "About Us",
  "Contact Us",
];

const Footer = () => {
  return (
    <>
      <Grid marginX={marginX} mb="2rem" gridTemplateColumns="repeat(4,1fr)">
        <GridItem display="flex" flexDir="column" gap={8} colSpan={2}>
          <Box>
            <Image w="150px" src="/logo.svg" alt="logo" />
          </Box>

          <Text>
            Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
            dictumst. Duis porta,quam ut finibus ultrices.
          </Text>

          <Divider w="90%" />

          <Flex align="center" gap={2}>
            <Image src="/facebook.svg" alt="facebook" />
            <Image src="/twitter.svg" alt="twitter" />
            <Image src="/instagram.svg" alt="instagram" />
            <Image src="/youtube.svg" alt="youtube" />
          </Flex>
        </GridItem>
        <GridItem display="flex" flexDir="column" gap={3}>
          <Heading fontSize="xl" color="brand.white">
            Useful Links
          </Heading>
          {usefulLinks.map((link) => (
            <Text key={link}>{link}</Text>
          ))}
        </GridItem>
        <GridItem display="flex" flexDir="column" gap={3}>
          <Heading fontSize="xl" color="brand.white">
            NewsLetter
          </Heading>
          <Text>
            Subscribe to our weekly Newsletter and receive updates via email.
          </Text>

          <InputGroup size="lg">
            <Input
              border="none"
              borderRadius="50px"
              bg="brand.green"
              placeholder="Enter your email"
              type="email"
              _placeholder={{
                color: "brand.white",
                opacity: 0.8,
                fontSize: "sm",
              }}
            />
            <InputRightElement pointerEvents="none">
              <Button borderRadius="full" bg="brand.main" fontSize="sm">
                Go
              </Button>
            </InputRightElement>
          </InputGroup>
        </GridItem>
      </Grid>
      <Divider />
      <Flex
        marginX={marginX}
        marginTop="2rem"
        py="2rem"
        justify="space-between"
      >
        <Text>Copyright©Smart Agro. All Rights Reserved.</Text>
        <Flex gap={3}>
          <Text>Privacy Policy</Text>
          <Text>Terms & Conditions</Text>
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
