'use client';

import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import Posts from '../other-components/Posts';


const HeartBreakingStories = () => {

    const posts = [
        {
            id: 1,
            title: "Post 1",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id risus lacinia, lacinia justo nec, fermentum felis. Proin nec ultrices enim. Vivamus vitae leo ut nulla dictum aliquet. Duis sit amet turpis nec ligula cursus malesuada. Sed fermentum, mi nec commodo consectetur, sem nisi iaculis risus, sit amet fringilla turpis ligula et mi.",
            image: "/tileImage2.png"
        },
        {
            id: 2,
            title: "Post 2",
            content: "Suspendisse lacinia lacus vel ex fermentum, quis fermentum justo placerat. Sed id libero ac lacus lacinia fermentum. Nulla nec sapien ut orci eleifend cursus vel quis velit. Nam posuere mi a tellus cursus faucibus. Cras vitae ultricies odio, id luctus urna. Nulla facilisi. Aenean auctor purus nec sapien fermentum efficitur. Suspendisse potenti. Integer vehicula erat eu nunc lobortis, vel auctor odio elementum.",
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            title: "Post 3",
            content: "Pellentesque auctor, turpis ac lobortis ultricies, leo risus dictum nisi, vitae auctor magna risus in est. Morbi rhoncus fringilla justo. Nulla non lectus sit amet eros dapibus eleifend eu eu urna. Nulla facilisi. Sed pulvinar sapien nec eros tempus scelerisque. Curabitur sodales scelerisque dolor, nec vehicula lorem rutrum at. Mauris laoreet vehicula magna, id ultrices sem eleifend et.",
            image: "https://via.placeholder.com/150"
        }
    ];

    return (
        <Box
        position={"relative"}
        overflow={"hidden"}  
              >

        {/* Background Image */}

            <Image
                src="/brown-bg-image.jpeg"
                layout="fill"
                objectFit="cover"
                alt="Background Image"
                height={"1000px"}
            />

        {/* Content */}

                
            <Box position={"absolute"}
             top={"20%"}
             left={"30%"} 
             transform={"translate(-50%, -50%)"}
             fontSize="20px"
             fontWeight="bold"
             color={"white"}
             textAlign={"center"}
             alignItems={"center"}
             alignContent={"center"}
            //  width={'80%'}
            //  maxWidth={'600px'}
            //  height={'100%'}
             
             >
                <Text fontSize="32px" fontWeight="bold" mb="4">
                    Heartbreaking Stories of Temple Decay
                </Text>
                <Text textAlign={"center"} width={"600px"} fontSize="12px">
                    Incredibly, it is not just small, unknown temples that are in decay. Large, popular temples visited by lakhs of devotees every month are targets of theft and victims of neglect.
                </Text>
                <Box 
                // top={"650%"}
                // mt={500}
                width={"600px"}
                marginTop={'50px'}
                position={"absolute"}
                >
                <Posts posts={posts} />
                </Box>
                


            </Box>
        </Box>
    );


}

export default HeartBreakingStories;