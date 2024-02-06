'use client';

// Posts.js

import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Posts = ({ posts }) => {
    // Check if posts are provided and not empty
    if (!posts || posts.length === 0) {
        return(
        <Box
            ><Text  textAlign="center" fontSize="23px" fontWeight="bold">No Posts!</Text>
        </Box>)
    }

    return (
        <Box alignContent={"center"}>
            {posts.map((post, index) => (
                <Box key={index} marginY="4">
                    <Text fontSize="20px" fontWeight="bold">{post.title}</Text>
                    <Text fontSize="16px">{post.content}</Text>
                </Box>
            ))}
        </Box>
    );
};

export default Posts;