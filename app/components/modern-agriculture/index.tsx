import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

const modernData = [
  {
    id: 1,
    title: "Our Agriculture Growth",
    desc: "Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor",
    img: "/m1.svg",
  },
  {
    id: 2,
    title: "Making Healthy Foods",
    desc: "Lorem ipsum dolor sit amet consectetur. Cursus purus at tempus arcu. Metus elit auctor",
    img: "/m2.svg",
  },
];

const ModernAgriculture = () => {
  return (
    <Grid
      gridTemplateColumns={{ base: "1fr", md: "repeat(5,1fr)" }}
      my={{ base: "1.8rem", sm: "3rem" }}
    >
      <GridItem
        colSpan={{ base: "auto", md: 2 }}
        pos="relative"
        _after={{
          content: "url('/modern-badge.png')",
          pos: "absolute",
          top: 0,
          right: 0,
          transform: { base: "translateX(0%)", md: "translateX(50%)" },
          zIndex: 99,
        }}
      >
        <Image
          h="100%"
          objectFit="cover"
          src="/modern-agri-img.png"
          alt="modern-agri-img"
        />
      </GridItem>
      <GridItem colSpan={3} p="4rem" bg="brand.lightGreen" pos="relative">
        <Stack gap={8}>
          <Text textTransform="uppercase" zIndex={99}>
            Modern Agriculture
          </Text>
          <Heading
            color="brand.white"
            fontSize={{ base: "2xl", md: "5xl" }}
            maxW="xl"
            zIndex={99}
          >
            Providing High Quality Products
          </Heading>

          {modernData.map((item) => (
            <Flex
              key={item.id}
              gap={4}
              align="center"
              flexDir={{ base: "column", sm: "row" }}
            >
              <Box bg="brand.green" borderRadius="full" p="4">
                <Image src={item.img} alt={item.title} />
              </Box>
              <Stack>
                <Heading color="brand.white" fontSize="2xl">
                  {item.title}
                </Heading>
                <Text fontSize="lg" maxW="xl">
                  {item.desc}
                </Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
        <Box pos="absolute" top={0} right="0">
          <Image src="/modern-sm.png" alt="modern-sm" />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default ModernAgriculture;
