import React from 'react'
import { CustomCard } from '../../../chakra/CustomCard'
import { Tag,Text } from '@chakra-ui/react'
const InfoCard = ({imgUrl,text,tagText,inverted}) => {
  return (
   <CustomCard 
   bg={inverted ? "p.purple" : "white"}
   bgImage={imgUrl} bgSize="cover" bgRepeat="no-repeat">
    <Tag bg={inverted ? "white" : "p.purple"} color={inverted ? "p.purple" : "white"} borderRadius="full">{tagText}</Tag>
    <Text fontSize='18px' fontWeight="500"
     color={inverted ? "white" : "p.purple"}>
        {text}
    </Text>
   </CustomCard>
  )
}

export default InfoCard