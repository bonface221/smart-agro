import { marginX } from "@/app/constants";
import {
  Box,
  Button,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React from "react";

const ContactUs = () => {
  return (
    <Box marginX={marginX} my="6rem">
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
        <Stack gap={4}>
          <Text textTransform="uppercase" opacity=".8">
            Contact Now
          </Text>
          <Heading textTransform="uppercase" color="brand.white">
            Get In Touch Now
          </Heading>
          <Text opacity=".8">
            Lorem ipsum dolor sit amet, adipiscing elit. In hac habitasse platea
            dictumst. Duis porta,quam ut finibus ultrices.
          </Text>

          <Stack>
            <Text opacity=".8" textTransform="uppercase">
              Phone
            </Text>
            <Text>+234 123 456 7890</Text>
            <Text>+880987654321</Text>
          </Stack>

          <Stack>
            <Text opacity=".8" textTransform="uppercase">
              Email
            </Text>
            <Text>needhelp@company.com</Text>
          </Stack>

          <Stack>
            <Text opacity=".8" textTransform="uppercase">
              Address
            </Text>
            <Text>Road No. 8, Niketan, Dhaka, Bangladesh</Text>
          </Stack>
        </Stack>
        <Stack gap={8}>
          <Input
            placeholder="Your Name"
            bg="brand.green"
            border="none"
            py="1.5rem"
            _placeholder={{
              color: "brand.white",
              opacity: 0.8,
              fontSize: "sm",
            }}
          />
          <Input
            placeholder="Phone Number"
            bg="brand.green"
            border="none"
            py="1.5rem"
            _placeholder={{
              color: "brand.white",
              opacity: 0.8,
              fontSize: "sm",
            }}
          />
          <Input
            type="email"
            placeholder="Your Email"
            bg="brand.green"
            border="none"
            py="1.5rem"
            _placeholder={{
              color: "brand.white",
              opacity: 0.8,
              fontSize: "sm",
            }}
          />
          <Textarea
            placeholder="Your Message"
            bg="brand.green"
            border="none"
            _placeholder={{
              color: "brand.white",
              opacity: 0.8,
              fontSize: "sm",
            }}
          />

          <Button bg="brand.main" w="fit-content" borderRadius="20px">
            Send Message
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

export default ContactUs;
