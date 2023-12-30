'use client';

// // StickyButton.js
// import React from 'react';
// import { useState, useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';
// import { Box, Button, Text, Flex } from '@chakra-ui/react';

// export const isVisInViewport = element => {
//     const rect = element.getBoundingClientRect();
//     // console.log('rect', rect.top, rect.height / 3);
//     return (
//         rect.top <= rect.height / 4 && rect.top + rect.height > 0 && rect.left >= 0
//     );
// };

// const StickyButton = () => {

//     const [isVisible, setIsVisible] = useState(false);
//     const isMobile = useMediaQuery({ maxWidth: 767 });

//     useEffect(() => {
//         window.addEventListener("scroll", listenToScroll);
//         return () =>
//             window.removeEventListener("scroll", listenToScroll);
//     }, []);

//     const listenToScroll = () => {
//         const footerDiv = document.getElementById('footer');
//         const heightToHideFrom = '17px';

//         const winScroll = document.body.scrollTop ||
//             document.documentElement.scrollTop;

//         if (winScroll > heightToHideFrom) {
//             const footerInViewPort = isVisInViewport(footerDiv);
//             // console.log('winScroll', winScroll, registerDiv, inViewPort);
//             if (footerInViewPort) {
//                 setIsVisible(false);
//             } else {
//                 isMobile && setIsVisible(true);
//             }
//         } else {
//             setIsVisible(false);
//         }
//     };

//     return isVisible && (
//         <Box
//             position="fixed"
//             display={{ base: 'block', md: 'none' }}
//             top={{ base: "unset", md: "30%" }}
//             bottom={{ base: "2%", md: "unset" }}
//             zIndex="100"
//             bgColor={'#E4DED4'}
//             maxH={'65px'}
//             right={{ base: "unset", md: 0 }}
//             left={{ base: "0", md: "unset" }}
//             width={{ base: "100%", md: "136px" }}
//             fontFamily="FedraSansStd-book"
//             p="6px 20px"
//             boxShadow="0 4px 7px 0px #00000040"
//             className='aaa'
//         >
//             <Box display={'flex'} alignItems={'center'} justifyContent={'space-around'}>
//                 <Box className="savespot">
//                     <Text fontWeight={500} color="#000000" fontSize="18px">{isVisible}Save Your Spot</Text>
//                     <Text fontWeight={600} color="#D04723" fontSize="18px">Heyy</Text>
//                 </Box>
//                 <Box>
//                     <Button
//                         background="#CA4E2A"
//                         border="none"
//                         borderRadius="5px"
//                         fontSize="16px"
//                         _hover={{
//                             border: 'none',
//                             textDecor: 'none',
//                             bg: '#000054',
//                         }}
//                         w={{ base: '119px', md: '243px' }}
//                         m="6px auto 6px 20px"
//                         display="flex"
//                         h="42px"
//                         fontFamily="OpenSansRegular"
//                     > Hiii
//                         {/* <NextLink href={refineUrlDomain(stickbtnData[1]?.linkUrl, region, language)} passHref legacyBehavior>
//                             <Link
//                                 textDecor="none"
//                                 p="18px 34px 18px 34px"
//                                 _focus={{ outline: '0' }}
//                                 _hover={{ textDecoration: 'none' }}
//                             >
//                                 {stickbtnData[1]?.buttonText}
//                             </Link>
//                         </NextLink> */}
//                     </Button>
//                 </Box>
//             </Box>
//             <style jsx global>{`
//             .savespot {
//               margin-top: 0px;
//               color: #000000;
//               font-family: 'FedraSansStd-book';
//               font-size: 18px;
//             }
//             .savespot p mark {
//                 background: transparent;
//                 font-weight: 600;
//                 color: #D04723;
//             }
//         `}</style>
//         </Box>
//     )

