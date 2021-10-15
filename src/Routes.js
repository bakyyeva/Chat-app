import React from "react";
import {
   // BrowserRouter as Router,
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Login from "./pages/Login";
import Chat from './pages/Chat';
import UserDetails from "./pages/UserDetails";

export default function Routes() {
    return (
       <Router>
           <Switch>
                <Route path="/chat">
                   <Chat />
                 </Route>
                <Route path="/:id/userdetails">
                   <UserDetails />
                </Route>
                <Route path="/chat/:id">
                   <Chat />
                </Route>
                <Route path="/login"> 
                  <Login />
                </Route>
           </Switch>
       </Router>
    )
}

