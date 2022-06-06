import React, { useContext } from 'react'
import UserContext from '../../UserContext'
import './header.css'

const Header = () => {
    const {setShow} = useContext(UserContext)
    
  return (
    <>
        <div className="headerContainer">
            <div className="logo">Logo</div>
            <div className="navigasi">
                <ul>
                    <li>Kelas</li>
                    <li>Forum</li>
                    <li>Kontak</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="auth">
                <div className="masuk" onClick={()=>{
                    setShow('masuk')
                }}>Masuk</div>
                <div className="daftar" onClick={()=>{
                    setShow('daftar')
                }}>Daftar</div>
            </div>
        </div>
    </>
  )
}

export default Header