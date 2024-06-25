import React from 'react'
import Logo from './Logo'
import './Header.scss'

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Logo />
            </div>

            <button className='login-btn' onClick={() => { }}>Login</button>
        </div>
    )
}

export default Header