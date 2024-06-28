import React from 'react';
import './Header.scss';
import ButtonComponent from './ButtonComponent';
import Logo from './Logo';
import { useSelector } from 'react-redux';



const Header = ({ handleLogin, handleLogout, handleTransfer }) => {
    const { isLoggedIn } = useSelector((state) => state.user);

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <Logo />
            </div>
            <div>
                {isLoggedIn ? (
                    <>
                        <ButtonComponent name='Transfer' onClick={handleTransfer} className="transfer-btn" />
                        <ButtonComponent name='Logout' onClick={handleLogout} className="logout-btn" />
                    </>

                ) : (
                    <ButtonComponent name='Login' onClick={handleLogin} className="login-btn" />
                )
                }
            </div>
        </div>
    );
}

export default Header;
