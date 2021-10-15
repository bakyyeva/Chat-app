import { useContext } from "react";
import UserContext from "../context/login";

function useLogin() {
    const {user, userList, selectedUser, selectUser, login, logout, handleSentMessage} = useContext(UserContext);

    return({user, userList, selectedUser, selectUser, login, logout, handleSentMessage});
}

export default useLogin;