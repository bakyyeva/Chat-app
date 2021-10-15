import React from 'react'
import useLogin from '../../../../hooks/useLogin';
import { FiMoon, FiLogOut } from "react-icons/fi";

export default function Settings() {

    const {logout} = useLogin();

    return (
         <div className="setting">
             <div className="square"  
                 style={{display:'flex', justifyContent:'center', color:'white', height: '27px', width: '27px'}}> 
                 <FiMoon />
              </div>
             <div className="square" 
                style={{display:'flex', justifyContent:'center', color:'white', height: '27px', width: '27px'}}
                onClick={logout}> 
                <FiLogOut /> 
             </div>
         </div>
        
    )
}
