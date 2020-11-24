import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

const App = () => {
    return (
        <Router>
            <div>
                <NavLink to='/login'>Login</NavLink>
            </div>
            <Switch>
                <Route path='/login' component={Login} />
            </Switch>
            <div>
                <NavLink to='/'>Home</NavLink>
            </div>
            <Switch>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    );
};

export default App;