import React, { useEffect , Fragment } from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import setAuthToken from "./utils/setAuthToken"
import {store} from './index'
import {loadUser} from './store/actions/auth'

import PrivateRoute from './utils/PrivateRoute'
import Welcome from './components/Welcome'
import Login from './components/Login'
import Signup from './components/Signup'
import Alerts from './components/Alert'
import Dashboard from './components/Dashboard'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute exact path="/dashboard" component={Dashboard} />

      </Switch>
      <Alerts/>
    </Fragment>
    
  );
}

export default App;
