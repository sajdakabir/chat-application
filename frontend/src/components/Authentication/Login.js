import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react'
function Login() {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
   

    const handleClick = () => setShow(!show);
    const submitHandler = () => { };


  return (
    <VStack spacing="10px">
    <FormControl id="email" isRequired>
      <FormLabel>Email</FormLabel>
      <Input
        value={email}
        type="email"
        placeholder="Your Email"
        onChange={(e) => setEmail(e.target.value)}
      />
    </FormControl>
    <FormControl id="password" isRequired>
      <FormLabel>Password</FormLabel>
      <InputGroup size="md">
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={show ? "text" : "password"}
          placeholder="Password"
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleClick}>
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
    </FormControl>
    <Button
      colorScheme="green"
      width="100%"
      style={{ marginTop: 15 }}
      onClick={submitHandler}
    >
      Login
    </Button>
    <Button
      variant="solid"
      colorScheme="red"
      width="100%"
      onClick={() => {
        setEmail("guest@example.com");
        setPassword("123456");
      }}
    >
      Get Guest User Credentials
    </Button>
  </VStack>
  );
};

export default Login
