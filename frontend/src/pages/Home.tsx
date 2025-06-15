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
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
} from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { motion, useAnimation } from 'framer-motion'
import { 
  FaGithub, 
  FaTwitter, 
  FaDiscord, 
  FaRocket, 
  FaUsers, 
  FaChartLine, 
  FaLock, 
  FaExchangeAlt,
  FaShieldAlt,
  FaGlobe,
  FaRobot,
  FaWallet
} from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import AnimatedPage from '../components/AnimatedPage'
import selleneLogo from '../assets/Sellene-logo-light.png'

const MotionBox = motion(Box)

// Animations
const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`

const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

const glow = keyframes`
  0% { filter: drop-shadow(0 0 20px rgba(66, 153, 225, 0.3)); }
  50% { filter: drop-shadow(0 0 30px rgba(66, 153, 225, 0.5)); }
  100% { filter: drop-shadow(0 0 20px rgba(66, 153, 225, 0.3)); }
`

const slideIn = keyframes`
  from { transform: translateX(-100%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const FeatureCard = ({ icon, title, description, delay }: { 
  icon: any; 
  title: string; 
  description: string;
  delay: number;
}) => (
  <MotionBox
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    bg="whiteAlpha.50"
    p={6}
    borderRadius="xl"
    backdropFilter="blur(10px)"
    border="1px"
    borderColor="whiteAlpha.200"
    _hover={{ 
      transform: 'translateY(-5px) scale(1.02)',
      borderColor: 'brand.blue',
      boxShadow: '0 10px 30px rgba(66, 153, 225, 0.2)'
    }}
    transition="all 0.3s ease"
    h="full"
  >
    <VStack align="start" spacing={4} h="full">
      <Box 
        p={3} 
        borderRadius="lg" 
        bg="whiteAlpha.100"
        color="brand.blue"
      >
        <Icon as={icon} boxSize={6} />
      </Box>
      <Text 
        fontWeight="bold" 
        color="white" 
        fontSize="xl"
        bgGradient="linear(to-r, brand.blue, brand.purple)"
        bgClip="text"
      >
        {title}
      </Text>
      <Text color="brand.lightGray" fontSize="md" lineHeight="tall">
        {description}
      </Text>
    </VStack>
  </MotionBox>
)

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <MotionBox
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    textAlign="center"
    p={4}
  >
    <Text
      fontSize="3xl"
      fontWeight="bold"
      bgGradient="linear(to-r, brand.blue, brand.purple)"
      bgClip="text"
      mb={2}
    >
      {value}
    </Text>
    <Text color="brand.lightGray" fontSize="sm">
      {label}
    </Text>
  </MotionBox>
)

const Home = () => {
  const bgColor = useColorModeValue('brand.darkGray', 'brand.darkGray')
  const borderColor = useColorModeValue('brand.lightGray', 'brand.lightGray')
  const controls = useAnimation()

  const features = [
    {
      icon: FaUsers,
      title: "For Creators",
      description: "Transform your creative work into tradeable assets. Reach global investors and monetize your intellectual property like never before."
    },
    {
      icon: FaChartLine,
      title: "For Investors",
      description: "Access a new class of digital assets. Invest in promising creative works and participate in the future of intellectual property trading."
    },
    {
      icon: FaShieldAlt,
      title: "Secure & Protected",
      description: "Advanced blockchain security ensures your assets are protected. Smart contracts guarantee fair trading and ownership rights."
    },
    {
      icon: FaExchangeAlt,
      title: "Cross-Chain Trading",
      description: "Trade seamlessly across multiple blockchains. Our platform provides liquidity and accessibility across the entire crypto ecosystem."
    },
    {
      icon: FaRobot,
      title: "AI-Powered",
      description: "Leverage cutting-edge AI for asset valuation and market analysis. Make informed decisions with real-time insights and predictions."
    },
    {
      icon: FaWallet,
      title: "Easy Integration",
      description: "Connect your existing wallet and start trading. Support for multiple wallets and chains makes it easy to get started."
    }
  ]

  const stats = [
    { value: "100K+", label: "Active Users" },
    { value: "$50M+", label: "Trading Volume" },
    { value: "10K+", label: "Assets Listed" },
    { value: "24/7", label: "Support" }
  ]

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    })
  }, [controls])

  return (
    <AnimatedPage>
      <Box 
        bg={bgColor} 
        minH="100vh"
        position="relative"
        overflow="hidden"
      >
        {/* Animated background gradient */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bgGradient="linear(to-br, brand.darkGray, brand.darkerGray, brand.darkGray)"
          bgSize="200% 200%"
          animation={`${gradient} 15s ease infinite`}
          opacity="0.5"
          zIndex="0"
        />

        {/* Hero Section */}
        <Container maxW="container.xl" position="relative" zIndex="1" pt={20}>
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center" minH="80vh">
            <GridItem>
              <VStack align="start" spacing={8}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  animate={controls}
                  animation={`${float} 6s ease-in-out infinite, ${glow} 3s ease-in-out infinite`}
                >
                  <Image
                    src={selleneLogo}
                    alt="Sellene Logo"
                    w="300px"
                    h="auto"
                    objectFit="contain"
                    filter="drop-shadow(0 0 20px rgba(66, 153, 225, 0.3))"
                  />
                </MotionBox>

                <VStack align="start" spacing={6}>
                  <Text
                    fontSize={{ base: "4xl", md: "5xl" }}
                    fontWeight="bold"
                    lineHeight="1.2"
                    bgGradient="linear(to-r, brand.blue, brand.purple, brand.blue)"
                    bgSize="200% auto"
                    bgClip="text"
                    animation={`${gradient} 8s linear infinite`}
                  >
                    The Future of Intellectual Property Trading
                  </Text>

                  <Text
                    fontSize="xl"
                    color="brand.lightGray"
                    maxW="600px"
                    lineHeight="1.6"
                  >
                    Join the revolution in digital asset ownership. Tokenize, trade, and protect your creative work on the blockchain with our cutting-edge platform.
                  </Text>

                  <HStack spacing={6} pt={4}>
                    <Button
                      as={Link}
                      href="/dashboard"
                      rightIcon={<FaRocket />}
                      size="lg"
                      px={8}
                      py={6}
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
                      Launch App
                    </Button>
                    <HStack spacing={4}>
                      {[
                        { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
                        { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
                        { icon: FaDiscord, href: 'https://discord.com', label: 'Discord' },
                      ].map((social, index) => (
                        <Button
                          key={index}
                          as={Link}
                          href={social.href}
                          isExternal
                          variant="ghost"
                          color="white"
                          size="lg"
                          px={4}
                          _hover={{
                            color: 'brand.blue',
                            transform: 'translateY(-2px)',
                            bg: 'whiteAlpha.100',
                          }}
                          transition="all 0.3s ease"
                        >
                          <Icon as={social.icon} boxSize={6} />
                        </Button>
                      ))}
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
            </GridItem>

            <GridItem display={{ base: "none", lg: "block" }}>
              <SimpleGrid columns={2} spacing={6}>
                {features.slice(0, 4).map((feature, index) => (
                  <FeatureCard key={index} {...feature} delay={index * 0.1} />
                ))}
              </SimpleGrid>
            </GridItem>
          </Grid>

          {/* Stats Section */}
          <Box py={16}>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8}>
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} />
              ))}
            </SimpleGrid>
          </Box>

          {/* Features Grid */}
          <Box py={16}>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              textAlign="center"
              mb={12}
              bgGradient="linear(to-r, brand.blue, brand.purple)"
              bgClip="text"
            >
              Why Choose Sellene?
            </Text>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} delay={index * 0.1} />
              ))}
            </SimpleGrid>
          </Box>
        </Container>

        {/* Marquee Section */}
        <Box 
          w="full" 
          bg="brand.darkerGray" 
          py={4}
          overflow="hidden"
          borderTop="1px"
          borderColor={borderColor}
          position="relative"
          zIndex="1"
        >
          <Flex
            position="relative"
            w="200%"
            animation={`${slideIn} 30s linear infinite`}
            _hover={{ animationPlayState: 'paused' }}
          >
            <Text
              fontSize="2xl"
              fontWeight="900"
              letterSpacing="wider"
              fontFamily="heading"
              textTransform="uppercase"
              bgGradient="linear(to-r, brand.blue, brand.purple, brand.blue)"
              bgSize="200% auto"
              bgClip="text"
              animation={`${gradient} 8s linear infinite`}
              filter="drop-shadow(0 0 10px rgba(66, 153, 225, 0.3))"
              whiteSpace="nowrap"
            >
              {"Tokenize • Trade • Protect • Innovate • "}
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="900"
              letterSpacing="wider"
              fontFamily="heading"
              textTransform="uppercase"
              bgGradient="linear(to-r, brand.blue, brand.purple, brand.blue)"
              bgSize="200% auto"
              bgClip="text"
              animation={`${gradient} 8s linear infinite`}
              filter="drop-shadow(0 0 10px rgba(66, 153, 225, 0.3))"
              whiteSpace="nowrap"
            >
              {"Tokenize • Trade • Protect • Innovate • "}
            </Text>
          </Flex>
        </Box>
      </Box>
    </AnimatedPage>
  )
}

export default Home 