'use client';

// TopDescription.js

import React, { useState } from 'react';
import { Box, Button, Text, Flex, Image, AspectRatio, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure } from '@chakra-ui/react';
import EmbeddedYouTubeVideo from '../other-components/EmbeddedYouTubeVideo';


const TopDescription = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showPlayButton, setShowPlayButton] = useState(true);

    const handlePlayButtonClick = () => {
        setShowPlayButton(false);
        onOpen();
    };

    return (
        <Box position="relative" overflow="hidden">
            {/* Background Image */}
            <Image
                src="/bg-graphics.jpg"
                layout="fill"
                objectFit="cover"
                alt="Background Image"
            />

            {/* Content */}
            <Box
                position="absolute"
                top="50%"
                left="30%"
                transform="translate(-50%, -50%)"
                color="white"
                textAlign="left"
                p={8}
            >
                {/* Main Text */}
                <Box width="600px">
                <Text fontSize="18px" mb={6} color="#28231e">
                    Tamil Nadu's temples, the soul of Tamil culture and the core of Tamil spiritual ethos, are being suffocated to death. A vicious policy of seizing control over temples to take over their land and revenue was begun by the East India Company, 200 years ago.
                    <br />
                    <br />
                    Unfortunately, the same policy of government control over temples continues today, 74 years after Independence.
                    <br />
                    <br />
                    Powerfully consecrated temples are losing their vibrance and crumbling, causing enormous pain to crores of devotees and communities.
                    <br />
                    <br />
                </Text>
                </Box>

                {/* Embedded YouTube Video */}
                <EmbeddedYouTubeVideo imageSrc='/top-description-yt-image.jpeg'
                    videoSrc='https://www.youtube.com/embed/KHkxs7Cnwp4'
                    />
            </Box>

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
