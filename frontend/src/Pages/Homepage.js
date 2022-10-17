import React from 'react'
import { Container, Box, Text, TabList, TabPanel, Tab, Tabs, TabPanels } from '@chakra-ui/react';
import Login from '../components/Authentication/Login';
import Signup from '../components/Authentication/Signup';
import {  useEffect} from "react";
import { useHistory } from "react-router-dom";

function Homepage() {
  const history=useHistory();
  useEffect(()=>{
      const user=JSON.parse(localStorage.getItem('userInfo'));
     if(user) history.push('/chats');

  },[history]);


  return <Container>
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      textAlign="center"
      bg={"white"}
      w="100%"
      m="40px 0 15px 0"
      borderRadius="lg"
      borderWidth="1px"
    >
      <Text fontSize="3xl" fontFamily="Roboto" >Chat A Lot</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px" color="black" >
      <Tabs variant='soft-rounded' >
        <TabList mb="1em">
          <Tab width='50%' >Login</Tab>
          <Tab width='50%' >Sign Up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Login />
          </TabPanel>
          <TabPanel>
            <Signup />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  </Container>
}

export default Homepage
