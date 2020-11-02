import { Box } from "@chakra-ui/core";
import React from "react";

interface ContainerProps {
  variant?: "small" | "regular";
}


export const Container: React.FC<ContainerProps> = ({ variant, children }) => {
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
