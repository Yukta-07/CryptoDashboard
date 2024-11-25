import React from 'react'
import { Stack,HStack,Icon,Text,Button,Flex,Image,Tabs,Tab,TabList,TabPanels,TabPanel} from '@chakra-ui/react'
import { CustomCard } from '../../../chakra/CustomCard'
import { BsArrowUp } from "react-icons/bs";

const PriceSection = () => {
   const timeStamps = ["7:15 PM" , "7:55 PM", "8:55 PM" ,"9:55 PM", "10:55 PM"]
  return (
   <CustomCard>
    <Flex justify="space-between" align="start" >
    <HStack>
      <Stack >
            <HStack color="black.80" >
                <Text fontSize="sm" >Current Price
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
                <Text  textstyles="h2" fontWeight="medium">112,312.24Rs</Text>{" "}
                <HStack fontWeight="md" color="green.500">
                    <Icon as={ BsArrowUp}></Icon>
                <Text  fontSize="sm" fontWeight="medium">22%</Text>
                </HStack>

                </HStack>
               
                </HStack>   
        </Stack>
        <HStack>
                  <Button>Buy</Button>
                  <Button>Sell</Button>
                </HStack>
      </HStack>
    </Flex>
    <Tabs variant='soft-rounded' colorScheme='green'>
<Flex justify="end" >
<TabList bg="black.5" p="3px">
    {
        ["1W","1D","1M","1Y"].map((tab) => (
            <Tab key={tab}  
            _selected={{ bg: 'white' }}
             fontSize="sm"
              p="6px" 
              borderRadius="4">{tab}</Tab>
        ))
    }

  </TabList>
</Flex>
  <TabPanels>
    <TabPanel>
      <p>one!</p>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    <Image w="100%" src="\Graph.svg" mt="3rem"/>
     <HStack justify="space-between">
        {
          timeStamps.map((timestamp) => (
    <Text key={timestamp} fontSize="sm" color="black.80">{timestamp}</Text>
          ))
        }
     </HStack>
   </CustomCard>
  )
}

export default PriceSection