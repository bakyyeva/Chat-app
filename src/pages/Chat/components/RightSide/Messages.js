import React from 'react'
import useLogin from '../../../../hooks/useLogin';

export default function Messages() {
    const { user, selectedUser} = useLogin();

    return (
        <div className="messages">
            { selectedUser ? selectedUser.messages.map((message)=>{
                return(
                   <div 
                      className={`message-container 
                      ${message.sender !== user.id ? "from-them" : "" }`} >  
                      <div className="message" key="message.id">
                           {message.text}
                      </div>  
                   </div>
                 );
             }): null}
        </div>
    )
}
