import React, { Fragment } from 'react'
import { CustomCard} from '../../../chakra/CustomCard'
import { Stack, Text,Flex,Grid,Icon, Divider,Button} from '@chakra-ui/react'
import { FaRupeeSign } from "react-icons/fa";
const Transaction = () => {
    const transactions = [
        {
            id:"1",
            icon:"FaRupeeSign",
            text:"INR Deposit",
            amount:"+ 81,123.10",
            timeStamp:"02-09-2024 7:15 PM"
        },
        {
            id:"2",
            icon:"FaRupeeSign",
            text:"INR Deposit",
            amount:"+ 81,123.10",
            timeStamp:"02-09-2024 7:15 PM"
        },
        {
            id:"3",
            icon:"FaRupeeSign",
            text:"INR Deposit",
            amount:"+ 81,123.10",
            timeStamp:"02-09-2024 7:15 PM"
        },
    ]
  return (
    <CustomCard>
        <Text mb="6" textStyle="h6">Recent Transactions</Text>
        <Stack spacing={4}>
            {transactions.map((transaction,i) => (
              <Fragment  key={transaction.id} >
{i !== 0 && <Divider mt="4"/>}
                  <Flex gap="4" w="full" >
                    <Grid placeItems="center" bg="black.5" boxSize={10} borderRadius="full">
<Icon as={transaction.icon}/>
                    </Grid>
<Flex justify="space-between" w="full">
    <Stack spacing={0}>
        <Text fontSize="sm" color="black.80">
            {transaction.text}
        </Text>
        <Text fontSize="sm" color="black.40">
            {transaction.timeStamp}
        </Text>
    </Stack>
    <Text fontSize="sm" color="black.40">
            {transaction.amount}
        </Text>
</Flex>
                </Flex>
              </Fragment>
            ))}
        </Stack>
        <Button w="full" colorScheme="gray" mt="6" >View All</Button>
    </CustomCard>
  )
}

export default Transaction