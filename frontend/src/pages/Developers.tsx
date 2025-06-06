import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Button,
  useColorModeValue,
  Icon,
  Flex,
  Code,
  HStack,
  Badge,
  Link,
} from '@chakra-ui/react'
import { FaGithub, FaBook, FaCode, FaRocket, FaTerminal } from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'

const Developers = () => {
  const bgColor = useColorModeValue('brand.darkerGray', 'brand.darkerGray')
  const borderColor = useColorModeValue('brand.lightGray', 'brand.lightGray')

  const resources = [
    {
      title: 'API Documentation',
      description: 'Comprehensive guide to our REST API endpoints and authentication',
      icon: FaBook,
      link: '#',
      badge: 'New',
    },
    {
      title: 'SDK Examples',
      description: 'Code samples and examples for our JavaScript and Python SDKs',
      icon: FaCode,
      link: '#',
      badge: 'Popular',
    },
    {
      title: 'Quick Start',
      description: 'Get started with our platform in less than 5 minutes',
      icon: FaRocket,
      link: '#',
    },
    {
      title: 'CLI Tool',
      description: 'Command-line interface for managing your digital assets',
      icon: FaTerminal,
      link: '#',
    },
  ]

  return (
    <AnimatedPage>
      <Box minH="100vh" bg="brand.darkGray" pt="80px">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={12} align="stretch">
            {/* Header */}
            <VStack spacing={4} align="start">
              <Heading color="white" size="2xl">Developers</Heading>
              <Text color="brand.lightGray" fontSize="lg">
                Build the future of digital art with our powerful APIs and tools
              </Text>
            </VStack>

            {/* Quick Start */}
            <Box
              bg={bgColor}
              p={8}
              borderRadius="lg"
              border="1px"
              borderColor={borderColor}
            >
              <VStack spacing={6} align="start">
                <Heading size="lg" color="white">Quick Start</Heading>
                <Code
                  p={4}
                  borderRadius="md"
                  bg="brand.darkGray"
                  color="white"
                  w="full"
                  fontSize="sm"
                >
                  npm install @sellene/sdk
                </Code>
                <Text color="brand.lightGray">
                  Initialize the SDK with your API key to get started
                </Text>
                <Code
                  p={4}
                  borderRadius="md"
                  bg="brand.darkGray"
                  color="white"
                  w="full"
                  fontSize="sm"
                >
                  {`const sellene = new SelleneSDK({
  apiKey: 'your-api-key',
  environment: 'production'
});`}
                </Code>
              </VStack>
            </Box>

            {/* Resources Grid */}
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color="white">Resources</Heading>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                {resources.map((resource) => (
                  <Box
                    key={resource.title}
                    bg={bgColor}
                    p={6}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    transition="transform 0.2s"
                    _hover={{ transform: 'translateY(-4px)' }}
                  >
                    <VStack align="start" spacing={4}>
                      <HStack spacing={4}>
                        <Icon as={resource.icon} boxSize={6} color="brand.blue" />
                        <Heading size="md" color="white">
                          {resource.title}
                        </Heading>
                        {resource.badge && (
                          <Badge colorScheme="blue" px={2} py={1} borderRadius="md">
                            {resource.badge}
                          </Badge>
                        )}
                      </HStack>
                      <Text color="brand.lightGray">
                        {resource.description}
                      </Text>
                      <Button
                        as={Link}
                        href={resource.link}
                        colorScheme="blue"
                        variant="outline"
                        size="sm"
                      >
                        Learn More
                      </Button>
                    </VStack>
                  </Box>
                ))}
              </SimpleGrid>
            </VStack>

            {/* Community Section */}
            <Box
              bg={bgColor}
              p={8}
              borderRadius="lg"
              border="1px"
              borderColor={borderColor}
            >
              <VStack spacing={6} align="start">
                <Heading size="lg" color="white">Join Our Community</Heading>
                <Text color="brand.lightGray">
                  Connect with other developers, share your projects, and get help from our team
                </Text>
                <HStack spacing={4}>
                  <Button
                    leftIcon={<FaGithub />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    GitHub
                  </Button>
                  <Button
                    leftIcon={<FaBook />}
                    colorScheme="blue"
                    variant="outline"
                  >
                    Discord
                  </Button>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>
    </AnimatedPage>
  )
}

export default Developers 