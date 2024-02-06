'use client';

import { ChakraProvider } from '@chakra-ui/react';
import TopBanner from './components/main-page-components/TopBanner';
import TopDescription from './components/main-page-components/TopDescription';
import StickyBox from './components/other-components/StickyBox';
import DyingTemples from './components/main-page-components/DyingTemples';
import { Flex, Box } from '@chakra-ui/react';
import StickyButton from './components/other-components/StickyButton';
import FreeTemples from './components/main-page-components/FreeTemples';
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
        
        <Element name="topBanner">
          <TopBanner />
          {/* <PageLayout /> */}
            <Navbar />
        </Element>
        <Element name="topDescription">
          <TopDescription />
        </Element>
        
      
      
      <DyingTemples />
      <FreeTemples />
      <StickyButton />
        </Box>
        
      </ChakraProvider>
    </>
  );
}





