import { Box } from "@chakra-ui/core";
import React from "react";

interface ContainerProps {
  variant?: "small" | "regular";
  // children: React.ReactNode
}



export function Container({ children, variant }: ContainerProps) {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
}
