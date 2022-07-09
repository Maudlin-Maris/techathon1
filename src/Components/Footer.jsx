import React from 'react'
import Logo from './Image/white.svg'
import Phone from './Image/IconPhone.svg'
import Email from './Image/IconEmail.svg'
import { FaFacebook, FaInstagram, FaTwitter  } from 'react-icons/fa'
import { Image, Box, Stack, SimpleGrid, Icon, Flex, Text, Grid} from '@chakra-ui/react'
const Footer = () => {
  return (
    <Box backgroundColor={'#07063a'} padding={'50px'}>
        <Image src={Logo} mb={'15px'} />
            <SimpleGrid as={Stack} maxW={'6xl'} p={'10px'} columns={{ base: 1, sm: 2, md: 4 }} spacing={8}  color={'#eeeff0'}>
                <Stack d={'flex-start'}>
                    <Flex>
                        <Image src={Phone} position={"relative"} boxSize={'20px'}/>
                        <Text  paddingLeft={'10px'}>Phone: +1-543-123-4567</Text>
                    </Flex>
                    <Flex >
                        <Image src={Email}  position={"relative"} boxSize={'20px'}/>
                        <Text paddingLeft={'10px'}>example@fylo.com</Text>
                    </Flex>
                </Stack>

                <Stack>
                    <Text>About us</Text>
                    <Text>Jobs</Text>
                    <Text>Press</Text>
                    <Text>Blog</Text>

                </Stack>

                <Stack align={'flex-start'}>
                    <Text>Contact us</Text>
                    <Text>Terms</Text>
                    <Text>Privacy</Text>
                </Stack>

                <Flex pl={'50px'}>
                    <Icon as={FaFacebook} mr={'10px'}/>
                    <Icon as={FaTwitter} mr={'10px'}/>
                    <Icon as={FaInstagram}mr={'10px'} />
                </Flex>

            
            </SimpleGrid>


       
    </Box>
 
  )
}

export default Footer