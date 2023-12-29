import { marginX } from "@/app/constants";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const BottomCTA = () => {
  return (
    <Stack
      my="4rem"
      h="40vh"
      pos="relative"
      bgImage="/bottom-img.png"
      _after={{
        content: '""',
        pos: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        background:
          "linear-gradient(92deg, rgba(248, 204, 119, 0.80) 44.78%, rgba(248, 204, 119, 0.16) 104.31%)",
      }}
      justify="center"
    >
      <Flex
        marginX={marginX}
        justify="space-between"
        align="center"
        zIndex={999}
      >
        <Flex align="center" gap={8}>
          <Box bg="brand.green" borderRadius="full" p="4">
            <Image src="/m1.svg" alt="bottom-cta-image" />
          </Box>
          <Heading color="brand.green">
            We are Leader in Agriculture Market
          </Heading>
        </Flex>
        <Button
          bg="brand.main"
          w="fit-content"
          borderRadius="20px"
          textTransform="uppercase"
        >
          Discover more
        </Button>
      </Flex>
    </Stack>
  );
};

export default BottomCTA;
