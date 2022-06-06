import React from 'react'
import './register.css'

const Register = () => {
  return (
        <div className="col-lg-6 containerForm">
            <form className='formContainer' action="">
                <input type="text" placeholder='Username' />
                <input type="text" placeholder='Email' />
                <input type="text" placeholder='Nomor Handphone' />
                <input type="text" placeholder='Password' />
                <div className="buttonNih">
                <div className='daftar daftarRegister'>Daftar</div>
                <p>Atau</p>
                <div className='masuk masukRegister'>Masuk</div>
                </div> 
            </form>
        </div>
  )
}

export default Register