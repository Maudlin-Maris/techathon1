import React from 'react'
import Navbar from './Components/Navbar'
import Box1 from './Components/Box1'
import Avatar from './Components/Image/AvatarTestimonials.jpg'
import Quotes from './Components/Image/Quotes.svg'
import Arrow from './Components/Image/IconArrow.svg'
import  Hero   from './Components/Image/Hero.svg'
import BgDesktop from './Components/Image/bg-curve-desktop.svg'
import Hero2 from './Components/Image/hero2.svg'
import { Text, Box, Input, HStack, Stack, Button, Image, Flex, Divider, SimpleGrid  } from '@chakra-ui/react'
import Footer from './Components/Footer'

function App() {

  return (
    <div>
      <Navbar />
    
      <Box1>
        <HStack width={{ base: '100%', sm: '85%' }} mb={'5em'} paddingLeft={'50px'} columns={{ base: 1, sm: 1, md: 2 }}  >
          <Box width={'35%'}>
            <Text fontSize='30px' fontWeight={'bold'} mb={'20px'} color={'#050134'}>All your files in one secure location, accessible anywhere</Text>
            <Text mb={'20px'} color={"#484563"} >Fylo stores your most important files in one secure location. Access them wherever you need, share and collaborate with friends, family and co-workers.</Text>
            <Stack direction={'row'} spacing={'4'}>
              <Input border={'1px solid black'} borderColor={'black'} size={'sm'} width={'40%'} placeholder="Enter your email..."   />
              <Button colorScheme='blue' size={'sm'} width={'30%'} borderRadius="none" >Get Started</Button>
            </Stack>
          </Box>
      
         <Image src={Hero} paddingLeft={'100px'} position='relative' top={'-50px'} boxSize={'50%'} objectFit="contain"/>
        </HStack> 
         
        
        <Image src={BgDesktop} objectFit='cover'/>
        <Flex backgroundColor={'#f8f8fe'} width="100%">
          <Box paddingLeft={'50px'} width="40%" mb={'30px'}>
            <Text fontSize='25px' fontWeight={'bold'} mb={'20px'} color={'#050134'}>Stay productive, wherever you are</Text>
            <Text mb={'20px'} color={"#484563"} >Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</Text>
            <Text mb={'10px'}  color={"#484563"} >Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required!</Text>
            <Flex >
              <Text color={'#86c1b6'} >See how Fylo works</Text>
              <Image src={Arrow} paddingLeft={'5px'}/>
             
            </Flex >
            <Divider color={'#49988b'} borderColor={"none"} width={"40%"} mt={"5px"} mb={"20px"} /> 
            <Box backgroundColor={'#ffffff'} mt={"40px"} borderRadius={'5px'} color={"#484563"}  padding={'30px'} mb={"70px"}>
              <Image src={Quotes} paddingBottom={"20px"}/> 
              <Text>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</Text>
              <Flex>
                <Image src={Avatar} borderRadius={'100%'} mt={'30px'} position={"relative"} />
                <Box paddingLeft={'10px'} mt={"50px"} width={"100%"}>
                  <Text   fontSize='20px' fontWeight={'bold'} color={'#050134'}>Kyle Burton</Text>
                  <Text fontSize='15px'>Founder & CEO, Huddle</Text>
                </Box>
              </Flex>
            </Box>         
          </Box>
          <Image src={Hero2} boxSize={'58%'} paddingLeft={'150px'} position='relative' top={'55px'} />
        </Flex>
        <SimpleGrid as={Stack}  spacing={8} backgroundColor={"#575a87"} color={"#f9f9f3"} paddingTop={"100px"} paddingBottom={'100px'}>
          <Flex>
            <Box paddingLeft={'50px'} width={'40%'}>
              <Text fontWeight={'bold'} fontSize={{base: '25px', sm: '25px', md: '30px', lg: '30px'}} mb={'10px'}>Get early access today</Text>
              <Text>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</Text>
            </Box>
            <Box paddingLeft={'10em'}>
              <Input mb={'20px'} backgroundColor={'#ffffff'} borderRadius={'none'} color={'#dcdcdc'} placeholder="email@example.com"   />
              <Button borderRadius={'none'} backgroundColor={'#3668fb'} color={'#d8f3ff'}>Get Started For Free</Button>
            </Box>
          </Flex>
        </SimpleGrid>


      </Box1>   
      <Footer />
      

  
      
    </div>
  )
}

export default App
