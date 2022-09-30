import React from 'react'
import {Container, Box,Text} from '@chakra-ui/react';
function Homepage() {
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
  </Container>
}

export default Homepage
