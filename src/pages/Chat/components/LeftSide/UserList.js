import React from 'react'
import useLogin from '../../../../hooks/useLogin';

export default function UserList({searchText}) {

    const {userList, selectUser } = useLogin();

        //  const filteredUserList = userList.filter((u) =>
        //     `${u.username}${u.first_name}${u.last_name}`
        //     .toLowerCase()
        //     .includes(searchText.toLowerCase())
        // );

    return (
  
        <div className="user-list">
            {userList.map((user)=>{
             const lastMessage = user.messages[user.messages.length - 1].text; 
                return( 
                  <div className="user" key="user.id" onClick={()=>{
                    selectUser(user.id) 
                  }} >
                      <div className="round" 
                         style={{display:'flex', justifyContent:'flex-start'}}> 
                       </div>
                       <div className="user-message"> 
                          {`${user.first_name} ${user.last_name}`}   
                          <p>
                             {" "}
                             {`${lastMessage.slice(0, 20)}`}
                          </p>
                       </div>
                  </div>
                )
            })}
        </div>
    )
}
