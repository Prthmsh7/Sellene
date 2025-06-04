import { Box, Heading, Text, VStack, Container, Button, HStack, Icon } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaRocket, FaChartLine } from 'react-icons/fa'
import AnimatedPage from '../components/AnimatedPage'

const MotionBox = motion(Box)

const Home = () => {
  return (
    <AnimatedPage>
      <Box>
        {/* Hero Section */}
        <Box textAlign="center" py={20} bg="brand.darkGray">
          <Container maxW="1200px">
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Icon as={FaRocket} w={12} h={12} color="brand.blue" mb={4} />
              <Heading size="2xl" mb={6} color="white" fontFamily="heading">
                Welcome to ARTICUNO
              </Heading>
              <Text fontSize="xl" color="brand.lightGray" maxW="800px" mx="auto" mb={8}>
                Tokenize your creative work and invest in the future of creativity
              </Text>
              <HStack spacing={4} justify="center">
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
            </MotionBox>
          </Container>
        </Box>
      </Box>
    </AnimatedPage>
  )
}

export default Home 