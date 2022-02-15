import React from 'react'
import Input from '../fixedComponents/Input';
import SubmitProgress from '../Components/SubmitProgress';

const AdminLogin = (props) => {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-md-6'>
          <div className='card px-5 py-5'>
            <h1>Login Page</h1>
            <Input types={'text'} placeholder={'Kullanıcı Adı'} />
            <Input types={'password'} placeholder={'Şifre'} />
            <SubmitProgress pendingApiCall={false} text={'Giriş Yap'}/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AdminLogin;
