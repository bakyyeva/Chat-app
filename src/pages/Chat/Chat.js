import React, { useState } from "react";
import SearchInput from './components/LeftSide/SearchInput';
import UserList from './components/LeftSide/UserList';
import Settings from './components/LeftSide/Settings';
import UserHeader from './components/RightSide/UserHeader';
import Messages from "./components/RightSide/Messages";
import MessageInput from './components/RightSide/MessageInput';
import { Redirect } from "react-router";

import './Chat.css';
import useLogin from "../../hooks/useLogin";

function Chat() {
 
  const [search, setSearch] = useState();

  const { user } = useLogin();

  if (!user) return <Redirect to="/login" />;
 
  return (
    <div className="chat-container">
       <div className="left-side"> 
          <SearchInput searchText={search} handleOnChange={setSearch} />
          <UserList searchText={search} />
          <Settings />
        </div>
       <div className="right-side"> 
          <UserHeader />
          <Messages />
          <MessageInput />
       </div>
      
    </div>
  );
}

export default Chat;
