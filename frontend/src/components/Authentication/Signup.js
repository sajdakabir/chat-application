import { VStack, FormControl, FormLabel, Input, InputRightElement, Button, InputGroup } from '@chakra-ui/react'
import React, { useState } from 'react';
import { useToast } from '@chakra-ui/react'

function Signup() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [profile, setPofile] = useState();
    const[loading,setLoading]=useState(false);

    const handleClick = () => setShow(!show);
    const toast = useToast();

    const postDetails = (profiles) => {
        setLoading(true);
        if(profiles===undefined){
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              return;
        }
        console.log(profiles);
        if(profiles.type==='image/jpeg' || profiles.type==='image/png'){
            const data=new FormData();
            data.append('file',profiles);
            data.append('upload_preset','nodeJsChatApp');
            data.append('cloud_name','dxgycgq3l');
            fetch('https://api.cloudinary.com/v1_1/dxgycgq3l/image/upload',{
                method:'post',
                body:data,
            }).then((res)=>res.json())
            .then((data)=>{
                setPofile(data.url.toString());
                console.log(data.url.toString());
                setLoading(false);
            }).catch((err)=>{
                console.log(err);
                setLoading(false);
            });
        }else{
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
              });
              setLoading(false);
              return;
        }
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
            isLoading={loading}
        >
            Sign Up
        </Button>



    </VStack>
);
}

export default Signup
