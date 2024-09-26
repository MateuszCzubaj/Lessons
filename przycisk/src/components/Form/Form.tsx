import {
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Input,
  Spacer,
  VStack,
  Box,
  RadioGroup,
  Radio,
  Stack,
  Text,
  Container,
} from "@chakra-ui/react";

const Form = () => (
  <Flex bg="gray.50" h="100vh" align="center" justify="center" p={4}>
    <Flex bg="white" rounded="lg" shadow="lg" width="800px" maxW="90%" p={6}>
      {/* Left side form */}
      <Box w={'70%'} mr={5}>
        <VStack spacing={6} align="flex-center" width="100%">
          <HStack justify="space-between" width="100%">
            <Text fontSize="xl" fontWeight="bold">
              Mortgage Calculator
            </Text>
            <Button variant="link" colorScheme="blue">
              Clear All
            </Button>
          </HStack>

          {/* Mortgage Amount */}

          <VStack align={"flex-start"}>
            <Text>Mortgage Amount</Text>
            <Input
              placeholder="£"
              variant="outline"
              size="lg"
              bg="yellow.50"
              _placeholder={{ color: "gray.500" }}
            />
          </VStack>

          {/* Mortgage Term & Interest Rate */}
          <HStack spacing={4} align={"flex-center"} width={"100%"}>
            <Box>
              <VStack justify={"center"} align={"flex-center"}>
                <Text>Mortgage Term</Text>
                <HStack borderWidth={"2px"} borderRadius={"0.5em"}>
                  <Input
                    placeholder="25"
                    border={"false"}
                    size="lg"
                    width="70px"
                  />
                  <Text bgColor={"lightblue"} p={2} borderRadius={"0.5em"}>
                    years
                  </Text>
                </HStack>
              </VStack>
            </Box>

            <Box w={"100%"}>
              <VStack>
                <Text>Interest Rate</Text>
                <HStack
                  borderWidth={"2px"}
                  borderRadius={"0.5em"}
                  justify={"flex-end"}
                >
                  <Input
                    placeholder="5.25"
                    size="lg"
                    width="70px"
                    border={"false"}
                  />
                  <Text bgColor={"lightblue"} p={2} borderRadius={"0.5em"}>
                    %
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </HStack>

          {/* Mortgage Type */}
          <Box p={1}>
            <Text>Mortgage Type</Text>
            <RadioGroup defaultValue="repayment">
              <VStack spacing={4}>
                <Box
                  borderWidth={1}
                  borderColor={"yellow"}
                  bg={"lightyellow"}
                  p={2}
                  width={"100%"}
                >
                  <Radio value="repayment">Repayment</Radio>
                </Box>
                <Box
                  borderWidth={1}
                  borderColor={"yellow"}
                  bg={"lightyellow"}
                  p={2}
                  width={"100%"}
                >
                  <Radio value="interest-only">Interest Only</Radio>
                </Box>
              </VStack>
            </RadioGroup>
          </Box>

          {/* Calculate Button */}
          <Button colorScheme="yellow" size="lg" width="full" mt={4}>
            Calculate Repayments
          </Button>
        </VStack>
      </Box>

      {/* Right side results */}
      <Box
        bg="gray.900"
        width="50%"
        borderRadius="lg"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={6}
      >
        <Text color="white" fontSize="xl" fontWeight="bold">
          Results shown here
        </Text>
        <Text color="gray.300" textAlign="center" mt={2}>
          Complete the form and click "Calculate Repayments" to see what your
          monthly repayments would be.
        </Text>
      </Box>
    </Flex>
  </Flex>
);

export default Form;
