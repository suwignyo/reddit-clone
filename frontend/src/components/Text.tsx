import { Text as TextComponent } from "@chakra-ui/core";
import React from "react";

interface TextProps {
  color?: string;
}

export const Text: React.FC<TextProps> = ({ color, children }) => {
  return (
    <TextComponent color={!!color ? color : "#5e54ec"}>
      {children}
    </TextComponent>
  );
};
