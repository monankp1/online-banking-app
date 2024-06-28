import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import MessageMarquee from '../components/MessageMarquee'
import { useDispatch, useSelector } from 'react-redux';
import Login from '../components/Login';
import About from '../components/About';
import Features from '../components/Features';
import { ToastContainer } from 'react-toastify';
import Transfer from '../components/Transfer';

const Home = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showTransferModal, setShowTransferModal] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch({ type: 'features_fetchFeatures' });
    }, [dispatch]);





    const handleLogin = () => {
        setShowLoginModal(true);
    };

    const handleLogout = () => {
        dispatch({ type: 'user_logout' });
    };

    const handleCloseLogin = () => {
        setShowLoginModal(false);


    };

    const handleTransfer = () => {
        setShowTransferModal(true);
    }

    const handleCloseTransfer = () => {
        setShowTransferModal(false);
    }


    return (
        <div>
            <Header
                handleLogin={handleLogin}
                handleLogout={handleLogout}
                handleTransfer={handleTransfer}
            />
            <MessageMarquee />
            <Features />
            <About />
            <ToastContainer />
            <Login show={showLoginModal} handleClose={handleCloseLogin} />
            <Transfer show={showTransferModal} handleClose={handleCloseTransfer} />

        </div>
    )
}

export default Home