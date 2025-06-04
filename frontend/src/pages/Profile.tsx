import {
  Box,
  Heading,
  VStack,
  HStack,
  Text,
  Avatar,
  Button,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Icon,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FaRocket, FaCoins, FaChartLine, FaUser, FaCog, FaWallet } from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'

const MotionBox = motion(Box)

const Profile = () => {
  return (
    <AnimatedPage>
      <Box maxW="1200px" mx="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Header */}
          <Box bg="brand.darkGray" p={8} rounded="lg" mb={8} border="1px" borderColor="brand.lightGray">
            <HStack spacing={6} align="start">
              <Avatar size="2xl" name="John Doe" src="https://bit.ly/dan-abramov" />
              <VStack align="start" spacing={4} flex={1}>
                <HStack justify="space-between" w="full">
                  <VStack align="start" spacing={1}>
                    <Heading size="lg" color="white" fontFamily="heading">John Doe</Heading>
                    <Text color="brand.lightGray">@johndoe</Text>
                  </VStack>
                  <Button leftIcon={<FaCog />} variant="outline">
                    Edit Profile
                  </Button>
                </HStack>
                <Text color="brand.lightGray">
                  Digital artist and musician. Creating unique experiences through art and sound.
                </Text>
                <HStack spacing={6}>
                  <Stat size="sm">
                    <StatLabel color="brand.lightGray">Works</StatLabel>
                    <StatNumber color="white">12</StatNumber>
                  </Stat>
                  <Stat size="sm">
                    <StatLabel color="brand.lightGray">Followers</StatLabel>
                    <StatNumber color="white">1.2K</StatNumber>
                  </Stat>
                  <Stat size="sm">
                    <StatLabel color="brand.lightGray">Total Value</StatLabel>
                    <StatNumber color="white">$45.2K</StatNumber>
                  </Stat>
                </HStack>
              </VStack>
            </HStack>
          </Box>

          {/* Profile Content */}
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList mb={8}>
              <Tab>Portfolio</Tab>
              <Tab>Investments</Tab>
              <Tab>Wallet</Tab>
              <Tab>Settings</Tab>
            </TabList>

            <TabPanels>
              {/* Portfolio Tab */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                  {[1, 2, 3].map((item) => (
                    <PortfolioItem key={item} />
                  ))}
                </SimpleGrid>
              </TabPanel>

              {/* Investments Tab */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                  {[1, 2, 3].map((item) => (
                    <InvestmentItem key={item} />
                  ))}
                </SimpleGrid>
              </TabPanel>

              {/* Wallet Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Box bg="brand.darkGray" p={6} rounded="lg" border="1px" borderColor="brand.lightGray">
                    <HStack justify="space-between" mb={4}>
                      <Heading size="md" color="white" fontFamily="heading">Wallet Balance</Heading>
                      <Icon as={FaWallet} w={6} h={6} color="brand.blue" />
                    </HStack>
                    <Stat>
                      <StatNumber color="white" fontSize="3xl">$12,345.67</StatNumber>
                      <StatHelpText color="brand.blue">+$1,234.56 (24h)</StatHelpText>
                    </Stat>
                  </Box>
                  <Button leftIcon={<FaCoins />} colorScheme="blue" size="lg">
                    Add Funds
                  </Button>
                </VStack>
              </TabPanel>

              {/* Settings Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Box bg="brand.darkGray" p={6} rounded="lg" border="1px" borderColor="brand.lightGray">
                    <Heading size="md" color="white" fontFamily="heading" mb={4}>Account Settings</Heading>
                    <VStack spacing={4} align="stretch">
                      <Button variant="outline" leftIcon={<FaUser />}>Edit Profile</Button>
                      <Button variant="outline" leftIcon={<FaWallet />}>Payment Methods</Button>
                      <Button variant="outline" leftIcon={<FaCog />}>Preferences</Button>
                    </VStack>
                  </Box>
                </VStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </MotionBox>
      </Box>
    </AnimatedPage>
  )
}

const PortfolioItem = () => {
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
        <Badge colorScheme="blue">Art</Badge>
        <Heading size="md" color="white" fontFamily="heading">Digital Dreams</Heading>
        <Text color="brand.lightGray" noOfLines={2}>
          A collection of digital art pieces exploring AI and human interaction
        </Text>
        <HStack justify="space-between" w="full">
          <Text color="brand.blue" fontWeight="bold">$2.5K</Text>
          <Text color="brand.lightGray">500 tokens</Text>
        </HStack>
      </VStack>
    </MotionBox>
  )
}

const InvestmentItem = () => {
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
        <Badge colorScheme="green">Music</Badge>
        <Heading size="md" color="white" fontFamily="heading">Summer Vibes</Heading>
        <Text color="brand.lightGray" noOfLines={2}>
          A catchy summer pop song with tropical beats
        </Text>
        <HStack justify="space-between" w="full">
          <Text color="brand.blue" fontWeight="bold">156% ROI</Text>
          <Text color="brand.lightGray">50 tokens</Text>
        </HStack>
      </VStack>
    </MotionBox>
  )
}

export default Profile 