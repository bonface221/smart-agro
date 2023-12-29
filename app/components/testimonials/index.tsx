import { marginX } from "@/app/constants";
import { Heading, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Testimonials = () => {
  return (
    <Stack marginX={marginX} py={"5rem"} gap={6}>
      <Text textTransform="uppercase" textAlign="center" opacity=".8">
        Our Testimonials
      </Text>
      <Heading
        textTransform="capitalize"
        textAlign="center"
        color="brand.white"
      >
        WHAT THEY&apos;RE TAKING ABOUT
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        mt="2rem"
        spacing={2}
        marginX={marginX}
      >
        <Stack align="center" pos="relative" justify="center">
          <Image
            src="/testimonial-img.jpg"
            borderRadius="full"
            boxSize="250px"
            objectFit="cover"
            alt="testimonial-img"
          />
          <Image
            src="/quote.svg"
            pos="absolute"
            top="-20px"
            left="50%"
            transform="translateX(50%)"
            alt="quote-img"
          />
        </Stack>
        <Stack spacing="6">
          <Text opacity=".8">
            “Lorem ipsum dolor sit amet consectetur. Tortor tempus cursus leo
            dictumst elementum. Sagittis elit turpis dignissim turpis tristique
            venenatis. Tempor id commodo odio nunc id volutpat libero. Ut
            hendrerit malesuada netus sapien dictum sapien nibh. Cras laoreet
            risus mus mi commodo volutpat quis neque. Scelerisque at in in id
            donec ornare velit. Posuere amet lobortis volutpat purus mauris.
            Tortor magna non turpis ultricies iaculis rhoncus. Volutpat lectus
            proin pellentesque platea.”
          </Text>
          <Stack>
            <Heading fontSize="lg" color="brand.white">
              John Doe
            </Heading>
            <Text opacity=".8">CEO, ABC Company</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Stack>
  );
};

export default Testimonials;
