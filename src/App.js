import './App.css';
import FindCity from './components/FindCity'
import NavState from './components/NavState.js';
import MainMenu from './components/MainMenu.js';
import Login from './components/Login';
import {Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <NavState>
          <MainMenu />
        </NavState>
        <Route path = '/main'  component={FindCity} />
        <Route path = '/login' component={Login} />
    </BrowserRouter>
  );
}


export default App;
