import { VStack, Box } from "@chakra-ui/react";

export const Title = () => {
  const build = () => {
    return "TICKLE".split("").map((letter, i) => {
      return (
        <Box key={i}>
          <span
            style={{
              textShadow: `10px 10px var(--accent)`,
            }}
          >
            {letter}
          </span>
        </Box>
      );
    });
  };

  return (
    <VStack
      color="var(--accent-hard)"
      fontWeight="bold"
      spacing={0}
      fontSize="100px"
      justifyContent="center"
      alignItems="center"
      w="100%"
      h="100%"
    >
      {build()}
    </VStack>
  );
};
