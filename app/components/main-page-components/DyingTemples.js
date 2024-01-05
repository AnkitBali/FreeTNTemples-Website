'use client';

import React from "react";
import {Box, Image, Flex, Text} from '@chakra-ui/react';

const Tile = ({imageSrc, numOf, what, description}) => (
    <Flex>
        <Image src={imageSrc} alt="Tile Image" />
        <Box>
            <Text>{numOf}</Text>
            <Text>{what}</Text>
            <Text>{description}</Text>
        </Box>

    </Flex>
)

const DyingTemples = ({tilesData}) => (

    <Box position="relative" overflow="hidden">
        {/* Background Image */}
        <Image
            src="/brown-bg-image.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
        />

        {/* Comtent */}
        <Box 
        position="absolute" 
        top="50%" 
        left="50%" 
        transform="translate(-50%, -50%)"
        color="white" 
        textAlign="center"
        >

            <Text fontSize="32px" fontWeight="bold" mb="4">Title</Text>

            {/* Map over tilesData to render Tile components */}
            {/* {tilesData.map((tile, index) => (
                <Tile
                    key={index}
                    imageSrc={tile.imageSrc}
                    numOf={tile.numOf}
                    what={tile.what}
                    description={tile.description}
                />
            ))} */}

        </Box>

        <Box>
            
        </Box>

    </Box>
)

export default DyingTemples;