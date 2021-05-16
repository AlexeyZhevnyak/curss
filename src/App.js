import './App.css';
import FindCity from './components/FindCity'
import NavState from './components/NavState.js';
import MainMenu from './components/MainMenu.js';
import Login from './components/Login';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import Cities from './components/Cities';

export const UserContext = React.createContext({
    email: '',
    token: '',
    setEmail: (em) => { },
    setToken: (t) => { }
})

function App() {

    return (
        <BrowserRouter>
                <NavState>
                    <MainMenu />
                </NavState>
                <Route exact path='/main' component={FindCity} />
                <Route exact path='/login' component={Login} />
                <Route exact path={'/' + localStorage.getItem('user') + '/cities'} component={Cities}/>
        </BrowserRouter>
    );
}


export default App;
