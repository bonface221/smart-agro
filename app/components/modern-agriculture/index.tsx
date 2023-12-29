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
    <Grid gridTemplateColumns="repeat(5,1fr)">
      <GridItem colSpan={2}>
        <Image src="/modern-agri-img.png" alt="modern-agri-img" />
      </GridItem>
      <GridItem colSpan={3}>
        <Stack>
          <Text>Modern Agriculture</Text>
          <Heading>Providing High Quality Products</Heading>

          {modernData.map((item) => (
            <Flex key={item.id} gap={2}>
              <Box>
                <Image src={item.img} alt={item.title} />
              </Box>
              <Stack>
                <Heading>{item.title}</Heading>
                <Text>{item.desc}</Text>
              </Stack>
            </Flex>
          ))}
        </Stack>
      </GridItem>
    </Grid>
  );
};

export default ModernAgriculture;
