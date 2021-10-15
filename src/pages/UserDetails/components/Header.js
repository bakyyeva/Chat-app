import React from 'react'
import { FiX } from "react-icons/fi";
import useLogin from '../../../hooks/useLogin';
import {useHistory} from 'react-router-dom';

export default function Header() {

     const {push} = useHistory();
     const {selectedUser} = useLogin();

     if(!selectedUser) return null;

    return (
        <div className="detail-container">
            <button  onClick={() => {push('/chat/' + selectedUser.id)}} >
                <FiX /> 
            </button>       
            <div className="round-detail" 
               style={{ display:'flex', justifyContent:'center', alignItems:'center'}}
             ></div>
            <div className='user-detail'> 
                {`${selectedUser.first_name} ${selectedUser.last_name}`}
               <p style={{marginBottom:'0px'}} > last seen 2 hours ago </p>  
            </div>     
        </div>
    )
}
