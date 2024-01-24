import { Divider, Flex, HStack } from "@chakra-ui/react";
import { Title } from "./components/title";
import { Login } from "./components/login";

function App() {
  return (
    <HStack w="100vw" h="100vh" alignItems="center">
      <Flex w="30%" height="100%" justifyContent="center" alignItems="center">
        <Title />
      </Flex>
      <Divider orientation="vertical" height="80%" />
      <Flex w="70%" height="100%">
        <Login />
      </Flex>
    </HStack>
  );
}

export default App;
