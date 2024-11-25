import { HStack, Icon, Stack,Text,Tag, Button } from '@chakra-ui/react'
import React from 'react'
import { CiCircleInfo } from "react-icons/ci";
const Portfolio = () => {
  return (
    <HStack bg="white"  borderRadius="xl" p="6"  justify="space-between" flexDir={{
      base:"column",
      xl:"row"
    }}
    align={{
      base:"flex-start",
      xl:"center",
    }}>
        <HStack
        flexDir={{
          base:"column",
          xl:"row"
        }}
        align={{
          base:"flex-start",
          xl:"center",
        }} spacing={{
          base:0,
          xl:16
        }}>
        <Stack >
            <HStack color="black.80">
                <Text fontSize="14px" >Total Portfolio Value
                    </Text>
                    <Icon as={CiCircleInfo}/>
                </HStack>
                <Text  textstyles="h2" fontWeight="medium">112,345.12Rs</Text>
             
        </Stack>
        <Stack >
            <HStack color="black.80" >
                <Text fontSize="sm" >Wallet Balances
                    </Text>     
                </HStack>
                <HStack spacing={{
                  base:0,
                  xl:16
                }}  flexDir={{
          base:"column",
          xl:"row"
        }}
        align={{
          base:"flex-start",
          xl:"center",
        }}>
                <HStack>
                <Text  textstyles="h2" fontWeight="medium">112,312.24Rs</Text><Tag>BTC</Tag>
                </HStack>
                <HStack>
                <Text  textstyles="h2" fontWeight="medium">1,300.00Rs</Text><Tag>BTC</Tag>
                </HStack>
                </HStack>   
        </Stack>
        </HStack>
        <HStack>
                  <Button>Deposit</Button>
                  <Button>Withdraw</Button>
                </HStack>
             
    </HStack>

  )
}

export default Portfolio