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
  HStack,
  Image,
  useBreakpointValue,
  Badge,
} from '@chakra-ui/react'
import { FaRocket, FaUsers, FaCoins, FaChartLine, FaHandshake, FaLock, FaGlobe, FaShieldAlt, FaPalette, FaLightbulb, FaCheckCircle } from 'react-icons/fa'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import AnimatedPage from '../components/AnimatedPage'

const MotionBox = motion(Box)

const About = () => {
  const bgColor = useColorModeValue('brand.darkerGray', 'brand.darkerGray')
  const borderColor = useColorModeValue('brand.lightGray', 'brand.lightGray')
  const isMobile = useBreakpointValue({ base: true, md: false })

  return (
    <AnimatedPage>
      <Box minH="100vh" bg="brand.darkGray" pt="80px">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={16}>
            {/* Hero Section */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              textAlign="center"
              maxW="800px"
              mx="auto"
              position="relative"
            >
              <Badge
                position="absolute"
                top="-4"
                right="0"
                colorScheme="blue"
                px={3}
                py={1}
                borderRadius="full"
                fontSize="sm"
                fontWeight="medium"
              >
                Beta Access Available
              </Badge>
              <Icon as={FaLightbulb} w={12} h={12} color="brand.blue" mb={4} />
              <Heading 
                size="2xl" 
                color="white" 
                fontFamily="heading"
                lineHeight="1.2"
                mb={4}
                bgGradient="linear(to-r, brand.blue, brand.purple)"
                bgClip="text"
              >
                Revolutionizing Digital Art Trading
              </Heading>
              <Text 
                fontSize="lg" 
                color="brand.lightGray"
                mb={6}
                maxW="600px"
                mx="auto"
              >
                We're building the future of digital art trading, where artists and collectors connect in a secure, 
                transparent, and innovative marketplace powered by blockchain technology.
              </Text>
              <HStack spacing={4} justify="center" mb={8}>
                <Button
                  as={RouterLink}
                  to="/creator"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<FaRocket />}
                  px={6}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Join as Artist
                </Button>
                <Button
                  as={RouterLink}
                  to="/investor"
                  variant="outline"
                  size="lg"
                  leftIcon={<FaChartLine />}
                  px={6}
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                  transition="all 0.2s"
                >
                  Start Collecting
                </Button>
              </HStack>
            </MotionBox>

            {/* Main Content Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {/* Left Column */}
              <VStack spacing={8} align="stretch">
                {/* Mission Box */}
                <Box 
                  bg={bgColor} 
                  p={6} 
                  borderRadius="lg" 
                  border="1px" 
                  borderColor={borderColor}
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, brand.blue, brand.purple)',
                  }}
                >
                  <Heading size="lg" color="white" mb={4} fontFamily="heading">
                    Our Mission
                  </Heading>
                  <Text fontSize="md" color="brand.lightGray" mb={6}>
                    We're on a mission to democratize digital art trading by creating a platform that empowers artists 
                    and collectors alike. Through blockchain technology, we ensure transparency, security, and fair 
                    compensation for all participants in the digital art ecosystem.
                  </Text>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                    <FeatureCard
                      icon={FaPalette}
                      title="For Artists"
                      description="Showcase your digital art, maintain ownership rights, and earn fair compensation."
                      badge="New"
                    />
                    <FeatureCard
                      icon={FaChartLine}
                      title="For Collectors"
                      description="Discover unique digital art pieces and build your collection with confidence."
                      badge="Popular"
                    />
                  </SimpleGrid>
                </Box>

                {/* Stats Grid */}
                <SimpleGrid columns={2} spacing={4}>
                  <StatCard
                    icon={FaUsers}
                    label="Active Artists"
                    value="2,567"
                    helpText="+18% from last month"
                    trend="up"
                  />
                  <StatCard
                    icon={FaCoins}
                    label="Trading Volume"
                    value="$8.5M"
                    helpText="+35% from last month"
                    trend="up"
                  />
                  <StatCard
                    icon={FaChartLine}
                    label="Art Pieces"
                    value="15.2K"
                    helpText="+25% from last month"
                    trend="up"
                  />
                  <StatCard
                    icon={FaHandshake}
                    label="Successful Trades"
                    value="1,234"
                    helpText="+20% from last month"
                    trend="up"
                  />
                </SimpleGrid>
              </VStack>

              {/* Right Column */}
              <VStack spacing={8} align="stretch">
                {/* Values Box */}
                <Box 
                  bg={bgColor} 
                  p={6} 
                  borderRadius="lg" 
                  border="1px" 
                  borderColor={borderColor}
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, brand.blue, brand.purple)',
                  }}
                >
                  <Heading size="lg" color="white" mb={4} fontFamily="heading">
                    Our Values
                  </Heading>
                  <VStack spacing={4}>
                    <ValueCard
                      icon={FaLock}
                      title="Security First"
                      description="Every transaction is secured by blockchain technology, ensuring authenticity and ownership."
                      features={['Smart Contracts', 'Encrypted Data', 'Secure Storage']}
                    />
                    <ValueCard
                      icon={FaGlobe}
                      title="Global Reach"
                      description="Connect with artists and collectors worldwide, breaking down geographical barriers."
                      features={['24/7 Trading', 'Multi-currency', 'Global Network']}
                    />
                    <ValueCard
                      icon={FaHandshake}
                      title="Fair Trading"
                      description="Smart contracts ensure artists receive fair compensation through automated royalties."
                      features={['Automated Royalties', 'Transparent Fees', 'Fair Pricing']}
                    />
                  </VStack>
                </Box>

                {/* Platform Features */}
                <Box 
                  bg={bgColor} 
                  p={6} 
                  borderRadius="lg" 
                  border="1px" 
                  borderColor={borderColor}
                  position="relative"
                  overflow="hidden"
                  _before={{
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: 'linear-gradient(to right, brand.blue, brand.purple)',
                  }}
                >
                  <Heading size="lg" color="white" mb={4} fontFamily="heading">
                    Platform Features
                  </Heading>
                  <VStack spacing={4}>
                    <FeatureCard
                      icon={FaShieldAlt}
                      title="Secure Trading"
                      description="Advanced security measures protect every transaction and artwork."
                      features={['End-to-end Encryption', 'Multi-factor Auth', 'Secure Storage']}
                    />
                    <FeatureCard
                      icon={FaGlobe}
                      title="Global Marketplace"
                      description="Access a worldwide network of artists and collectors."
                      features={['Real-time Trading', 'Global Payments', 'Multi-language']}
                    />
                  </VStack>
                </Box>
              </VStack>
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
    </AnimatedPage>
  )
}

