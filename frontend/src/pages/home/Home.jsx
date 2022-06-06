import React, { useContext } from 'react'
import Login from '../../components/login/Login'
import Register from '../../components/register/Register'
import UserContext from '../../UserContext'
import './home.css'


const Home = () => {
    const {show} = useContext(UserContext)
    
return (
    <>
    <div className="row homeContainer">
        {!show ? <div className="col-lg-6 homeleft">
            <h3>WHO EVER YOU ARE !!!</h3>
            <p>Perempuan atau laki-laki, muda atau tua, Anak IT atau bukan, <br/> punya bakat atau tidak, kamu juga bisa mulai belajar <br/> programming, design, dll. daftar gratis sekarang juga!</p>
            <div className="daftarSekarang">
                Daftar Sekarang
            </div>
        </div> : null}
        {show === 'daftar' ? <Register/> : null}
        {show === 'masuk' ? <Login/> : null}
        <div className="col-lg-6 homeright">
            <div className="flayer"></div>
            <div className="blayer"></div>
        </div>
    </div>
    </>
    )
}

export default Home