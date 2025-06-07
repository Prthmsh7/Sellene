import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRocket, FaChartLine, FaLock, FaExchangeAlt, FaUsers } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'

const MotionBox = motion(Box)

const Feature = ({ icon, title, text }: { icon: any; title: string; text: string }) => {
  return (
    <Stack spacing={4} align="center" textAlign="center">
      <Icon as={icon} w={10} h={10} color="brand.blue" />
      <Text fontWeight="bold" fontSize="xl" color="white">{title}</Text>
      <Text color="brand.lightGray">{text}</Text>
    </Stack>
  )
}

const Home = () => {
  const bgColor = useColorModeValue('brand.darkGray', 'brand.darkGray')
  const borderColor = useColorModeValue('brand.lightGray', 'brand.lightGray')

  return (
    <AnimatedPage>
      <Box bg={bgColor} minH="100vh">
        {/* Hero Section */}
        <Box py={20} bg="brand.darkerGray">
          <Container maxW="1200px">
            <Flex
              direction="column"
              align="center"
              justify="center"
              gap={8}
            >
              <VStack align="center" spacing={6} flex={1} maxW="800px">
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Heading
                    size="2xl"
                    color="white"
                    fontFamily="heading"
                    textAlign="center"
                    fontSize={{ base: "4xl", md: "6xl" }}
                    lineHeight="1.2"
                  >
                    Welcome to Sillycon
                  </Heading>
                  <Text
                    fontSize="xl"
                    color="brand.lightGray"
                    mt={4}
                    textAlign="center"
                    maxW="600px"
                    mx="auto"
                  >
                    A platform for developers, by developers. Join our community of innovators and creators.
                  </Text>
                </MotionBox>
                <HStack spacing={4} justify="center">
                  <Button
                    as={RouterLink}
                    to="/dashboard"
                    colorScheme="blue"
                    size="lg"
                    leftIcon={<FaRocket />}
                    px={8}
                    py={6}
                    fontSize="lg"
                  >
                    Get Started
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/about"
                    variant="outline"
                    size="lg"
                    leftIcon={<FaChartLine />}
                    px={8}
                    py={6}
                    fontSize="lg"
                    _hover={{
                      bg: "brand.blue",
                      color: "white",
                      borderColor: "brand.blue"
                    }}
                  >
                    Learn More
                  </Button>
                </HStack>
              </VStack>
            </Flex>
          </Container>
        </Box>

        {/* Features Section */}
        <Box py={20}>
          <Container maxW="1200px">
            <VStack spacing={12}>
              <VStack spacing={4} textAlign="center">
                <Heading color="white" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }}>Why Choose Sillycon</Heading>
                <Text color="brand.lightGray" maxW="600px" fontSize="lg">
                  Our platform offers unique features to help developers and creators succeed
                </Text>
              </VStack>

              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
                <Feature
                  icon={FaLock}
                  title="Secure Development"
                  text="Your code and projects are protected with state-of-the-art security measures"
                />
                <Feature
                  icon={FaExchangeAlt}
                  title="Easy Collaboration"
                  text="Work seamlessly with other developers on our platform"
                />
                <Feature
                  icon={FaUsers}
                  title="Growing Community"
                  text="Join a vibrant community of developers and innovators"
                />
              </SimpleGrid>
            </VStack>
          </Container>
        </Box>

        {/* CTA Section */}
        <Box py={20} bg="brand.darkerGray">
          <Container maxW="1200px">
            <VStack spacing={8} textAlign="center">
              <Heading color="white" fontFamily="heading" fontSize={{ base: "3xl", md: "4xl" }}>Ready to Join?</Heading>
              <Text color="brand.lightGray" maxW="600px" fontSize="lg">
                Start your journey with Sillycon today and be part of our growing community
              </Text>
              <Button
                as={RouterLink}
                to="/dashboard"
                colorScheme="blue"
                size="lg"
                leftIcon={<FaRocket />}
                px={8}
                py={6}
                fontSize="lg"
              >
                Launch Dashboard
              </Button>
            </VStack>
          </Container>
        </Box>
      </Box>
    </AnimatedPage>
  )
}

export default Home 