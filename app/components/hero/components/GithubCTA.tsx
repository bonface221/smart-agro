"use client";

import { Box, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const GithubCTA = () => {
  return (
    <Link
      href="https://github.com/bonface221/smart-agro"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Box position="fixed" right={10} bottom={14} zIndex={9999}>
        <Icon as={FaGithub} boxSize={16} bg="brand.white" borderRadius="md" />
      </Box>
    </Link>
  );
};

export default GithubCTA;
