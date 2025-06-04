import { Box, Heading, Text, SimpleGrid, Button, VStack, Container, HStack, Icon, Stat, StatLabel, StatNumber, StatHelpText, Image, Flex, Badge } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRocket, FaChartLine, FaUsers, FaCoins, FaLock, FaGlobe, FaShieldAlt, FaLightbulb, FaHandshake } from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'

const MotionBox = motion(Box)

const About = () => {
  return (
    <AnimatedPage>
      <Box>
        {/* Hero Section */}
        <Box textAlign="center" py={20} bg="brand.darkGray" mb={16}>
          <Container maxW="1200px">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon as={FaRocket} w={12} h={12} color="brand.blue" mb={4} />
              <Heading size="2xl" mb={6} color="white" fontFamily="heading">
                About ARTICUNO
              </Heading>
              <Text fontSize="xl" color="brand.lightGray" maxW="800px" mx="auto" mb={8}>
                We're revolutionizing how creative works are valued, shared, and monetized through blockchain technology.
                Our platform enables fractional ownership of intellectual property, making it accessible to everyone.
              </Text>
            </MotionBox>
          </Container>
        </Box>

        {/* Mission Section */}
        <Container maxW="1200px" mb={16}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <VStack align="start" spacing={6}>
              <Heading size="xl" color="white" fontFamily="heading">
                Our Mission
              </Heading>
              <Text fontSize="lg" color="brand.lightGray">
                We believe that creativity should be accessible to everyone. Our mission is to democratize access to creative works
                by enabling fractional ownership through blockchain technology. We're building a future where creators can
                monetize their work directly and investors can participate in the success of creative projects.
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/creator"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<FaRocket />}
                >
                  Join as Creator
                </Button>
                <Button
                  as={RouterLink}
                  to="/investor"
                  variant="outline"
                  size="lg"
                  leftIcon={<FaChartLine />}
                >
                  Start Investing
                </Button>
              </HStack>
            </VStack>
            <SimpleGrid columns={2} spacing={4}>
              <StatCard
                icon={FaUsers}
                label="Active Creators"
                value="1,234"
                helpText="+12% from last month"
              />
              <StatCard
                icon={FaCoins}
                label="Total Value Locked"
                value="$4.2M"
                helpText="+23% from last month"
              />
              <StatCard
                icon={FaChartLine}
                label="Average ROI"
                value="156%"
                helpText="+8% from last month"
              />
              <StatCard
                icon={FaHandshake}
                label="Successful Deals"
                value="892"
                helpText="+15% from last month"
              />
            </SimpleGrid>
          </SimpleGrid>
        </Container>

        {/* How It Works Section */}
        <Box bg="brand.darkGray" py={16} mb={16}>
          <Container maxW="1200px">
            <Heading size="xl" mb={12} textAlign="center" color="white" fontFamily="heading">
              How It Works
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <StepCard
                number="01"
                title="Create & Register"
                description="Upload your creative work and register it on the blockchain for protection."
              />
              <StepCard
                number="02"
                title="Tokenize"
                description="Convert your work into digital tokens that can be bought and sold."
              />
              <StepCard
                number="03"
                title="Earn & Grow"
                description="Earn royalties and watch your work's value grow with its popularity."
              />
            </SimpleGrid>
          </Container>
        </Box>

        {/* Features Section */}
        <Container maxW="1200px" mb={16}>
          <Heading size="xl" mb={12} textAlign="center" color="white" fontFamily="heading">
            Why Choose ARTICUNO?
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <FeatureCard
              icon={FaRocket}
              title="Fractional Ownership"
              description="Break down your creative work into tradeable tokens. Let others invest in your success."
            />
            <FeatureCard
              icon={FaCoins}
              title="Automatic Royalties"
              description="Earn passive income as your work gets used. Smart contracts handle all payments automatically."
            />
            <FeatureCard
              icon={FaChartLine}
              title="Fair Pricing"
              description="AI-powered pricing suggestions help you set fair values for your creative work."
            />
          </SimpleGrid>
        </Container>

        {/* Security Section */}
        <Box bg="brand.darkGray" py={16} mb={16}>
          <Container maxW="1200px">
            <Heading size="xl" mb={12} textAlign="center" color="white" fontFamily="heading">
              Built on Security
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <SecurityCard
                icon={FaLock}
                title="Blockchain Protection"
                description="Your work is protected by blockchain technology, ensuring authenticity and ownership."
              />
              <SecurityCard
                icon={FaGlobe}
                title="Global Reach"
                description="Access a worldwide network of investors and creators."
              />
              <SecurityCard
                icon={FaShieldAlt}
                title="Smart Contracts"
                description="Automated, transparent, and secure transactions through smart contracts."
              />
            </SimpleGrid>
          </Container>
        </Box>

        {/* Team Section */}
        <Container maxW="1200px" mb={16}>
          <Heading size="xl" mb={12} textAlign="center" color="white" fontFamily="heading">
            Our Team
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
            <TeamCard
              name="John Doe"
              role="Founder & CEO"
              description="Blockchain enthusiast with 10+ years of experience in fintech and creative industries."
            />
            <TeamCard
              name="Jane Smith"
              role="CTO"
              description="Expert in blockchain development and smart contract architecture."
            />
            <TeamCard
              name="Alex Johnson"
              role="Head of Product"
              description="Product leader with a passion for user experience and creative technology."
            />
          </SimpleGrid>
        </Container>

        {/* CTA Section */}
        <Box bg="brand.darkGray" py={16}>
          <Container maxW="1200px">
            <VStack spacing={8} textAlign="center">
              <Heading size="xl" color="white" fontFamily="heading">
                Ready to Get Started?
              </Heading>
              <Text fontSize="lg" color="brand.lightGray" maxW="600px">
                Join thousands of creators and investors who are already using ARTICUNO to tokenize and trade creative works.
              </Text>
              <HStack spacing={4}>
                <Button
                  as={RouterLink}
                  to="/creator"
                  colorScheme="blue"
                  size="lg"
                  leftIcon={<FaRocket />}
                >
                  Become a Creator
                </Button>
                <Button
                  as={RouterLink}
                  to="/investor"
                  variant="outline"
                  size="lg"
                  leftIcon={<FaChartLine />}
                >
                  Start Investing
                </Button>
              </HStack>
            </VStack>
          </Container>
        </Box>
      </Box>
    </AnimatedPage>
  )
}

