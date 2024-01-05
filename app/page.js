import { ChakraProvider } from '@chakra-ui/react';
import TopBanner from './components/main-page-components/TopBanner';
import TopDescription from './components/main-page-components/TopDescription';
import StickyBox from './components/other-components/StickyBox';
import DyingTemples from './components/main-page-components/DyingTemples';
import { Flex, Box } from '@chakra-ui/react';

 
export default function HomePage() {
 
  return (
    <>
      <ChakraProvider>
      <TopBanner />
      
      <TopDescription />
      <DyingTemples />
      
        
      </ChakraProvider>
    </>
  );
}





