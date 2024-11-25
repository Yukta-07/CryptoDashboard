import React from 'react'
import Sidenav from '../../components/Sidenav'
import TopNav from '../../components/TopNav'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import Layout from '../../components/Layout'
import Portfolio from './Components/Portfolio'
import PriceSection from './Components/PriceSection'
import Transaction from './Components/Transaction'
import InfoCard from './Components/InfoCard'

const Dashboard = () => {
  return (
    <>
 <Layout title="Dashboard">
  <Grid gridTemplateColumns={{
    base:"repeat(1,1fr)",
    md:"repeat(2,1fr)"
  }}
  gap="6">
    <GridItem colSpan={2}>
    <Portfolio/>
    </GridItem>
    <GridItem colSpan={1}>
    <PriceSection/>
    </GridItem>
    <GridItem colSpan={1}>
   <Transaction/>
    </GridItem>
    <GridItem colSpan={1}>
    <InfoCard  imgUrl="\dots.png" text="Learn more about Loans - Keep your bitcoin, access it's value without selling it." tagText="Loan" inverted={false}/>
    </GridItem>
    <GridItem colSpan={1}>
    <InfoCard  imgUrl="\dots.png" text="Learn more about our real estate, mortgage, and corporate account services" tagText="Contact"  inverted={true}/>
    </GridItem>
  </Grid>
 </Layout>
 </>
  )
}

export default Dashboard