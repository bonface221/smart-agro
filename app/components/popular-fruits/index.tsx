import { fruits, marginX } from "@/app/constants";
import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

const PopularFruits = () => {
  return (
    <Stack marginX={marginX} my={{ base: "2.5rem", sm: "5rem" }} gap={6}>
      <Text textTransform="uppercase" textAlign="center" opacity=".8">
        Popular foods and vegetables
      </Text>
      <Heading
        textTransform="capitalize"
        textAlign="center"
        color="brand.white"
      >
        Quality Fruits & Vegetables
      </Heading>
      <SimpleGrid columns={{ base: 2, md: 6 }} spacing={5}>
        {fruits.map((fruit) => (
          <Stack
            key={fruit.id}
            p="33px 57px"
            bg="rgba(217, 217, 217, 0.10)"
            borderRadius="15px"
            transition="all .3s ease-in-out"
            _hover={{
              bg: "brand.main",
            }}
            align="center"
          >
            <Image src={fruit.image} width={60} height={60} alt={fruit.name} />
            <Text>{fruit.name}</Text>
          </Stack>
        ))}
        <Stack></Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default PopularFruits;
