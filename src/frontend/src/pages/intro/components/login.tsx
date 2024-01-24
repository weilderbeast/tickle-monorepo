import { Button, Flex, Input } from "@chakra-ui/react";

export const Login = () => {
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
      <Button
        background="var(--highlight)"
        _hover={{
          background: "var(--accent)",
        }}
      >
        Login
      </Button>
    </Flex>
  );
};
