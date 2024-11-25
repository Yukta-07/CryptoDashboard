import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'; // Import Text
import React from 'react';
import { RxDashboard } from 'react-icons/rx';
import { TbArrowsDownUp } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
const Sidenav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        }, 
        {
            icon: TbArrowsDownUp,
            text: "Transactions",
            link: "/transactions"
        }
    ];

    return (
        <Stack bg="white" justify="space-between" boxShadow={{
            base:"none",
            lg:"lg"
        }} w={{
            base:"full",
            lg:"16rem"
        }} h="100vh"
     >
           <Box>
           <Heading  textAlign="center" as="h1" fontSize="20px" pt="56px">@Crypto</Heading>
            <Box mt="6" mx="3">
            {navLinks.map((nav) => (
                <Link to={nav.link} key={nav.text}>
                <HStack 
                borderRadius="10px"
                py="3" px="4" key={nav.text} _hover={{
                    bg:"F3F3F7",
                    color:"#171717"
                }}
                color="#797E82">
                    <Icon as={nav.icon} />
                    <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
                </HStack>
                </Link>
            ))}
            </Box>
           </Box>
            <Box mt="6" mx="3" mb="6">
                <Link to="/support">
            <HStack 
                borderRadius="10px"
                py="3" px="4" _hover={{
                    bg:"F3F3F7",
                    color:"#171717"
                }}
                color="#797E82">
                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="medium" >Support</Text>
                </HStack>
                </Link>
                </Box>
        </Stack>
    );
};

export default Sidenav;
