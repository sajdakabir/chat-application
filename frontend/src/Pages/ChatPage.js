import {ChatState} from '../Context/ChatProvider';
import {Box} from '@chakra-ui/layout';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import ChatBox from '../components/ChatBox'

const Chatpage = () => {
 
  const { user } = ChatState();

//   return (
//     <div style={{ width: "100%" }}>
//       {user && <SideDrawer />}
//       <Box d="flex" 
//       disply='flex'
//       justifyContent="space-between"
//        w="100%"
//         h="91.5vh"
//          p="10px">
//         {user && <MyChats/>}
//         {user && <ChatBox/>}
//       </Box>
//     </div>
//   );
// };



return (
  <div style={{ width: "100%" }}>
    {user && <SideDrawer />}
    <Box display='flex' d='flex' justifyContent='space-between' w='100%' h='91.5vh' p='10px'>
      {user && <MyChats />}
      {user && (
        <ChatBox />
      )}
    </Box>
  </div>
);
};


export default Chatpage;
