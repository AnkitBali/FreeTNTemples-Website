'use client';

// import React, {useEffect, useState} from 'react';
// import { Flex, Link as ChakraLink, Box } from '@chakra-ui/react';
// import { Link } from 'react-scroll';

// const Header = () => {
//     const [isSticky, setSticky] = useState(false);
//     // const [scrollY, setScrollY] = useState(0);

//     useEffect(() => {
//         const handleScroll = () => {
//             setSticky(window.scrollY > 100);
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);
//     return (
//         <Box as="nav" 
//         position="sticky" 
//             top={0} left={0} right={0} bg="transparent"
//             //  zIndex="sticky"
//             transition="transform 0.3s ease-in-out"
//             transform={`translateY(${isSticky ? 0 : '100%'})`}
//             boxShadow="md"
//         // bg="transparent"
//         // color="white" 
//         p={4}
//         >
//             <Flex justify="space-around" wrap="wrap">
//                 <ChakraLink as={Link} to="topBanner" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>
//                     Top Banner
//                 </ChakraLink>
//                 <ChakraLink as={Link} to="topDescription" smooth={true} duration={500} style={{ cursor: 'pointer' }} px={2}>
//                     Top Description
//                 </ChakraLink>
//                 {/* Add more ChakraLink items as needed */}
//             </Flex>
//         </Box>
//     );
// };

// export default Header;

// Import necessary Chakra UI components
import { Box, Flex, Text, Button, useDisclosure, Link } from '@chakra-ui/react';

// Your navigation data
const navData = [
    { id: 1, title: "Dying Temple", path: "dyingtemple" },
    { id: 2, title: "Free Temple", path: "freetemple" },
    { id: 3, title: "Heartbreaking Stories", path: "heartbreakingStories" },
    { id: 4, title: "HR&CE", path: "hrce" },
    { id: 5, title: "Past Glory", path: "glory" },
    { id: 6, title: "Get In Touch", path: "" },
    { id: 7, title: "Media", path: "media" },
];

const Navbar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <>
            {/* Desktop Navbar */}
            <Flex
                as="nav"
                id='abc'
                align="center"
                justify="space-between"
                wrap="wrap"
                w="1450px"
                p={4}
                // bg="customBrown"
                bg="rgba(101, 67, 33, 0.8)" // Dark brown color with 80% opacity
                color="white"
                position={"fixed"}
                top={'0'}
                // zIndex={999}
                boxShadow="md"
            >
                <Box display={{ base: 'block', md: 'none' }} onClick={onToggle}>
                    <svg
                        fill="white"
                        width="12px"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        mr="12px"
                    >
                        <title>Menu</title>
                        <path d="M0 0h20v20H0V0z" fill="none" />
                        <path
                            fill="white"
                            d="M2.5 5h15M2.5 10h15m-15 5h15"
                        />
                    </svg>
                </Box>
                <Box
                    display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
                    width={{ base: 'full', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                >
                    {navData.map((el) => (
                        <Link
                            key={el.id}
                            to={el.path}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-68}
                            activeClass="text-[#fac654]"
                            px={2}
                            py={1}
                            fontWeight="bold"
                            color="white"
                            _hover={{
                                textDecoration: 'none',
                                color: '#febd2c',
                            }}
                        >
                            {el.title}
                        </Link>
                    ))}
                </Box>
                <Box display={{ base: isOpen ? 'block' : 'none', md: 'block' }}>
                    <Button bg="#febd2c" color="black">
                        English
                    </Button>
                </Box>
            </Flex>

            {/* Mobile Navbar
            {isOpen && (
                <Box
                    display={{ base: 'block', md: 'none' }}
                    bg="white"
                    position={"fixed"}
                    top={0}
                    left={0}
                    right={0}
                    zIndex="100"
                    p={4}
                    boxShadow="md"
                >
                    {navData.map((el) => (
                        <Link
                            key={el.id}
                            to={el.path}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-68}
                            activeClass="text-[#fac654]"
                            onClick={onToggle}
                            display="block"
                            py={2}
                            fontWeight="bold"
                            color="black"
                            _hover={{
                                textDecoration: 'none',
                                color: '#febd2c',
                            }}
                        >
                            {el.title}
                        </Link>
                    ))}
                </Box>
                
            )} */}
            {/* <style global jsx>
                {`
        #abc {
            position : fixed;
        }
        `}
            </style> */}
        </>
    );
};

export default Navbar;
