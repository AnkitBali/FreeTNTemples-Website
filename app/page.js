import { ChakraProvider } from '@chakra-ui/react';
import TopBanner from './components/main-page-components/TopBanner';
import TopDescription from './components/main-page-components/TopDescription';
import StickyButton from './components/other-components/StickyButton';

 
export default function HomePage() {
 
  return (
    <>
      <ChakraProvider>
      <TopBanner />
      <TopDescription />
      <StickyButton />
        
      </ChakraProvider>
    </>
  );
}





