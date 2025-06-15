import {
  Box,
  Heading,
  Text,
  VStack,
  Container,
  SimpleGrid,
  Image,
  Badge,
  HStack,
  Button,
  useColorModeValue,
  Icon,
  Flex,
  Progress,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Skeleton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  useToast,
} from '@chakra-ui/react'
import { FaEthereum, FaClock, FaFire, FaChartLine, FaUsers, FaLock, FaShare } from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'
import { useState, memo } from 'react'

// Memoized Collection Card
const CollectionCard = memo(({ collection, onOpen, setSelectedCollection }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const bgColor = useColorModeValue('brand.darkerGray', 'brand.darkerGray')
  const borderColor = useColorModeValue('brand.lightGray', 'brand.lightGray')

  const handleClick = () => {
    setSelectedCollection(collection)
    onOpen()
  }

  return (
    <Box
      bg={bgColor}
      borderRadius="lg"
      overflow="hidden"
      border="1px"
      borderColor={borderColor}
      transition="all 0.2s"
      _hover={{ 
        transform: 'translateY(-4px)',
        boxShadow: '0 10px 20px rgba(66, 153, 225, 0.2)',
        cursor: 'pointer'
      }}
      onClick={handleClick}
    >
      <Box position="relative" h="200px">
        <Skeleton isLoaded={imageLoaded} h="full" w="full">
          <Image
            src={collection.image}
            alt={collection.title}
            w="full"
            h="full"
            objectFit="cover"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </Skeleton>
        <Badge
          position="absolute"
          top={2}
          right={2}
          colorScheme="blue"
          px={2}
          py={1}
          borderRadius="full"
        >
          {collection.category}
        </Badge>
      </Box>
      <VStack p={4} align="start" spacing={3}>
        <Heading size="md" color="white" fontFamily="heading">
          {collection.title}
        </Heading>
        <Text color="brand.lightGray" fontSize="sm" noOfLines={2}>
          {collection.description}
        </Text>
        <HStack justify="space-between" w="full">
          <HStack>
            <Icon as={FaUsers} color="brand.blue" />
            <Text color="white" fontSize="sm">{collection.owners} owners</Text>
          </HStack>
          <HStack>
            <Icon as={FaEthereum} color="brand.blue" />
            <Text color="white" fontSize="sm">{collection.price} ETH</Text>
          </HStack>
        </HStack>
        <Progress 
          value={(collection.sold / collection.total) * 100} 
          colorScheme="blue" 
          size="sm" 
          w="full" 
          borderRadius="full"
        />
        <HStack justify="space-between" w="full">
          <Text color="brand.lightGray" fontSize="xs">{collection.sold} of {collection.total} shares sold</Text>
          <Text color="brand.blue" fontSize="xs">{((collection.sold / collection.total) * 100).toFixed(1)}%</Text>
        </HStack>
      </VStack>
    </Box>
  )
})

const BuySharesModal = ({ isOpen, onClose, collection }) => {
  const [shares, setShares] = useState(1)
  const toast = useToast()

  const handleBuy = () => {
    // TODO: Implement actual purchase logic
    toast({
      title: "Purchase Successful",
      description: `You have purchased ${shares} shares of ${collection.title}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    })
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay backdropFilter="blur(10px)" />
      <ModalContent bg="brand.darkerGray" border="1px" borderColor="brand.lightGray">
        <ModalHeader color="white" fontFamily="heading">Buy Shares</ModalHeader>
        <ModalCloseButton color="white" />
        <ModalBody pb={6}>
          <VStack spacing={6} align="stretch">
            <HStack spacing={4}>
              <Box flex="1">
                <Image
                  src={collection?.image}
                  alt={collection?.title}
                  borderRadius="lg"
                  w="full"
                  h="200px"
                  objectFit="cover"
                />
              </Box>
              <VStack flex="1" align="start" spacing={4}>
                <Heading size="md" color="white" fontFamily="heading">
                  {collection?.title}
                </Heading>
                <Text color="brand.lightGray" fontSize="sm">
                  {collection?.description}
                </Text>
                <HStack spacing={4}>
                  <Stat>
                    <StatLabel color="brand.lightGray">Price per Share</StatLabel>
                    <StatNumber color="white">{collection?.price} ETH</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel color="brand.lightGray">Available Shares</StatLabel>
                    <StatNumber color="white">{collection?.total - collection?.sold}</StatNumber>
                  </Stat>
                </HStack>
              </VStack>
            </HStack>

            <VStack spacing={4} align="stretch">
              <Text color="white" fontWeight="medium">Number of Shares</Text>
              <NumberInput
                min={1}
                max={collection?.total - collection?.sold}
                value={shares}
                onChange={(value) => setShares(Number(value))}
              >
                <NumberInputField bg="brand.darkGray" color="white" borderColor="brand.lightGray" />
                <NumberInputStepper>
                  <NumberIncrementStepper color="white" />
                  <NumberDecrementStepper color="white" />
                </NumberInputStepper>
              </NumberInput>
              <HStack justify="space-between">
                <Text color="brand.lightGray">Total Cost:</Text>
                <Text color="white" fontWeight="bold">{shares * collection?.price} ETH</Text>
              </HStack>
            </VStack>

            <Button
              colorScheme="blue"
              size="lg"
              onClick={handleBuy}
              leftIcon={<FaShare />}
              isDisabled={shares < 1}
            >
              Buy Shares
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const Marketplace = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedCollection, setSelectedCollection] = useState(null)

  // Dummy data for collections
  const collections = [
    {
      id: 1,
      title: "Digital Dreams",
      description: "A collection of futuristic digital art pieces exploring the intersection of technology and creativity.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      category: "Digital Art",
      price: 0.5,
      owners: 45,
      total: 100,
      sold: 55
    },
    {
      id: 2,
      title: "Abstract Emotions",
      description: "An emotional journey through abstract art, capturing the essence of human feelings in digital form.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1045&q=80",
      category: "Abstract",
      price: 0.3,
      owners: 78,
      total: 200,
      sold: 122
    },
    {
      id: 3,
      title: "Pixel Paradise",
      description: "A nostalgic journey through pixel art, bringing retro gaming aesthetics to the modern digital age.",
      image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      category: "Pixel Art",
      price: 0.2,
      owners: 120,
      total: 150,
      sold: 30
    }
  ]

  return (
    <AnimatedPage>
      <Box minH="100vh" bg="brand.darkGray" pt="80px">
        <Container maxW="container.xl" py={8}>
          <VStack spacing={12} align="stretch">
            {/* Header */}
            <VStack spacing={4} align="start">
              <Heading color="white" size="2xl">Marketplace</Heading>
              <Text color="brand.lightGray" fontSize="lg">
                Discover and collect unique digital assets
              </Text>
            </VStack>

            {/* Featured Collections */}
            <VStack spacing={6} align="stretch">
              <Heading size="lg" color="white">Featured Collections</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
                {collections.map((collection) => (
                  <CollectionCard 
                    key={collection.id} 
                    collection={collection} 
                    onOpen={onOpen}
                    setSelectedCollection={setSelectedCollection}
                  />
                ))}
              </SimpleGrid>
            </VStack>
          </VStack>
        </Container>
      </Box>

      <BuySharesModal 
        isOpen={isOpen} 
        onClose={onClose} 
        collection={selectedCollection}
      />
    </AnimatedPage>
  )
}

export default Marketplace 