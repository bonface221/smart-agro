import { marginX } from "@/app/constants";
import {
  Box,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const pData = [
  {
    id: 1,
    title: "Agriculture",
    desc: "Natural Way of Agriculture",
    img: "/p1.png",
  },
  {
    id: 2,
    title: "Agriculture",
    desc: "Natural Way of Agriculture",
    img: "/p2.png",
  },
  {
    id: 3,
    title: "Agriculture",
    desc: "Natural Way of Agriculture",
    img: "/p3.png",
  },
  {
    id: 4,
    title: "Agriculture",
    desc: "Natural Way of Agriculture",
    img: "/p4.png",
  },
];

const CompletedWork = () => {
  return (
    <Box bg="brand.green" pos="relative">
      <Stack marginX={marginX} py={"5rem"} gap={6}>
        <Text textTransform="uppercase" textAlign="center" opacity=".8">
          RECENTLY COMPLETED WORK
        </Text>
        <Heading
          textTransform="capitalize"
          textAlign="center"
          color="brand.white"
        >
          Explore Our Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} mt="1.5rem" spacing={8}>
          {pData.map((p) => (
            <Stack
              key={p.id}
              borderRadius="lg"
              bgImage={`url(${p.img})`}
              bgSize="cover"
              bgRepeat={"no-repeat"}
              cursor="pointer"
              pos="relative"
              h="350px"
              zIndex={99999}
              overflow="hidden"
              transition="all .3s ease-in-out"
              border="1.5px solid rgba(247, 195, 95,0)"
              _hover={{
                border: "1.5px solid rgba(247, 195, 95,1)",

                transform: "translateY(-15px)",
                ".bg-overlay": {
                  display: "block",
                },
                _after: {
                  content: '""',
                  top: 0,
                  left: 0,
                  pos: "absolute",
                  w: "100%",
                  h: "100%",
                  bg: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.80) 100%)",
                  zIndex: -1,
                },
                ".agri-overlay": {
                  opacity: 1,
                },
              }}
            >
              <Stack
                pos="absolute"
                bottom={0}
                p="0 .4rem .5rem .4rem"
                zIndex={999}
                className="agri-overlay"
                opacity={0}
                transition="all .2s ease-in-out"
              >
                <Heading fontSize="2xl" color="brand.main">
                  {p.title}
                </Heading>
                <Flex>
                  <Heading fontSize="xl" flex={2} color="brand.white">
                    {p.desc}
                  </Heading>
                  <Stack flex={1} align="end">
                    <Image
                      src="/arrow-right.svg"
                      boxSize="30px"
                      alt="arrow-right"
                    />
                  </Stack>
                </Flex>
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
      <Box pos="absolute" bottom="0" left={0}>
        <Image
          src="projects-bg.png"
          alt="projects-bg"
          width="100%"
          height="100%"
          objectFit="cover"
        />
      </Box>
    </Box>
  );
};

export default CompletedWork;
