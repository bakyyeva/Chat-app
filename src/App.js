import { useState, useEffect } from 'react';
import UserContext from './context/login';
import mockUsers  from './mock-users.json';
import Routes from './Routes';

function App() {

  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userList, setUserList] = useState(mockUsers.users)

   const selectUser = (userId) => { 
     const user = mockUsers.users.find(user => user.id===userId)
      if(user)  setSelectedUser(user)
    }
    const handleSentMessage = (messageText) =>{
      const newSelectedUser = {
        ...selectedUser,
        messages: [
          ...selectedUser.messages,
          {
            id: Math.random(),
            text: messageText,
            sender: user.id,
          },
        ],
      };
  
      setSelectedUser(newSelectedUser);
  
      const newUserList = userList.map((u) => {
        if (u.id === selectedUser.id) return newSelectedUser;
        else return u;
      });
  
      setUserList(newUserList);

      localStorage.setItem(
        `chat_app_user_list ${user.id}`,
        JSON.stringify(newUserList)
      );
      
    }
  
  const login = (user)=>{
    setUser({user});
    localStorage.setItem("chat_app_user", JSON.stringify(user));
  }
  const logout = ()=>{
   setUser(null);
   localStorage.removeItem("chat_app_user");
 }
  useEffect(() =>{
     const usernameFromStorage = localStorage.getItem("chat_app_user");
     if(usernameFromStorage) {
       setUser(usernameFromStorage)
     }

    const userListFromStorage = localStorage.getItem("chat_app_user_list");
    if (userListFromStorage) {
      const users = JSON.parse(userListFromStorage);
      setUserList(users);
    }
  }, [])

 return (
     <UserContext.Provider 
     value={{
       user,
       userList: mockUsers.users,
       selectedUser,
       selectUser,
       login,
       logout,
       handleSentMessage,
     }}> 
       <Routes />
    </UserContext.Provider>
  );
}

export default App;
