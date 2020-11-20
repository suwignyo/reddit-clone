import { Box as BoxComponent } from "@chakra-ui/core";
import React from "react";

interface BoxProps {
  variant: "small" | "regular";
}

export const Box: React.FC<BoxProps> = ({ variant, children }) => {
  return (
    <BoxComponent
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </BoxComponent>
  );
};
