import React from 'react'
import { Flex, Box,Image, SimpleGrid, Link as ChakraLink} from '@chakra-ui/react'
import Logo from './Image/Logo.svg'

const Navbar = () => {
  return (
    <Flex alignItems={'center'} justifyContent={'space-between'} mb={'100px'}>
        <Box padding={'50px'}>
            <Image src={Logo}/>
        </Box>

        <SimpleGrid pr={'50px'}
            
            _hover={{textDecoration: 'none'}}>
           <Flex pr={'50px'}>
              <ChakraLink href=" "  pr={'50px'}>Features</ChakraLink>
              <ChakraLink href=" "  pr={'50px'}>Team</ChakraLink>
              <ChakraLink href=" " pr={'50px'}>Sign up</ChakraLink>
            </Flex>
          </SimpleGrid> 
    </Flex>
  )
}

export default Navbar