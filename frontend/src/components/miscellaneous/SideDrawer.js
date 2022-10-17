import React from 'react'
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Tooltip } from "@chakra-ui/tooltip";
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {ChatState} from '../../Context/ChatProvider';
import ProfileModal from './ProfileModel';





function SideDrawer() {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);

  const {user} = ChatState();

  return (
    <>
     <Box
      display='flex' 
       d="flex"
       justifyContent="space-between"
       alignItems="center"
       bg="white"
       w="100%"
       p="5px 10px 5px 10px"
       borderWidth="5px"
     >
      <Tooltip label='Search Users to chat' hasArrow placement='bottom-end'>

        <Button variant='ghost'>
         <i className="fas fa-search"></i>
         <Text d={{ base: "none", md: "flex" }} px={4}>
          Search User
         </Text>
        </Button>
      </Tooltip>


      <Text fontSize="2xl" fontFamily="Work sans">
          Chat-A-Lot
        </Text>

        <div>
          <Menu>
            <MenuButton p={1}>
              {/* <NotificationBadge
                count={notification.length}
                effect={Effect.SCALE}
              /> */}
              <BellIcon fontSize="2xl" m={1} />
            </MenuButton>
            {/* <MenuList pl={2}></MenuList> */}
          </Menu>
          <Menu>
            <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
              <Avatar
                size="sm"
                cursor="pointer"
                name={user.name}
                src={user.profile}
              />
              
            </MenuButton>
            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider />
              <MenuItem >Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>

     </Box>
    </>
  )
}

export default SideDrawer
