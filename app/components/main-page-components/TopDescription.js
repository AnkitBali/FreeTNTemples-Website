'use client';

// TopDescription.js

import React, { useState } from 'react';
import { Box, Button, Text, Flex, Image, AspectRatio, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import EmbeddedYouTubeVideo from '../other-components/EmbeddedYouTubeVideo';
import StickyBox from '../other-components/StickyBox';
// import StickyBox from '../other-components/StickyBox';


const TopDescription = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPlayButton, setShowPlayButton] = useState(true);

    const handlePlayButtonClick = () => {
        setShowPlayButton(false);
        onOpen();
    };

    return (
        <Box
        position="relative" 
        overflow="hidden"
        // align="center"
        // justify="space-between"
            >
            {/* Background Image */}
            <Image
                src="/bg-graphics.jpg"
                layout="fill"
                // objectFit="cover"
                // alt="Background Image"
                // position="absolute"
                // top={0}
                // left={0}
                // right={0}
                // bottom={0}
                objectFit="cover"
                alt="Background Image"
                zIndex={-1}
                height={{base: "700px", sm: "500px", md: "600px", xl:"100%"}}
                // height={"600px"}
            />

            {/* Content */}
            <Flex>
            <Box
                position="absolute"
                top={{base: "50%", sm: "50%", md: "50%", xl:"50%"}}
                left={{base: "50%", sm: "50%", md:"30%"}}
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="left"
                p={8}
                flex="1"
                zIndex={1}
            >
                {/* Main Text */}
                <Box width={{base: "300px", sm: "400px", md: "350px", xl:"600px"}}>
                <Text fontSize={{sm: "10px", md: "12px", xl:"18px"}} fontWeight="bold" mb={6} color="#28231e">
                    Tamil Nadu's temples, the soul of Tamil culture and the core of Tamil spiritual ethos, are being suffocated to death. A vicious policy of seizing control over temples to take over their land and revenue was begun by the East India Company, 200 years ago.
                    <br />
                    <br />
                    Unfortunately, the same policy of government control over temples continues today, 74 years after Independence.
                    <br />
                    <br />
                    Powerfully consecrated temples are losing their vibrance and crumbling, causing enormous pain to crores of devotees and communities.
                    
                </Text>
                </Box>

                {/* Embedded YouTube Video */}
                <EmbeddedYouTubeVideo imageSrc='/top-description-yt-image.jpeg'
                    videoSrc='https://www.youtube.com/embed/KHkxs7Cnwp4'
                    // width={"100%"}
                    />
            </Box>
            <Box 
            flex='1'
            >
                <StickyBox />
            </Box>
            </Flex>

            {/* Modal for Video Playback */}
            {/* <Modal isOpen={isOpen} onClose={() => { onClose(); setShowPlayButton(true); }} size="full">
                <ModalOverlay />
                <ModalContent bg="rgba(0, 0, 0, 0.6)" color="white" display="flex" alignItems="center" justifyContent="center">
                    <ModalCloseButton position="absolute" top="0" right="0" color="white" />
                    <ModalBody display="flex" alignItems="center" justifyContent="center">
                        <iframe
                            title="Your Video"
                            src="https://www.youtube.com/embed/KHkxs7Cnwp4"
                            allowFullScreen
                        ></iframe>
                    </ModalBody>
                </ModalContent>
            </Modal> */}
            
        </Box>
    );
};

export default TopDescription;
