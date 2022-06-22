import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
        <div className="col-lg-6 col-md-12 containerForm">
            <form className='formContainer' action="">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Password' />
                <div className="buttonNih">
                <div className='daftar daftarRegister'>Masuk</div>
                <p>Atau</p>
                <div className='masuk masukRegister'>Daftar</div>
                </div> 
            </form>
        </div>
    </>
  )
}

export default Login