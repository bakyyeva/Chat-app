import React from 'react'
import { Redirect } from "react-router";
import Header from './components/Header';
import Blocks from './components/Blocks';

import './UserDetails.css'
import SearchInput from '../Chat/components/LeftSide/SearchInput';
import UserList from '../Chat/components/LeftSide/UserList';
import Settings from '../Chat/components/LeftSide/Settings';
import { useState } from "react";

export default function UserDetails() {

    const [searchText, setSearchText] = useState("");
    
    if (localStorage.getItem("chat_app_user") == null) {
        return <Redirect to="/login"></Redirect>;
      }
    return (
        <div className='user-details-container'>
            <div className='details-left-side'>
                <SearchInput value={searchText} onChange={setSearchText} />
                <UserList searchText={searchText} />
                <Settings />
            </div>
            <div className='details-right-side'>  
               <Header />
               <Blocks />
            </div>
        </div>
    )
}
