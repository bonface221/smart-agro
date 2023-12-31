import { marginX } from "@/app/constants";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const WatchVideo = () => {
  return (
    <Flex
      h="60vh"
      bgImage="/watch-video-img.png"
      bgSize="cover"
      bgRepeat="no-repeat"
      align="center"
    >
      <Flex
        justify="space-between"
        flexDir={{ base: "column", sm: "row" }}
        gap={{ base: "2rem", sm: "0" }}
        align="center"
        marginX={marginX}
        w="100%"
      >
        <Heading color="brand.white" w="100%">
          Agriculture Matters to the Future of Bangladesh
        </Heading>
        <Stack w="100%" align="center">
          <Box
            border="1px solid rgba(255,255,255,0.7)"
            borderRadius="full"
            p="1rem"
            pos="relative"
          >
            <Box
              bg="brand.white"
              pos="relative"
              w="fit-content"
              borderRadius="full"
              p=".3rem"
            >
              <Image src="/play.svg" alt="play" width={30} height={30} />
            </Box>
            <Image
              style={{
                position: "absolute",
                bottom: "-20%",
                right: "-50%",
                transform: "translateX(50%)",
              }}
              src="/watch-svg.svg"
              alt="watch video"
              width={200}
              height={48}
            />
          </Box>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default WatchVideo;
