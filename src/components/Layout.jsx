import React from 'react'
import Sidenav from './Sidenav'
import { Container,Flex, Box, useDisclosure} from '@chakra-ui/react'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const Layout = ({title,children}) => {
    const {isOpen,onClose,onOpen} = useDisclosure()
  return (
    <div>
        <Flex>
         
            <Box display={{
                base:"none",
                lg:"flex",
            }}>
            <Sidenav />
            </Box>
            <SideDrawer isOpen={isOpen} onClose={onClose} display={{
            base:"block",
            lg:"none",
            }}/>
            <Box flexGrow={1}>
                <TopNav title={title} onOpen={onOpen}/>
                <Container mt="6" maxW="70rem">
                    {children}
                </Container>
            </Box>
        </Flex>
    </div>
  )
}

export default Layout