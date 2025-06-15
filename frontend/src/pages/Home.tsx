import {
  Box,
  Container,
  Image,
  VStack,
  Text,
  useColorModeValue,
  HStack,
  Icon,
  Button,
  Link,
  Grid,
  GridItem,
  Flex,
  Circle,
  useToken,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion } from 'framer-motion'
import { 
  FaArrowRight,
  FaPalette,
  FaChartLine,
  FaShieldAlt,
  FaGlobe,
  FaCoins,
  FaUsers,
  FaLock
} from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'
import selleneLogo from '../assets/Sellene-logo-light.png'
import { TestIPRegistration } from '../components/TestIPRegistration'

const MotionBox = motion.create(Box)

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
  100% { transform: translateY(0px); }
`

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.1); opacity: 0.8; }
  100% { transform: scale(1); opacity: 0.5; }
`

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Home = () => {
  const bgColor = useColorModeValue('brand.darkGray', 'brand.darkGray')
  const [blue, purple] = useToken('colors', ['brand.blue', 'brand.purple'])

  return (
    <AnimatedPage>
      <Box 
        bg={bgColor} 
        h="100vh"
        position="relative"
        overflow="hidden"
        style={{ zIndex: 0 }}
      >
        {/* Animated background elements */}
        <Box
          position="absolute"
          top="10%"
          left="5%"
          w="400px"
          h="400px"
          borderRadius="full"
          bgGradient={`radial(${blue}, ${purple})`}
          opacity="0.1"
          filter="blur(40px)"
          animation={`${float} 8s ease-in-out infinite`}
        />
        <Box
          position="absolute"
          bottom="10%"
          right="5%"
          w="500px"
          h="500px"
          borderRadius="full"
          bgGradient={`radial(${purple}, ${blue})`}
          opacity="0.1"
          filter="blur(40px)"
          animation={`${float} 8s ease-in-out infinite reverse`}
        />

        <Container maxW="container.xl" position="relative" zIndex="1" h="100vh" py={4}>
          <Grid 
            templateRows="1fr"
            gap={4}
            h="full"
          >
            <GridItem>
              <Grid 
                templateColumns={{ base: "1fr", lg: "1fr 1fr" }} 
                gap={8} 
                alignItems="center"
                h="full"
              >
                {/* Left Column - Logo and Main Content */}
                <GridItem>
                  <VStack align="center" spacing={4}>
                    <MotionBox
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8 }}
                      position="relative"
                      w="full"
                      display="flex"
                      justifyContent="center"
                      mb={2}
                    >
                      <Circle
                        size="500px"
                        bgGradient={`radial(${blue}, ${purple})`}
                        opacity="0.1"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        animation={`${pulse} 4s ease-in-out infinite`}
                      />
                      <Image
                        src={selleneLogo}
                        alt="Sellene Logo"
                        w="400px"
                        h="auto"
                        objectFit="contain"
                        filter="drop-shadow(0 0 40px rgba(66, 153, 225, 0.5))"
                        position="relative"
                        zIndex="1"
                      />
                    </MotionBox>

                    <VStack align="start" spacing={4} w="full">
                      <Text
                        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        fontWeight="bold"
                        lineHeight="1.1"
                        bgGradient="linear(to-r, brand.blue, brand.purple, brand.blue)"
                        bgSize="200% auto"
                        bgClip="text"
                        animation={`${pulse} 8s linear infinite`}
                      >
                        Your Art, Your Value
                      </Text>

                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        color="brand.lightGray"
                        maxW="600px"
                        lineHeight="1.6"
                      >
                        Transform your creative works into valuable digital assets. Sell, trade, and earn from your art with our secure blockchain platform.
                      </Text>

                      <HStack spacing={6} pt={2}>
                        <Button
                          as={Link}
                          href="/dashboard"
                          rightIcon={<FaArrowRight />}
                          size="lg"
                          px={8}
                          py={5}
                          fontSize="lg"
                          fontWeight="bold"
                          bgGradient="linear(to-r, brand.blue, brand.purple)"
                          _hover={{
                            transform: 'translateY(-2px)',
                            boxShadow: '0 10px 20px rgba(66, 153, 225, 0.3)',
                            bgGradient: 'linear(to-r, brand.purple, brand.blue)',
                          }}
                          transition="all 0.3s ease"
                        >
                          Start Creating
                        </Button>
                        <Button
                          as={Link}
                          href="/about"
                          variant="outline"
                          size="lg"
                          px={8}
                          py={5}
                          fontSize="lg"
                          color="white"
                          borderColor="whiteAlpha.300"
                          _hover={{
                            bg: 'whiteAlpha.100',
                            borderColor: 'whiteAlpha.500',
                          }}
                        >
                          Learn More
                        </Button>
                      </HStack>
                    </VStack>
                  </VStack>
                </GridItem>

                {/* Right Column - Feature Cards */}
                <GridItem>
                  <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {[
                      {
                        icon: FaPalette,
                        title: "Sell Artworks",
                        description: "List and sell your digital art with secure ownership"
                      },
                      {
                        icon: FaCoins,
                        title: "Earn Royalties",
                        description: "Get paid for every resale of your artwork"
                      },
                      {
                        icon: FaUsers,
                        title: "Global Market",
                        description: "Connect with art collectors worldwide"
                      },
                      {
                        icon: FaShieldAlt,
                        title: "Secure Rights",
                        description: "Protect your intellectual property rights"
                      }
                    ].map((feature, index) => (
                      <MotionBox
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <VStack
                          align="start"
                          p={5}
                          bg="whiteAlpha.50"
                          borderRadius="2xl"
                          backdropFilter="blur(10px)"
                          border="1px"
                          borderColor="whiteAlpha.200"
                          h="full"
                          position="relative"
                          overflow="hidden"
                          _hover={{
                            transform: 'translateY(-4px)',
                            boxShadow: '0 10px 20px rgba(66, 153, 225, 0.2)',
                          }}
                          transition="all 0.3s ease"
                        >
                          <Circle
                            size="40px"
                            bgGradient="linear(to-br, brand.blue, brand.purple)"
                            position="absolute"
                            top="-10px"
                            right="-10px"
                            opacity="0.1"
                          />
                          <Icon as={feature.icon} boxSize={6} color="brand.blue" />
                          <Text fontSize="lg" fontWeight="bold" color="white">
                            {feature.title}
                          </Text>
                          <Text fontSize="sm" color="brand.lightGray">
                            {feature.description}
                          </Text>
                        </VStack>
                      </MotionBox>
                    ))}
                  </Grid>
                </GridItem>
              </Grid>
            </GridItem>
          </Grid>
        </Container>

        {/* Simple Marquee Footer */}
        <Box
          position="fixed"
          bottom="0"
          left="0"
          right="0"
          bg="blackAlpha.900"
          py={4}
          zIndex="1000"
          overflow="hidden"
          whiteSpace="nowrap"
          width="100%"
        >
          <Box
            as="div"
            animation={`${keyframes`
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            `} 35s linear infinite`}
            display="inline-flex"
            width="max-content"
          >
            <Text 
              color="white" 
              fontSize="xl" 
              fontWeight="extrabold" 
              display="inline-block" 
              mx={8}
              letterSpacing="wide"
              textTransform="uppercase"
            >
              TRADE ART • SELL YOUR CREATIONS • BUY UNIQUE PIECES • EARN ROYALTIES • PROTECT YOUR WORK • GLOBAL MARKETPLACE • INSTANT PAYMENTS • SECURE TRANSACTIONS • VERIFIED ARTISTS • EXCLUSIVE COLLECTIONS • DIGITAL GALLERY • ARTIST COMMUNITY • CREATIVE ECONOMY • BLOCKCHAIN ART • FUTURE OF CREATIVITY
            </Text>
            <Text 
              color="white" 
              fontSize="xl" 
              fontWeight="extrabold" 
              display="inline-block" 
              mx={8}
              letterSpacing="wide"
              textTransform="uppercase"
            >
              TRADE ART • SELL YOUR CREATIONS • BUY UNIQUE PIECES • EARN ROYALTIES • PROTECT YOUR WORK • GLOBAL MARKETPLACE • INSTANT PAYMENTS • SECURE TRANSACTIONS • VERIFIED ARTISTS • EXCLUSIVE COLLECTIONS • DIGITAL GALLERY • ARTIST COMMUNITY • CREATIVE ECONOMY • BLOCKCHAIN ART • FUTURE OF CREATIVITY
            </Text>
          </Box>
        </Box>

        <TestIPRegistration />
      </Box>
    </AnimatedPage>
  )
}

export default Home 