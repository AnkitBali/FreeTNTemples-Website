import React, { useState } from 'react';
import { AspectRatio, Box, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const EmbeddedYouTubeVideo = ({ imageSrc, videoSrc, caption }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handlePlayButtonClick = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Embedded YouTube Video */}
            <AspectRatio ratio={16 / 9} mb={6}>
                <Box position="relative" cursor="pointer" onClick={handlePlayButtonClick}>
                    {/* Image with Play Button Overlay */}
                    <Image src={imageSrc} layout="fill" objectFit="cover" alt="Video Thumbnail" />
                    {/* Outer Disk (Hollow Ring) */}
                    <Box
                        width="70px"  // Set the desired size for the outer disk
                        height="70px"  // Set the desired size for the outer disk
                        position="absolute"
                        cursor="pointer"
                        border="3px solid rgba(255, 255, 255, 0.4)"  // Set the border width and color
                        borderRadius="50%"  // Set to 50% for a proper circle
                    ></Box>
                    <Flex
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        align="center"
                        justify="center"
                        // bgColor="rgba(255, 255, 255, 0.7)"
                        bgColor="white"
                        borderRadius="100%"
                        // boxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"
                        onClick={handlePlayButtonClick}
                        cursor="pointer"
                        width="60px"  // Set the desired size for the circle
                        height="60px"  // Set the desired size for the circle
                    >
                        {/* Play Button Icon */}
                        <Text fontSize="18px" color="#333" fontWeight="bold">
                            ▶
                        </Text>
                    </Flex>
                </Box>
            </AspectRatio>

            {/* Caption */}
            {caption && (
                <Text textAlign="center" fontSize="14px" mt="4">
                    {caption}
                </Text>
            )}

            {/* Modal for Video Playback */}
            <Modal isOpen={isOpen} onClose={() => { onClose(); }} size="full">
                <ModalOverlay />
                <ModalContent bg="rgba(0, 0, 0, 0.6)" color="white" display="flex" alignItems="center" justifyContent="center">
                    <ModalCloseButton position="absolute" top="0" right="0" color="white" />
                    <ModalBody display="flex" alignItems="center" justifyContent="center">
                        <iframe
                            title="Your Video"
                            src={videoSrc}
                            allowFullScreen
                        ></iframe>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

EmbeddedYouTubeVideo.propTypes = {
    videoSrc: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    caption: PropTypes.string,
};

export default EmbeddedYouTubeVideo;
