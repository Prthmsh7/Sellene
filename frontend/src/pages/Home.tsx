import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VStack,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRocket, FaChartLine, FaLock, FaExchangeAlt, FaUsers, FaArrowRight } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import AnimatedPage from '../components/AnimatedPage'
import selleneLogo from '../assets/Sellene-logo-light.png'

const MotionBox = motion(Box)
const MotionText = motion(Text)
const MotionHeading = motion(Heading)

const MarqueeText = ({ text }: { text: string }) => (
  <MotionBox
    whiteSpace="nowrap"
    display="inline-block"
    px={4}
    animate={{
      x: [0, -1000],
    }}
    transition={{
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    }}
  >
    <Text
      fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
      fontWeight="900"
      color="white"
      fontFamily="'Space Grotesk', sans-serif"
      textShadow={`
        -1px -1px 0 #000,
        1px -1px 0 #000,
        -1px 1px 0 #000,
        1px 1px 0 #000,
        2px 2px 4px rgba(0,0,0,0.5)
      `}
      letterSpacing="wider"
    >
      {text}
    </Text>
  </MotionBox>
)

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

  const features = [
    {
      icon: FaLock,
      title: 'Secure IP Protection',
      description: 'State-of-the-art security for your intellectual property',
    },
    {
      icon: FaExchangeAlt,
      title: 'Easy Trading',
      description: 'Seamless trading of tokenized assets',
    },
    {
      icon: FaUsers,
      title: 'Growing Community',
      description: 'Join our vibrant creator and investor network',
    },
  ]

  return (
    <AnimatedPage>
      <Box minH="100vh" bg={bgColor} overflow="hidden">
        {/* Hero Section */}
        <Box position="relative" minH="100vh" display="flex" alignItems="center">
          {/* Animated Background */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="brand.darkerGray"
            opacity={0.1}
            _before={{
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'radial-gradient(circle at 50% 50%, brand.blue 0%, transparent 50%)',
              opacity: 0.1,
              animation: 'pulse 4s ease-in-out infinite',
            }}
          />

          <Container maxW="1400px" position="relative" zIndex={1}>
            <Flex
              direction={{ base: 'column', lg: 'row' }}
              align="center"
              justify="space-between"
              gap={12}
              py={20}
            >
              {/* Left Content */}
              <VStack
                align={{ base: 'center', lg: 'start' }}
                spacing={8}
                flex={1}
                textAlign={{ base: 'center', lg: 'left' }}
              >
                <MotionBox
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={selleneLogo}
                    alt="Sellene Logo"
                    h={{ base: '120px', md: '160px', lg: '200px' }}
                    mb={8}
                    objectFit="contain"
                    maxW="100%"
                  />
                </MotionBox>

                <MotionHeading
                  size="2xl"
                  color="white"
                  fontFamily="heading"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Revolutionizing IP Tokenization
                </MotionHeading>

                <MotionText
                  fontSize="xl"
                  color="brand.lightGray"
                  maxW="600px"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Transform your creative work into tradeable assets. Join the future of intellectual property ownership.
                </MotionText>

                <HStack
                  spacing={6}
                  justify={{ base: 'center', lg: 'start' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Button
                    as={RouterLink}
                    to="/dashboard"
                    colorScheme="blue"
                    size="lg"
                    rightIcon={<FaArrowRight />}
                    _hover={{ transform: 'translateY(-2px)' }}
                    transition="all 0.2s"
                  >
                    Get Started
                  </Button>
                  <Button
                    as={RouterLink}
                    to="/about"
                    variant="outline"
                    size="lg"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  >
                    Learn More
                  </Button>
                </HStack>
              </VStack>

              {/* Right Content - Animated Features */}
              <VStack
                spacing={8}
                flex={1}
                align="stretch"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {features.map((feature, index) => (
                  <MotionBox
                    key={index}
                    bg="brand.darkerGray"
                    p={6}
                    borderRadius="lg"
                    border="1px"
                    borderColor={borderColor}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <HStack spacing={4}>
                      <Icon as={feature.icon} w={8} h={8} color="brand.blue" />
                      <VStack align="start" spacing={1}>
                        <Text fontWeight="bold" color="white" fontSize="lg">
                          {feature.title}
                        </Text>
                        <Text color="brand.lightGray">
                          {feature.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </MotionBox>
                ))}
              </VStack>
            </Flex>
          </Container>
        </Box>

        {/* Marquee Section */}
        <Box
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          bg="brand.darkerGray"
          py={6}
          overflow="hidden"
          borderTop="1px"
          borderColor={borderColor}
        >
          <Flex
            whiteSpace="nowrap"
            overflow="hidden"
            position="relative"
            _before={{
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '150px',
              background: 'linear-gradient(to right, brand.darkerGray, transparent)',
              zIndex: 1,
            }}
            _after={{
              content: '""',
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '150px',
              background: 'linear-gradient(to left, brand.darkerGray, transparent)',
              zIndex: 1,
            }}
          >
            <MotionBox
              display="inline-flex"
              animate={{
                x: [0, -2000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...Array(3)].map((_, i) => (
                <HStack key={i} spacing={6} mx={4}>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    fontFamily="'Space Grotesk', sans-serif"
                    textShadow={`
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      2px 2px 4px rgba(0,0,0,0.5)
                    `}
                    letterSpacing="tight"
                    textTransform="uppercase"
                  >
                    Tokenize
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    opacity={0.5}
                    mx={-2}
                  >
                    •
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    fontFamily="'Space Grotesk', sans-serif"
                    textShadow={`
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      2px 2px 4px rgba(0,0,0,0.5)
                    `}
                    letterSpacing="tight"
                    textTransform="uppercase"
                  >
                    Trade
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    opacity={0.5}
                    mx={-2}
                  >
                    •
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    fontFamily="'Space Grotesk', sans-serif"
                    textShadow={`
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      2px 2px 4px rgba(0,0,0,0.5)
                    `}
                    letterSpacing="tight"
                    textTransform="uppercase"
                  >
                    Own
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    opacity={0.5}
                    mx={-2}
                  >
                    •
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    fontFamily="'Space Grotesk', sans-serif"
                    textShadow={`
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      2px 2px 4px rgba(0,0,0,0.5)
                    `}
                    letterSpacing="tight"
                    textTransform="uppercase"
                  >
                    Create
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    opacity={0.5}
                    mx={-2}
                  >
                    •
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
                    fontWeight="1000"
                    color="white"
                    fontFamily="'Space Grotesk', sans-serif"
                    textShadow={`
                      -1px -1px 0 #000,
                      1px -1px 0 #000,
                      -1px 1px 0 #000,
                      1px 1px 0 #000,
                      2px 2px 4px rgba(0,0,0,0.5)
                    `}
                    letterSpacing="tight"
                    textTransform="uppercase"
                  >
                    Innovate
                  </Text>
                </HStack>
              ))}
            </MotionBox>
          </Flex>
        </Box>
      </Box>
    </AnimatedPage>
  )
}

export default Home 