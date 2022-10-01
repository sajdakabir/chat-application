import { VStack, FormControl, FormLabel, Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react'
import React, { useState } from 'react'

function Signup() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [profile, setPofile] = useState();

    const handleClick = () => setShow(!show);

    const postDetails = (profiles) => {

    };
    const submitHandler = () => { };


    return (
    <VStack spacing='5px'>
        <FormControl id='first-name' isRequired>
            <FormLabel>
                Name
            </FormLabel>
            <Input
                placeholder='Your name'
                onChange={(e) => setName(e.target.value)}
            />
        </FormControl>


        <FormControl id='email' isRequired>
            <FormLabel>
                Email
            </FormLabel>
            <Input
                placeholder='Your Email'
                onChange={(e) => setEmail(e.target.value)}
            />
        </FormControl>



        <FormControl id='password' isRequired>
            <FormLabel>
                Password
            </FormLabel>
            <InputGroup size="md">
                <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <FormControl id='password' isRequired>
            <FormLabel>
                Confirm Password
            </FormLabel>
            <InputGroup size="md">
                <Input
                    type={show ? 'text' : 'password'}
                    placeholder='Password'
                    onChange={(e) => setConfirmpassword(e.target.value)}
                />
                <InputRightElement width='4.5rem'>
                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                    </Button>
                </InputRightElement>
            </InputGroup>
        </FormControl>


        <FormControl id='profile'>
            <FormLabel>
                upload youre profile pic
            </FormLabel>
            <Input
                type='file'
                p={1.5}
                accept='image/*'
                onChange={(e) => postDetails(e.target.files[0])}
            />
        </FormControl>


        <Button
            colorScheme="green"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
        >
            Sign Up
        </Button>



    </VStack>
);
}

export default Signup
