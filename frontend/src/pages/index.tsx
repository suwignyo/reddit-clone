import {
  Link as ChakraLink,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/core";
import { Box, DarkModeSwitch, Text, NavBar } from "../components";

const Index = () => (
  <div>
    <NavBar></NavBar>
    {/* <DarkModeSwitch /> */}
    <Box variant="small">
      <Text>Hello</Text>
    </Box>
  </div>
);

export default Index;
