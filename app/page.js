import { ChakraProvider } from '@chakra-ui/react';
// import TopBanner from "../components/TopBanner"
import TopBanner from './components/TopBanner';

 
export default function HomePage() {
 
  return (
    <>
      <ChakraProvider>
      <TopBanner />
      </ChakraProvider>
    </>
  );
}





