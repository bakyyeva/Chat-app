import React from 'react'
import useLogin from '../../../../hooks/useLogin';
import { FiMoreHorizontal } from "react-icons/fi";
import { useHistory } from 'react-router-dom';

export default function UserHeader() {
    
    const { push } = useHistory();

    const { selectedUser } = useLogin();
    if(!selectedUser) return null;
   
    return (
        <div className="header">
            <div className="round" 
                style={{backgroundColor:'#C4C4C4', display:'flex', justifyContent:'flex-start'}} >  
            </div>
            <p> 
               {`${selectedUser.first_name} ${selectedUser.last_name}`} 
            </p> 
            <button onClick={() => {
                push('/' + selectedUser.id + '/userdetails') 
                  }}>  
                <FiMoreHorizontal /> 
            </button>
        </div>
    )
}
