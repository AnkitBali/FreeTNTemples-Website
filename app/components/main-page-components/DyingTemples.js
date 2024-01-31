'use client';

import React from "react";
import {Box, Image, Flex, Text} from '@chakra-ui/react';

const Tile = ({imageSrc, numOf, what, description}) => (
    <Flex mb={14}>
        <Image src={imageSrc} alt="Tile Image" />
        <Box mb={0} mt={4} ml={4} width={{base: "300px", sm: "400px", md: "350px", xl:"400px"}} textAlign={"left"}>
            <Text fontSize="40px" fontWeight="bold">{numOf}</Text>
            <Text fontSize="25px" fontWeight="bold">{what}</Text>
            <Text fontSize="20px">{description}</Text>
        </Box>

    </Flex>
)

const tilesData = [
    {
        imageSrc: "/Natraj_6 1.png",
        numOf: "1200",
        what: "Sacred ancient idols",
        description: "stolen in 25 years",
    },
    {
        imageSrc: "/tileImage2.png",
        numOf: "1200",
        what: "Sacred ancient idols",
        description: "stolen in 25 years",

    },
    {
        imageSrc: "/tileImage3.png",
        numOf: "37,000",
        what: "temples have just one person",
        description: "to handle all activities-pooja, maintenance, security etc.",
    },
    {
        imageSrc: "/tileImage4.png",
        numOf: "34,000",
        what: "temples struggling",
        description: "to survive with less than Rs. 10,000 income a year",
    },
    {
        imageSrc: "/tileImage5.png",
        numOf: "East India Company’s",
        what: "policy of grabbing temples",
        description: "still continues 74 years after Independence",
    }

]



const DyingTemples = () => (

    <Box position="relative" overflow="hidden">
        {/* Background Image */}
        <Image
            src="/brown-bg-image.jpeg"
            layout="fill"
            objectFit="cover"
            alt="Background Image"
            height={'1500px'}
        />

        {/* Comtent */}
        <Box 
        position="absolute" 
        top="50%" 
        left="35%" 
        transform="translate(-50%, -50%)"
        color="white" 
        textAlign="center"
        >

            <Text fontSize="32px" fontWeight="bold" mb="4">Dire State of Tamil Temples</Text>
            
            <Box 
            mt={10}
            >

            {/* Map over tilesData to render Tile components */}
            {tilesData.map((tile, index) => (
                <Tile
                    key={index}
                    imageSrc={tile.imageSrc}
                    numOf={tile.numOf}
                    what={tile.what}
                    description={tile.description}
                />
            ))}

            </Box>

        </Box>
        {/* <Tile imageSrc={tilesData[0].imageSrc} numOf={tilesData[0].numOf} what={tilesData[0].what} description={tilesData[0].description}/> */}

        <Box>
            
        </Box>

    </Box>
)

export default DyingTemples;