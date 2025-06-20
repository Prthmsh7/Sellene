import { Box } from '@chakra-ui/react'
import MarqueeMenu from '../components/MarqueeMenu'
import '../components/MarqueeMenu.css'

const Developers = () => {
  return (
    <Box as="main" minH="100vh" bg="var(--color-bg)" overflow="hidden">
      <MarqueeMenu />
    </Box>
  )
}

export default Developers 