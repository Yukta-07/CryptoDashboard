import React from 'react'
import { Container, Flex,Icon, Heading,MenuButton, Menu,Button, MenuList, MenuItem, HStack, Box} from '@chakra-ui/react'
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
const TopNav = ({title,onOpen}) => {
  return (
    <Box bg="white" px="4">
        <HStack maxW="70rem" mx="auto" h="16" justify="space-between">
          <Icon as={FaBars} onClick={onOpen}></Icon>
            <Heading fontSize="28px">{title}</Heading>
            <Menu>
  <MenuButton >
<Icon as={FaUserCircle} fontSize="24px"/>
  </MenuButton>
  <MenuList>
    <MenuItem>Logout</MenuItem>
    <MenuItem>Support</MenuItem>
  </MenuList>
</Menu>
 
    </HStack>
    </Box>
  )
}

export default TopNav