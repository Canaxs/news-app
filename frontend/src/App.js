import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin';
import { useSelector } from 'react-redux';

const App = () =>  {

  const { isLoggedIn } = useSelector(store => ({
    isLoggedIn: store.isLoggedIn
  }));
  
  return (
    <div className="App">
      <Router>
        <Switch>
        {!isLoggedIn && <Route exact path="/admin-login" component={AdminLogin} />}
        {isLoggedIn && <Route exact path="/dashboard" component={() => {return "Dashboard Page"}} />}
        <Redirect from={["/login", "/log", "/admin"]} to="/admin-login" />
        <Redirect to="/"/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
