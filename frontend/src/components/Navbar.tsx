import { Box, Button, HStack, Icon, Text, Avatar, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import { FaRocket, FaChartLine, FaPlus, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Box bg="brand.black" px={4} py={4} borderBottom="1px" borderColor="brand.lightGray">
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
            <Button as={RouterLink} to="/about" variant="ghost" color="white">
              About
            </Button>
            <Button as={RouterLink} to="/creator" variant="ghost" color="white" leftIcon={<FaPlus />}>
              Create
            </Button>
            <Button as={RouterLink} to="/investor" variant="ghost" color="white" leftIcon={<FaChartLine />}>
              Invest
            </Button>
            <Button as={RouterLink} to="/studio" variant="ghost" color="white" leftIcon={<FaRocket />}>
              Studio
            </Button>
          </HStack>
        </HStack>

        <Menu>
          <MenuButton>
            <Avatar size="sm" name="User" />
          </MenuButton>
          <MenuList bg="brand.darkGray" borderColor="brand.lightGray">
            <MenuItem as={RouterLink} to="/profile" icon={<FaUser />} bg="brand.darkGray" _hover={{ bg: 'brand.black' }}>
              Profile
            </MenuItem>
            <MenuItem as={RouterLink} to="/studio" icon={<FaRocket />} bg="brand.darkGray" _hover={{ bg: 'brand.black' }}>
              Studio
            </MenuItem>
            <MenuItem as={RouterLink} to="/settings" icon={<FaCog />} bg="brand.darkGray" _hover={{ bg: 'brand.black' }}>
              Settings
            </MenuItem>
            <MenuItem icon={<FaSignOutAlt />} bg="brand.darkGray" _hover={{ bg: 'brand.black' }}>
              Sign Out
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  )
}

export default Navbar 