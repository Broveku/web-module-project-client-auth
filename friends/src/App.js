import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute'
import FriendsList from './components/FriendsList';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/logout'>Logout</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>
       
      <Switch>
        <PrivateRoute path='/protected' component={FriendsList} />
        <PrivateRoute path='/logout' component={Logout} /> 
        <Route path='/login' component={Login} />
        <Route path='/' component={Login} />
      </Switch>

      </div>
    </Router>
  );
}

export default App;
