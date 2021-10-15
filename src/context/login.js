import React from "react";

 const UserContext = React.createContext({
  user: null,
  selectedUser: null,
  userList: [],
  login: () => {},
  logout: () => {},
  selectUser: () => {},
  handleSentMessage: ()=> {},
});

export default UserContext;
