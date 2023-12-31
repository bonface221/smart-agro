import { marginX } from "@/app/constants";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import GithubCTA from "./components/GithubCTA";

const HeroSection = () => {
  return (
    <Stack
      bgImage="/hero-img.png"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      h={{ base: "70vh", sm: "90vh" }}
    >
      <Grid h="100%" gridTemplateRows="repeat(4,1fr)">
        <GridItem gridRow={2}>
          <Stack maxW={{ base: "80%", md: "40%" }} marginX={marginX} gap={4}>
            {/* add an image on the after p */}
            <Box w="fit-content" pos="relative">
              <Text fontSize="xl" fontWeight="semibold">
                Original & Natural
              </Text>
              <Image
                src="/underline.svg"
                pos="absolute"
                bottom={-3}
                left={0}
                alt="text-underline"
              />
            </Box>
            <Heading
              fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
              color="brand.white"
            >
              <Box as="span" display="inline-block" color="brand.main">
                Agriculture Maste
                <Box as="span" pos="relative">
                  r
                  <Image
                    src="/leaf.png"
                    pos="absolute"
                    top="2"
                    left="-2"
                    alt="leaf"
                    objectFit="contain"
                  />
                </Box>
              </Box>
              Good production
            </Heading>
            <Text opacity=".8">
              Dissuade ecstatic and properly saw entirely sir why laughter
              endeavor. In on my jointure horrible margaret suitable he
              speedily.
            </Text>
            <Button
              w="fit-content"
              bg="brand.main"
              borderRadius="20px"
              fontSize="md"
            >
              <Text textTransform="uppercase" color="brand.black" fontSize="sm">
                Discover more
              </Text>
            </Button>
            G
          </Stack>
        </GridItem>
      </Grid>
      <GithubCTA />
    </Stack>
  );
};

export default HeroSection;
