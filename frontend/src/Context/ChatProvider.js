import { useConst} from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const ChatContext=createContext();

const ChatProvider=({children})=>{
    const [user,setUser]=useState();
    const history=useHistory();
    useEffect(()=>{
        const userInfo=JSON.parse(localStorage.getItem('userInfo'));
        setUser(userInfo);

        if(!userInfo){
            history.push('/');
        }
    },[history]);

    return <ChatContext.Provider>{children}</ChatContext.Provider>
};


export const ChatState=()=>{
    return useConst(ChatContext);
};


export default ChatProvider;