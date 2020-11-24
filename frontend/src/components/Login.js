import React from 'react'; 
import axios from 'axios'; 


const Login = (props)=>{
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.get('http://localhost:8000/sanctum/csrf-cookie')
        // axios.post('https://api.sanctum.test/login', {
        //     email: email,
        //     password: password
        // }).then(response => {
        //     console.log(response)
        // });
        axios.defaults.withCredentials=true;
        axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
            console.log(response);

            axios.post('http://localhost:8000/login', {
                email: email, 
                password: password
            }).then(response => {
                console.log(response)
            }).catch( error => {});

        });
           
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