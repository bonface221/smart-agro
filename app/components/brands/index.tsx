import { marginX } from "@/app/constants";
import { Box, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Brands = () => {
  return (
    <SimpleGrid
      marginY="8rem"
      marginX={marginX}
      columns={{ base: 2, sm: 3, md: 6 }}
      spacing={6}
    >
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Box key={item}>
          <Image src="/brand-logo.svg" alt="brand.logo" />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Brands;
