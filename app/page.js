'use client';


// page imports : 
import DyingTemples from './components/main-page-components/DyingTemples';
import TopBanner from './components/main-page-components/TopBanner';
import TopDescription from './components/main-page-components/TopDescription';
import { ChakraProvider } from '@chakra-ui/react';
import FreeTemples from './components/main-page-components/FreeTemples';
import HeartBreakingStories from './components/main-page-components/HeartBreakingStories';

// Component imports : 
import StickyButton from './components/other-components/StickyButton';
import StickyBox from './components/other-components/StickyBox';
import { Flex, Box } from '@chakra-ui/react';
import Header from './components/main-page-components/Header';
import { Element } from 'react-scroll';
import PageLayout from './components/other-components/PageLayout';
import Navbar from './components/main-page-components/Header';

 
export default function HomePage() {
 
  return (
    <>
    
      <ChakraProvider>
        {/* <Header /> */}
        <Box position={"relative"}>
          {/* <Box
          position={'fixed'}
          zIndex={100}
          top={'10%'}
          // fontSize={"50px"}
          > */}
            <Navbar />
          {/* </Box> */}
          <TopBanner />
          <TopDescription />
      <Element name="dyingTemples">
      <DyingTemples />
          </Element>
          <Element name="freeTemples">
      <FreeTemples />
          </Element>
          <HeartBreakingStories />
      <StickyButton />
        </Box>
        
      </ChakraProvider>
    </>
  );
}





