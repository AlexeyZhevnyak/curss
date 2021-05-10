import './App.css';
import FindCity from './components/FindCity'
import NavState from './components/NavState.js';
import MainMenu from './components/MainMenu.js';
import Login from './components/Login';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';

export const UserContext = React.createContext({
    email: '',
    token: '',
    setEmail: (em) => { },
    setToken: (t) => { }
})

function App() {

    return (

        <BrowserRouter>
            <UserContext.Provider>
                <NavState>
                    <MainMenu />
                </NavState>
                <Route exact path='/main' component={FindCity} />
                <Route exact path='/login' component={Login} />
            </UserContext.Provider>

        </BrowserRouter>


    );
}


export default App;
