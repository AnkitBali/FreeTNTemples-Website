'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Navbar from './Header';
// import Header from '../main-page-components/Header';
// import Image from 'next/image';
import {
  Box,
  Button,
  Text,
  Center,
  Modal,
  Image,
  AspectRatio,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  useBreakpointValue,
  Flex,
} from '@chakra-ui/react';

{/* <Header /> */}
const TopBanner = () => {
 
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageSrc = useBreakpointValue({
    base: '/free-temple-banner-mob.jpg',
    sm: '/free-temple-banner.jpg',
    md: '/free-temple-banner.jpg',
    lg: '/free-temple-banner.jpg',
    xl: '/free-temple-banner.jpg',
    '2xl': '/free-temple-banner.jpg',
  });
  const isMobile = useMediaQuery({ maxWidth: 480 });
  const phoneNumber = '8300083000';

  const handleButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
    
    <Box
      position="relative"
      // w={{base:"100%", md: "100%"}}
      // h={{base: 'auto', md:"100%"}}
      overflow="hidden"
    >
      
      <Image
        src={imageSrc}
        fallbackSrc={imageSrc}
        layout="fill"
        objectFit="cover"
        alt="Your Banner Image"
        w='100%'
        // h={'600'}
      />
      
      

      <Box
        position="absolute"
        top="50%"
        left={{base:"50%", sm:'35%', md: '30%', lg:"25%", xl: '25%'}}
        transform="translate(-50%, -50%)"
        color="white"
        textAlign={{base:"center", sm: 'left'}}
        // mt={{base: '0',md:'-200'}}
          // width={{ base: '100%', md: '1px' }}
        
      >
        {/* <Box position='fixed' left={'0%'} width='2350px' top={'-35%'} > */}
            {/* <Navbar /> */}
        {/* </Box> */}
        
        
          <Flex flexDirection={{ base: 'column-reverse', sm: 'row' }} justifyContent={{ base: 'flex-start', md: 'space-between' }}>
            <Box >
          <Box width={{base: '380px', sm: '300px', md: '400px', lg: '', xl: '500px'}}  mt={{base:'0px', xl:'-4px'}}>
            <Text lineHeight={{base:'40px', sm: '30px', md: '40px', lg: '60px', xl:'60px'}} fontWeight={700} fontSize={{ base: '32px', sm: '25px', md: '40px', lg: '46px', xl: '56px'  }}>Free Tamil Nadu's Temples</Text>
            <Text fontSize={{ base: '18px', sm: '15px', md: '20px', lg: '22px', xl: '24px', }} fontWeight={700} mt={{base:'25px', sm:'10px', md: '20px', xl:'40px'}} color={'#ffffff'}>
            Show your support to
          </Text>
              <Text fontSize={{ base: '25px', sm: '20px', md: '28px', lg: '30px', xl: '36px', }} color={'#fac654'} fontWeight="bold">
            #FreeTNTemples
          </Text>
        </Box>
        <Box>
          
          <Button
            bg={'#fac654'}
            color="black"
            _hover={{ bg: 'yellow.600' }}
            width={{base:'250px', sm: '200px', md: '280px', lg: '280px', xl: '300px'}}
            fontSize={{base:'20px', sm: '15px', md: '20px', lg: '20px', xl:'20px'}}
            mt={{base: '10px', sm: '10px', md: '30px', lg: '30px', xl: '50px'}}
            p={{base:'25px', sm: '10px', md: '25px', lg: '25px', xl: '25px'}}
            onClick={() => window.location.href = 'your-support-url'}
          >
            Click Here to Support
          </Button>
                {isMobile && ( <Flex flexDirection={'column'}>
                  <Text mt={4} fontWeight={600} fontSize={'18px'}>OR</Text>
                   <Button
                  bg={'#fac654'}
                  color="black"
                  _hover={{ bg: 'yellow.600' }}
                  width={{ base: '250px', md: '300px' }}
                  fontSize={{ base: '20px', md: '20px' }}
                  mt={4}
                  p='25px'
                  ml='65px'
                  onClick={handleButtonClick}
                >
                    <Flex align="center">
                      <img src="/missed-call-icon.svg" alt="Missed Call Icon" width="25px" height="25px" style={{ marginRight: '8px' }} />
                      83000 83000
                    </Flex>
                </Button>
                </Flex>)}
        </Box>
        <Navbar />

          </Box>

        <Box
          width={{base:'60px', sm: '40px', md: '60px', lg:"100px"}}
          height={{ base: '60px', sm: '40px', md: '60px', lg: "100px" }}
          cursor="pointer"
          onClick={onOpen}
          zIndex="1" // Make sure the play button is above the image
          // right={{ base: '5%', md: '3%' }}
            transform="translate(100%, -50%)"
          mt={{base:'60px', sm:'80px', md: '100px', lg: '150px', xl:'150px'}}
          ml={{ base: '100px', sm: '-100px', md: '-100px', lg: '-100px', xl: '0px'}}
        >
          {/* Your play button icon or styling goes here */}
            <Image
              src='/play-icon.svg'
                fallbackSrc="/bg-graphics.jpg"
              layout="fill"
              objectFit="cover"
              alt="Your Banner Image"
              w='100%'
            // h={'600'}
            />
            
        </Box>
          </Flex>
      </Box>

        <Modal isOpen={isOpen} onClose={onClose} size="full">
          <ModalOverlay />
          <ModalContent
            bg="rgba(0, 0, 0, 0.6)"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <ModalCloseButton position="absolute" top="0" right="0" color="white" />
            <ModalBody
              display="flex"
              alignItems="center"
              justifyContent="center">
              <iframe
                title="Your Video"
                id='banner-video'
                src="https://www.youtube.com/embed/DBPfKpZfTfs"
                allowFullScreen
              ></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
      <style global jsx>
        {`
        #banner-video {
          width : 500px;
          height : 300px
        }
        @media screen and (max-width: 768px) {
          #banner-video {
            width : 300px;
          height : 200px
          }
        }
        `}
      </style>
    </Box>
    </>
    
  );
};


export default TopBanner;
