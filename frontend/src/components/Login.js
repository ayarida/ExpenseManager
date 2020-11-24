import React from 'react'; 
import axios from 'axios'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const Login = (props)=>{

    const [isLoggedIn,setIsLoggedIn]=React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            console.log(response);

            axios.post('http://localhost:8000/login', {
                email: email, 
                password: password
            }).then(response => {
                let UserState = {
                    isLoggedIn: setIsLoggedIn(true),
                    user: {
                        email:email,
                        password: password
                    }
                  };
                localStorage.setItem('UserState',JSON.stringify(UserState)); 
                console.log(response);
            }).catch( error => {});

        });
           
    } 
    //const UserState=JSON.parse(localStorage.getItem('UserState')); 
    if(isLoggedIn===true){
        return <Redirect to={"/"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>  
                
            </form>
        </div>
    );

}
export default Login; 