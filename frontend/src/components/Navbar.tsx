import { Box, Button, HStack, Icon, Text, Avatar, Menu, MenuButton, MenuList, MenuItem, useColorModeValue } from '@chakra-ui/react'
import { Link as RouterLink, useLocation } from 'react-router-dom'
import { FaRocket, FaChartLine, FaShoppingCart, FaUsers } from 'react-icons/fa'

const Navbar = () => {
  const location = useLocation()
  const isDashboard = location.pathname.startsWith('/dashboard')
  const bgColor = useColorModeValue('brand.black', 'brand.black')
  const borderColor = useColorModeValue('brand.lightGray', 'brand.lightGray')

  return (
    <Box 
      bg={bgColor} 
      px={4} 
      py={4} 
      borderBottom="1px" 
      borderColor={borderColor}
      position={isDashboard ? "fixed" : "relative"}
      top={0}
      left={0}
      right={0}
      zIndex={3}
      w="100%"
    >
      <HStack maxW="1200px" mx="auto" justify="space-between">
        <HStack spacing={8}>
          <RouterLink to="/">
            <HStack spacing={2}>
              <Icon as={FaRocket} w={6} h={6} color="brand.blue" />
              <Text color="white" fontSize="xl" fontWeight="bold" fontFamily="heading">
                ARTICUNO
              </Text>
            </HStack>
          </RouterLink>
          <HStack spacing={4}>
            <Button 
              as={RouterLink} 
              to="/dashboard" 
              variant="ghost" 
              color="white" 
              leftIcon={<FaChartLine />}
              isActive={isDashboard}
              _active={{ bg: 'brand.darkGray' }}
            >
              Dashboard
            </Button>
            <Button 
              as={RouterLink} 
              to="/products" 
              variant="ghost" 
              color="white" 
              leftIcon={<FaShoppingCart />}
            >
              Products
            </Button>
            <Button 
              as={RouterLink} 
              to="/customers" 
              variant="ghost" 
              color="white" 
              leftIcon={<FaUsers />}
            >
              Customers
            </Button>
          </HStack>
        </HStack>

        <Avatar size="sm" name="User" />
      </HStack>
    </Box>
  )
}

export default Navbar 