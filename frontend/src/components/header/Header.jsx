import React, { useContext } from 'react'
import { useState } from 'react'
import UserContext from '../../UserContext'
import xmark from '../../assets/img/x-mark.png'
import './header.css'

const Header = () => {
    const {setShow} = useContext(UserContext)
    const [showToggle, setShowToggle] = useState(false)
    
  return (
    <>
        <div className="headerContainer">
            <div className="logo">Logo</div>
            <div className={`navigasi ${showToggle ? 'show' : ''}`}>
                <img src={xmark} alt="" onClick={()=>{
                    setShowToggle(false)
                }} />
                <ul>
                    <li>Kelas</li>
                    <li>Forum</li>
                    <li>Kontak</li>
                    <li>About</li>
                </ul>
                <div className="auth">
                <div className="masuk" onClick={()=>{
                    setShow('masuk')
                }}>Masuk</div>
                <div className="daftar" onClick={()=>{
                    setShow('daftar')
                }}>Daftar</div>
            </div>
            </div>

            <div className='menu-toggle' onClick={()=>{
                setShowToggle(true)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </>
  )
}

export default Header