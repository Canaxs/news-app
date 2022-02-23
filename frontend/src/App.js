import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Redirect, Switch,MemoryRouter } from 'react-router-dom';
import AdminLogin from './Pages/AdminLogin';
import Dashboard from './Pages/Dashboardui';
import Newsui from './Pages/Newsui';
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
        {isLoggedIn && <Route exact path="/dashboard" component={Dashboard} />}
        {isLoggedIn && <Route exact path="/dashboard/news" component={Newsui} />}
        <Redirect exact from={'/login'} from={'/admin'} to="/admin-login" />
        <Redirect to="/"/>
        
        </Switch>
      </Router>
    </div>
  );
}

export default App;
