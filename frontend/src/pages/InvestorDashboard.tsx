import {
  Box,
  Heading,
  SimpleGrid,
  VStack,
  Text,
  Button,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  HStack,
  Icon,
  Progress,
  Tooltip,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'
import { FaChartLine, FaMusic, FaPalette, FaBook, FaLightbulb, FaCoins, FaUsers, FaLock, FaFilter } from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'

const MotionBox = motion(Box)

// Mock data for demonstration
const mockWorks = [
  {
    id: 1,
    title: 'Summer Vibes',
    category: 'Music',
    description: 'A catchy summer pop song with tropical beats',
    tokensAvailable: 500,
    pricePerToken: 0.5,
    totalTokens: 1000,
    roi: 156,
    icon: FaMusic,
    creator: 'John Doe',
    createdAt: '2024-03-15',
  },
  {
    id: 2,
    title: 'Digital Dreams',
    category: 'Art',
    description: 'A collection of digital art pieces exploring AI and human interaction',
    tokensAvailable: 200,
    pricePerToken: 2.0,
    totalTokens: 500,
    roi: 89,
    icon: FaPalette,
    creator: 'Jane Smith',
    createdAt: '2024-03-14',
  },
  {
    id: 3,
    title: 'The Future of AI',
    category: 'Writing',
    description: 'A comprehensive guide to artificial intelligence and its impact',
    tokensAvailable: 1000,
    pricePerToken: 0.1,
    totalTokens: 2000,
    roi: 234,
    icon: FaBook,
    creator: 'Alex Johnson',
    createdAt: '2024-03-13',
  },
]

const InvestorDashboard = () => {
  return (
    <AnimatedPage>
      <Box maxW="1200px" mx="auto">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Dashboard Header */}
          <HStack spacing={4} mb={8} align="center">
            <Icon as={FaChartLine} w={8} h={8} color="brand.blue" />
            <VStack align="start" spacing={1}>
              <Heading color="white" fontFamily="heading">Investor Dashboard</Heading>
              <Text color="brand.lightGray">Discover and invest in creative works</Text>
            </VStack>
          </HStack>

          {/* Quick Stats */}
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6} mb={8}>
            <StatCard
              icon={FaCoins}
              label="Total Investment"
              value="$5.2K"
              helpText="+$1.2K this month"
            />
            <StatCard
              icon={FaChartLine}
              label="Total ROI"
              value="156%"
              helpText="+23% this month"
            />
            <StatCard
              icon={FaUsers}
              label="Active Investments"
              value="12"
              helpText="+3 this month"
            />
          </SimpleGrid>

          {/* Main Content */}
          <Tabs variant="soft-rounded" colorScheme="blue">
            <TabList mb={8}>
              <Tab>Discover</Tab>
              <Tab>My Portfolio</Tab>
              <Tab>Analytics</Tab>
            </TabList>

            <TabPanels>
              {/* Discover Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  {/* Filters */}
                  <Box bg="brand.darkGray" p={6} rounded="lg" border="1px" borderColor="brand.lightGray">
                    <HStack spacing={4} mb={4}>
                      <InputGroup maxW="300px">
                        <InputLeftElement pointerEvents="none">
                          <SearchIcon color="brand.lightGray" />
                        </InputLeftElement>
                        <Input placeholder="Search works..." />
                      </InputGroup>

                      <Select placeholder="Category" maxW="200px">
                        <option value="all">All Categories</option>
                        <option value="music">Music</option>
                        <option value="art">Art</option>
                        <option value="writing">Writing</option>
                        <option value="patent">Patent</option>
                      </Select>

                      <Select placeholder="Sort By" maxW="200px">
                        <option value="roi">Highest ROI</option>
                        <option value="price">Lowest Price</option>
                        <option value="newest">Newest First</option>
                      </Select>

                      <Button leftIcon={<FaFilter />} variant="outline">
                        More Filters
                      </Button>
                    </HStack>
                  </Box>

                  {/* Marketplace Grid */}
                  <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                    {mockWorks.map((work) => (
                      <WorkCard key={work.id} work={work} />
                    ))}
                  </SimpleGrid>
                </VStack>
              </TabPanel>

              {/* My Portfolio Tab */}
              <TabPanel>
                <VStack spacing={6} align="stretch">
                  <Box bg="brand.darkGray" p={6} rounded="lg" border="1px" borderColor="brand.lightGray">
                    <Table variant="simple">
                      <Thead>
                        <Tr>
                          <Th color="brand.lightGray">Work</Th>
                          <Th color="brand.lightGray">Tokens</Th>
                          <Th color="brand.lightGray">Value</Th>
                          <Th color="brand.lightGray">ROI</Th>
                          <Th color="brand.lightGray">Actions</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        {mockWorks.map((work) => (
                          <Tr key={work.id}>
                            <Td>
                              <HStack>
                                <Icon as={work.icon} color="brand.blue" />
                                <VStack align="start" spacing={0}>
                                  <Text color="white">{work.title}</Text>
                                  <Text fontSize="sm" color="brand.lightGray">{work.creator}</Text>
                                </VStack>
                              </HStack>
                            </Td>
                            <Td color="white">50</Td>
                            <Td color="white">$100</Td>
                            <Td color="brand.blue">{work.roi}%</Td>
                            <Td>
                              <HStack spacing={2}>
                                <Button size="sm" variant="ghost" leftIcon={<FaChartLine />}>
                                  View
                                </Button>
                                <Button size="sm" variant="ghost" colorScheme="red">
                                  Sell
                                </Button>
                              </HStack>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </Box>
                </VStack>
              </TabPanel>

              {/* Analytics Tab */}
              <TabPanel>
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
                  <AnalyticsCard
                    title="Portfolio Growth"
                    value="23%"
                    label="This Month"
                    color="blue"
                  />
                  <AnalyticsCard
                    title="Best Performing"
                    value="156%"
                    label="Summer Vibes"
                    color="green"
                  />
                </SimpleGrid>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </MotionBox>
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

const WorkCard = ({ work }: { work: typeof mockWorks[0] }) => {
  const progress = ((work.totalTokens - work.tokensAvailable) / work.totalTokens) * 100

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
        <HStack spacing={2}>
          <Icon as={work.icon} w={5} h={5} color="brand.blue" />
          <Badge colorScheme="blue">{work.category}</Badge>
        </HStack>
        <VStack align="start" spacing={1}>
          <Heading size="md" color="white" fontFamily="heading">{work.title}</Heading>
          <Text fontSize="sm" color="brand.lightGray">by {work.creator}</Text>
        </VStack>
        <Text color="brand.lightGray" noOfLines={2}>
          {work.description}
        </Text>
        <Box w="full">
          <HStack justify="space-between" mb={2}>
            <Text fontSize="sm" color="brand.extraLightGray">
              Tokens Available: {work.tokensAvailable} / {work.totalTokens}
            </Text>
            <Tooltip label={`${work.roi}% Return on Investment`}>
              <HStack>
                <Icon as={FaCoins} color="brand.blue" />
                <Text color="brand.blue" fontWeight="bold">{work.roi}% ROI</Text>
              </HStack>
            </Tooltip>
          </HStack>
          <Progress value={progress} colorScheme="blue" size="sm" mb={2} />
          <Text fontSize="lg" fontWeight="bold" color="white">
            ${work.pricePerToken} per token
          </Text>
        </Box>
        <Button colorScheme="blue" width="full" leftIcon={<FaChartLine />}>
          Invest Now
        </Button>
      </VStack>
    </MotionBox>
  )
}

const AnalyticsCard = ({ title, value, label, color }: { title: string; value: string; label: string; color: string }) => {
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
        <Heading size="md" color="white" fontFamily="heading">{title}</Heading>
        <Text color={`${color}.400`} fontSize="2xl" fontWeight="bold">{value}</Text>
        <Text color="brand.lightGray">{label}</Text>
        <Progress value={parseInt(value)} colorScheme={color} size="sm" w="full" />
      </VStack>
    </MotionBox>
  )
}

export default InvestorDashboard 