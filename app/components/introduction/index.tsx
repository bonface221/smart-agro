"use client";
import { marginX } from "@/app/constants";
import {
  Box,
  Divider,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdCheckCircle } from "react-icons/md";

const listData = [
  "Organic food contains more vitamins",
  "Eat organic because supply meets demand",
  "Organic food is never irradiated",
];

const OurIntroduction = () => {
  return (
    <Box
      py="5rem"
      pos="relative"
      _after={{
        content: '""',
        top: 0,
        left: 0,
        position: "absolute",
        width: "300px",
        height: "300px",
        bg: "brand.green",
        zIndex: -1,
      }}
    >
      <SimpleGrid columns={2} spacing={10} marginX={marginX}>
        <Stack pos="relative">
          <Image
            borderRadius="10px"
            src="/intro-img.png"
            width="100%"
            height="551px"
            alt="intro-image"
            objectFit="cover"
          />
          <Flex
            pos="absolute"
            bottom={0}
            left="50%"
            transform="translateX(-50%) translateY(50%)"
            borderRadius="10px"
            bg="brand.lightGreen"
            p="1.4rem 1.8rem"
            w="70%"
            gap={2}
          >
            <Box>
              <Image src="/intro-botany.png" alt="introduction-botany" />
            </Box>
            <Divider orientation="vertical" bg="brand.main" w=".8px" />
            <Stack gap={1}>
              <Text fontSize="3xl">86,700</Text>
              <Text>Successfully Project Completed</Text>
            </Stack>
          </Flex>
          <Box
            pos="absolute"
            width="20px"
            height="200px"
            bg="brand.main"
            left={0}
            bottom={10}
            borderRadius="5px 0px 0px 5px"
            transform="translateX(-100%)"
          />
        </Stack>
        <Stack gap={4}>
          <Text textTransform="uppercase">Our Introduction</Text>
          <Heading fontSize="5xl" color="brand.white" mb={4}>
            Pure Agriculture and Organic Form
          </Heading>
          <Heading color="brand.main" fontSize="2xl">
            We&apos;re Leader in Agriculture Market
          </Heading>
          <Text opacity=".8">
            There are many variations of passages of available but the majority
            have suffered alteration in some form, by injected humou or
            randomised words even slightly believable.
          </Text>
          <List spacing={3}>
            {listData.map((l, i) => (
              <ListItem
                key={i}
                color="brand.white"
                fontFamily="'Livvic' san-serif"
              >
                <ListIcon as={MdCheckCircle} color="brand.main" />
                <Text display="inline-block" opacity=".8">
                  {l}
                </Text>
              </ListItem>
            ))}
          </List>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default OurIntroduction;
