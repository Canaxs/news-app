import React, { useState, useEffect } from 'react';
import Input from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';
import { useDispatch } from 'react-redux';
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
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <div className='card px-5 py-5'>
            <h1>Login Page</h1>
            <Input types={'text'} placeholder={'Kullanıcı Adı'} onChange={event => setUsername(event.target.value)}/>
            <Input types={'password'} placeholder={'Şifre'} onChange={event => setPassword(event.target.value)}/>
            <SubmitProgress pendingApiCall={false} text={'Giriş Yap'} onClick={onClickLogin}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminLogin;