//     // return (
//     //     <Box
//     //         position="fixed"
//     //         top="50%"
//     //         right="10%"
//     //         transform="translateY(-50%)"
//     //         p={8}
//     //         bgColor="white"
//     //         boxShadow="2xl"
//     //         textAlign="center"
//     //         width="400px"
//     //     >
//     //         <Text fontSize="32px" fontWeight="bold" color="#000000" mb={2}>
//     //             #FreeTNTemples
//     //         </Text>
//     //         <Button
//     //             bg="#fac654"
//     //             color="black"
//     //             _hover={{ bg: 'yellow.600' }}
//     //             width="200px"
//     //             fontSize="16px"
//     //             mb={4}
//     //             onClick={() => window.location.href = 'your-support-url'}
//     //         >
//     //             Click Here to Support
//     //         </Button>
//     //         <Text fontSize="32px" fontWeight="200px" color="#000000" mb={2}>OR</Text>
//     //         <Text fontSize="32px" fontWeight="200px" color="#000000" mb={2}>
//     //             Show your support with a missed call
//     //         </Text>
//     //         <Flex fontSize="32px" fontWeight="bold" color="#000000" mb={2} align="center" justify="center">
//     //             <img src="/missed-call-icon.svg" alt="Missed Call Icon" width="35px" height="35px" style={{ marginRight: '8px' }} />
//     //             83000 83000
//     //         </Flex>
//     //         <Text fontSize="22px" fontWeight="bold" color="#000000" mb={2}>
//     //             Tell your family & friends to show their support with a missed call.
//     //         </Text>
//     //         {/* Add your social media icons or buttons here */}
//     //     </Box>
//     // );
// };

// export default StickyButton;


// StickyButton.js
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Box, Button, Text, Flex, Image } from '@chakra-ui/react';

const StickyButton = () => {
    const [isVisible, setIsVisible] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    const listenToScroll = () => {
        const scrollPosition = window.scrollY;
        const triggerHeight = isMobile ? window.innerHeight / 2 : 100; // Adjust the trigger height as needed

        setIsVisible(scrollPosition > triggerHeight);
    };

    return isVisible && (
        <Box
            position="fixed"
            top="50%"
            right="10%"
            transform="translateY(-50%)"
            p={6}
            bgColor="white"
            boxShadow="2xl"
            textAlign="center"
            width="400px"
        >
            <Text fontSize="32px" fontWeight="bold" color="#000000" mb={8}>
                #FreeTNTemples
            </Text>
            <Button
                bg="#fac654"
                color="black"
                _hover={{ bg: 'yellow.600' }}
                width="300px"
                fontSize="16px"
                mb={4}
                onClick={() => window.location.href = 'your-support-url'}
            >
                Click Here to Support
            </Button>
            <Text fontSize="25px" fontWeight="200px" color="#000000" mb={2}>OR</Text>
            <Text fontSize="25px" fontWeight="200px" color="#000000" mb={2}>
                Show your support with a missed call
            </Text>
            <Flex fontSize="32px" fontWeight="bold" color="#61351a" mb={8} align="center" justify="center">
                <img src="/missed-call-icon.svg" alt="Missed Call Icon" width="35px" height="35px" style={{ marginRight: '8px' }} />
                83000 83000
            </Flex>
            <Text fontSize="18px" fontWeight="bold" color="#000000" mb={4}>
                Tell your family & friends to show their support with a missed call.
            </Text>
            <Image 
            />
            <Flex align="center" justify="center">
                {/* Whatsapp Icon */}
                
                <Image src="/whatsapp-icon.png" alt="Whatsapp Icon" boxSize="50px" mx={2} />
                
                {/* Twitter Icon */}
                <Image src="/twitter-x-icon.webp" alt="Twitter Icon" boxSize="50px" mx={2} />

                {/* Facebook Icon */}
                <Image src="/fb-icon.png" alt="Facebook Icon" boxSize="50px" mx={2} />
            </Flex>
            {/* Add your social media icons or buttons here */}
        </Box>
    );
};

export default StickyButton;
