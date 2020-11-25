import React from 'react'; 
import axios from 'axios'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

const Register = (props)=>{

    const [isLoggedIn,setIsLoggedIn]=React.useState(false);
    const [name,setName]=React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [password_confirmation,setConfirmPassword]=React.useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            console.log(response);

            axios.post('http://localhost:8000/register', {
                name: name,
                email: email, 
                password: password,
                password_confirmation: password_confirmation
                
            }).then(response => {
                let UserState = {
                    isLoggedIn: setIsLoggedIn(true),
                    user: {
                        name: name,
                        email:email,
                        password: password,
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
            <h1>Register:</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
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
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Confirm Password"
                    value={password_confirmation}
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>        
            </form>
        </div>
    );

}
export default Register; 