const StatCard = ({ icon, label, value, helpText }: { icon: any; label: string; value: string; helpText: string }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Stat
        px={6}
        py={8}
        bg="brand.darkGray"
        rounded="lg"
        border="1px"
        borderColor="brand.lightGray"
      >
        <Icon as={icon} w={8} h={8} color="brand.blue" mb={4} />
        <StatLabel color="brand.lightGray">{label}</StatLabel>
        <StatNumber color="white" fontSize="3xl" fontFamily="heading">{value}</StatNumber>
        <StatHelpText color="brand.blue">{helpText}</StatHelpText>
      </Stat>
    </MotionBox>
  )
}

const FeatureCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <VStack
        p={6}
        bg="brand.darkGray"
        rounded="lg"
        align="start"
        spacing={4}
        border="1px"
        borderColor="brand.lightGray"
      >
        <Icon as={icon} w={8} h={8} color="brand.blue" />
        <Heading size="md" color="white" fontFamily="heading">{title}</Heading>
        <Text color="brand.lightGray">{description}</Text>
      </VStack>
    </MotionBox>
  )
}

const StepCard = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <VStack
        p={6}
        bg="brand.black"
        rounded="lg"
        align="start"
        spacing={4}
        border="1px"
        borderColor="brand.lightGray"
      >
        <Badge colorScheme="blue" fontSize="lg" px={2} py={1}>
          {number}
        </Badge>
        <Heading size="md" color="white" fontFamily="heading">{title}</Heading>
        <Text color="brand.lightGray">{description}</Text>
      </VStack>
    </MotionBox>
  )
}

const SecurityCard = ({ icon, title, description }: { icon: any; title: string; description: string }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <VStack
        p={6}
        bg="brand.darkGray"
        rounded="lg"
        align="start"
        spacing={4}
        border="1px"
        borderColor="brand.lightGray"
      >
        <Icon as={icon} w={8} h={8} color="brand.blue" />
        <Heading size="md" color="white" fontFamily="heading">{title}</Heading>
        <Text color="brand.lightGray">{description}</Text>
      </VStack>
    </MotionBox>
  )
}

const TeamCard = ({ name, role, description }: { name: string; role: string; description: string }) => {
  return (
    <MotionBox
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <VStack
        p={6}
        bg="brand.darkGray"
        rounded="lg"
        align="start"
        spacing={4}
        border="1px"
        borderColor="brand.lightGray"
      >
        <Heading size="md" color="white" fontFamily="heading">{name}</Heading>
        <Badge colorScheme="blue">{role}</Badge>
        <Text color="brand.lightGray">{description}</Text>
      </VStack>
    </MotionBox>
  )
}

export default About 