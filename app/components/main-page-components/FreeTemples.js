'use client';


import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';
import Posts from '../other-components/Posts';


const FreeTemples = () => {

    // Placeholder posts data
    const posts = [
        // { title: 'Post 1', content: 'This is the first post content.' },
        // { title: 'Post 2', content: 'This is the second post content.' },
        // Add more posts here
    ];

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
                height={'auto'}
                zIndex={-1}
                />

                {/* Content */}
                <Box 
                position="absolute"
                top={"20%"}
                left={"10%"}
                zIndex={1}
                >
                <Text textAlign={"center"} width={"600px"} fontSize="32px" fontWeight="bold">Why We Should Free Tamil Nadu's Temples</Text>
                <Box 
                // mt={'10xz 0px'}
                mt={'90px'}
                >
                <Posts posts={posts} />
                </Box>
                </Box>
                
                
                </Box>
    )
}

export default FreeTemples;