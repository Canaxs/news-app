import React, { useState, useEffect } from 'react';
import Inpust from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import { useDispatch } from 'react-redux';
import {ApiProgress} from '../api/apiProgress';
import { loginHandler } from '../redux/authAction';

const AdminLogin = props => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setError(undefined);
  }, [username, password]);


  const onClickLogin = async event => {
    event.preventDefault();
    const creds = {
      username,
      password
    };
    const { history } = props;
    const { push } = history;

    setError(undefined);
    try {
      await dispatch(loginHandler(creds));
      push('/dashboard');
    } catch (apiError) {
      setError(apiError.response.data.message);
    }
  };

  const pendingApiCall = ApiProgress('post', '/api/1.0/admin/auth');

  const buttonEnabled = username && password;

  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <div className='card px-5 py-5'>
            <h1>Login Page</h1>
            <Inpust types={'text'} placeholder={'Kullanıcı Adı'} onChange={event => setUsername(event.target.value)}/>
            <Inpust types={'password'} placeholder={'Şifre'} onChange={event => setPassword(event.target.value)}/>
            <SubmitProgress 
            onClick={onClickLogin}
            pendingApiCall={pendingApiCall}
            disabled={!buttonEnabled || pendingApiCall}
             text={'Giriş Yap'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminLogin;
