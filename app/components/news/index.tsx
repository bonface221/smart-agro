import { marginX } from "@/app/constants";
import {
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const news = [
  {
    id: 1,
    title: "Taking seamless Key indicators offline to",
    date: "Jan 9, 2021",
    by: "Kelvin Martin",
    comments: 2,
    img: "/n1.png",
  },
  {
    id: 2,
    title: "Override the digital divide with additional",
    date: "Jan 3, 2020",
    by: "Kelvin Martin",
    comments: 2,
    img: "/n2.png",
  },
  {
    id: 3,
    title: "Agriculture Matters to the Future of next",
    date: "Jan 3, 2020",
    by: "Kelvin Martin",
    comments: 1,
    img: "/n3.png",
  },
];

const NewsAndArticles = () => {
  return (
    <Stack marginX={marginX} my={"7rem"} gap={6}>
      <Text textTransform="uppercase" textAlign="center" opacity=".8">
        From the blog
      </Text>
      <Heading
        textTransform="capitalize"
        textAlign="center"
        color="brand.white"
      >
        News & Articles
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} mt="2rem" spacing={6}>
        {news.map((n) => (
          <Stack
            key={n.id}
            gap={3}
            bg="#2D442F"
            overflow="hidden"
            borderTopRadius="xl"
          >
            <Image src={n.img} alt={n.title} />
            <Stack p="1rem 1rem 2rem 1rem" gap={4}>
              <Flex gap={3}>
                <Flex align="center" gap={1}>
                  <Image src="/user-icon.svg" alt="user-icon" />
                  <Text>by {n.by}</Text>
                </Flex>
                <Flex align="center" gap={1}>
                  <Image src="/message-icon.svg" alt="message-icon" />
                  <Text>{n.comments} Comments</Text>
                </Flex>
              </Flex>
              <Heading fontSize="xl" color="brand.white">
                {n.title}
              </Heading>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default NewsAndArticles;
