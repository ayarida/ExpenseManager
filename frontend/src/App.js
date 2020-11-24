import React from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import createCategory from './components/createCategory';

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

            <div>
                <NavLink to='/category'>Create Category</NavLink>
            </div>
            <Switch>
                <Route path='/category' component={createCategory} />
            </Switch>
        </Router>
    );
};

export default App;