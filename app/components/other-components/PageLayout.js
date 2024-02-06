import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../main-page-components/Header';
import TopBanner from '../main-page-components/TopBanner';
import Navbar from '../main-page-components/Header';

const PageLayout = () => {
    return (
        <Box 
        position="relative"
        >
            {/* <Header /> */}
            <Navbar />
            <TopBanner />
        </Box>
    );
};

export default PageLayout;