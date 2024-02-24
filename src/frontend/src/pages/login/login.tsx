import { Button, Divider, Flex, HStack, Input } from "@chakra-ui/react";
import { Title } from "./login-title";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { useLogin } from "./use-login";

export const Login = () => {
  return (
    <HStack w="100vw" h="100vh" alignItems="center">
      <Flex w="30%" height="100%" justifyContent="center" alignItems="center">
        <Title />
      </Flex>
      <Divider orientation="vertical" height="80%" />
      <Flex w="70%" height="100%">
        <EmailAndPasswordLogin />
      </Flex>
    </HStack>
  );
};

const EmailAndPasswordLogin = () => {
  const { signInWithGithub, signInWithGoogle } = useLogin();
  return (
    <Flex
      justifyContent="center"
      alignItems="flex-start"
      flexDirection="column"
      gap="30px"
      w="100%"
      h="100%"
      padding="80px"
    >
      <Input
        placeholder="Username"
        border="none"
        backgroundColor="var(--bg-secondary)"
        width="300px"
      />
      <Input
        placeholder="Password"
        border="none"
        backgroundColor="var(--bg-secondary)"
        width="300px"
      />
      <Flex gap="12px" height="40px">
        <Button
          background="var(--highlight)"
          _hover={{
            background: "var(--accent)",
          }}
          width="80px"
        >
          Login
        </Button>
        <Button
          background="#010409"
          color="white"
          gap="8px"
          onClick={() => signInWithGithub()}
        >
          <FaGithub />
          Github
        </Button>
        <Button
          background="#010409"
          color="white"
          gap="8px"
          onClick={() => signInWithGoogle()}
        >
          <FaGoogle />
          Google
        </Button>
      </Flex>
    </Flex>
  );
};
