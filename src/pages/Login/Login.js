import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import {Redirect, useLocation} from 'react-router-dom';
import Input from "../../components/input";
import './Login.css';
import Button from "../../components/Button";

function Login() {

    const {user, login} = useLogin();

    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const {pathname} = useLocation();
   
     const handleSubmitLogin = () => {
       login({
           id: Math.random(),
           username,
           firstname,
           lastname,
       })
     }
     if(user && pathname==='/login') return <Redirect to="/chat" />
     
    return(
        <div className="login">
            <p> Log in to your account </p>
           <Input 
                type="text" 
                placeholder="User Name"
                onChange={(e) => {
                setUsername(e.target.value)  }} 
             />
           <Input 
                type="text" 
                placeholder="First Name"
                onChange={(e) => {
                setFirstname(e.target.value) }} 
             />
           <Input 
                type="text" 
                placeholder="Last Name"
                onChange={(e) => {
                setLastname(e.target.value)}} 
             />
           <Button onClick={handleSubmitLogin}
              text="Login"  > 
                Login 
           </Button>
        </div>
    );
}

export default Login;