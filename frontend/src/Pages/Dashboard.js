import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutSuccess } from '../redux/authAction';

const Dashboard = () => {

    const { isLoggedIn,username,password } = useSelector(store => ({
        isLoggedIn: store.isLoggedIn,
        username: store.username,
        password: store.password
      }));

      const dispatch = useDispatch();

        const onLogoutSuccess = () => {
            dispatch(logoutSuccess());
        };


  return (
    <div>
        <ul className="navbar-nav ml-auto">
        <li>
           <h1>{password}</h1>
        </li>
        <li className="nav-link" onClick={onLogoutSuccess} style={{ cursor: 'pointer' }}>
          {('lOGOUT')}
        </li>
      </ul>
    </div>
  )
}

export default Dashboard;
