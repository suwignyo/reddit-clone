import {
  Link as ChakraLink,
  Text,
  Code,
  Icon,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/core";
import { DarkModeSwitch, NavBar } from "../components";

const Index = () => (
  <div>
    <NavBar></NavBar>
    <DarkModeSwitch />
  </div>
);

export default Index;
