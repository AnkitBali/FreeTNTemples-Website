'use client';

// Posts.js

import React, { useState } from 'react';
import { Box, Text, Image, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react';

const Posts = ({ posts }) => {
    // Check if posts are provided and not empty
    if (!posts || posts.length === 0) {
        return(
        <Box
            ><Text  textAlign="center" fontSize="23px" fontWeight="bold">No Posts!</Text>
        </Box>)
    }

    const [selectedPost, setSelectedPost] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleReadMore = (post) => {
        setSelectedPost(post);
        setIsOpen(true);
    };


    return (
        <Box>
            {posts.map((post, index) => (
                <Box
                    key={index}
                    backgroundColor="white"
                    boxShadow="md"
                    borderRadius="md"
                    padding="4"
                    marginBottom="4"
                    display="flex"
                    alignItems="center"
                >
                    <Image
                        src={post.image}
                        alt={post.title}
                        width="50px"
                        height="50px"
                        marginRight="4"
                    />
                    <Box flex="1"
                    textAlign={"left"}
                    >
                        <Text color={"gray.600"} fontSize="xl" fontWeight="bold">{post.title} :</Text>
                        <Text color={"gray.500"}>{post.content.substring(0, 100)}...</Text>
                    </Box>
                    <Button onClick={() => handleReadMore(post)}>Read More</Button>
                </Box>
            ))}

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{selectedPost && selectedPost.title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image src={selectedPost && selectedPost.image} alt={selectedPost && selectedPost.title} />
                        <Text>{selectedPost && selectedPost.content}</Text>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={() => setIsOpen(false)}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    );
};

export default Posts;