const FeatureCard = ({ icon, title, description, badge, features }: { icon: any; title: string; description: string; badge?: string; features?: string[] }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <VStack
        p={4}
        bg="brand.darkGray"
        rounded="lg"
        align="start"
        spacing={3}
        border="1px"
        borderColor="brand.lightGray"
        h="full"
        position="relative"
      >
        {badge && (
          <Badge
            position="absolute"
            top={2}
            right={2}
            colorScheme="blue"
            variant="solid"
            borderRadius="full"
            px={2}
          >
            {badge}
          </Badge>
        )}
        <Icon as={icon} w={8} h={8} color="brand.blue" />
        <Heading size="sm" color="white" fontFamily="heading">{title}</Heading>
        <Text color="brand.lightGray" fontSize="sm">{description}</Text>
        {features && (
          <VStack align="start" spacing={2} w="full" pt={2}>
            {features.map((feature, index) => (
              <HStack key={index} spacing={2}>
                <Icon as={FaCheckCircle} color="brand.blue" w={4} h={4} />
                <Text color="brand.lightGray" fontSize="xs">{feature}</Text>
              </HStack>
            ))}
          </VStack>
        )}
      </VStack>
    </MotionBox>
  )
}

const ValueCard = ({ icon, title, description, features }: { icon: any; title: string; description: string; features?: string[] }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <HStack
        p={4}
        bg="brand.darkGray"
        rounded="lg"
        spacing={4}
        border="1px"
        borderColor="brand.lightGray"
        align="start"
      >
        <Icon as={icon} w={6} h={6} color="brand.blue" mt={1} />
        <VStack align="start" spacing={2} flex={1}>
          <Heading size="sm" color="white" fontFamily="heading">{title}</Heading>
          <Text color="brand.lightGray" fontSize="sm">{description}</Text>
          {features && (
            <SimpleGrid columns={2} spacing={2} w="full" pt={2}>
              {features.map((feature, index) => (
                <HStack key={index} spacing={2}>
                  <Icon as={FaCheckCircle} color="brand.blue" w={3} h={3} />
                  <Text color="brand.lightGray" fontSize="xs">{feature}</Text>
                </HStack>
              ))}
            </SimpleGrid>
          )}
        </VStack>
      </HStack>
    </MotionBox>
  )
}

const StatCard = ({ icon, label, value, helpText, trend }: { icon: any; label: string; value: string; helpText: string; trend?: 'up' | 'down' }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Box
        p={4}
        bg="brand.darkGray"
        rounded="lg"
        border="1px"
        borderColor="brand.lightGray"
        h="full"
      >
        <Icon as={icon} w={6} h={6} color="brand.blue" mb={2} />
        <Text color="brand.lightGray" fontSize="xs" mb={1}>{label}</Text>
        <Text color="white" fontSize="xl" fontWeight="bold" mb={1}>{value}</Text>
        <HStack spacing={1}>
          <Icon 
            as={trend === 'up' ? FaChartLine : FaChartLine} 
            color={trend === 'up' ? 'green.400' : 'red.400'} 
            w={3} 
            h={3} 
          />
          <Text color={trend === 'up' ? 'green.400' : 'red.400'} fontSize="xs">{helpText}</Text>
        </HStack>
      </Box>
    </MotionBox>
  )
}

export default About 