import React, { useEffect, useState } from 'react';
import styles from './Transfer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';




const Transfer = ({ show, handleClose }) => {
    const { account, balance } = useSelector((state) => state.user);
    // console.log("Account --", account);

    const [transferDetails, setTransferDetails] = useState({
        amount: '',
        receiverAccount: '',
        receiverUserName: '',
        senderAccount: '',
    });
    console.log("Transfer details check", transferDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'user_fetchUsers' });
    }, []);

    useEffect(() => {
        setTransferDetails((prevData) => ({ ...prevData, senderAccount: account }))
    }, [account]);

    if (!show) {
        return null;
    }




    const handleChange = (e) => {
        setTransferDetails((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    };





    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(transferDetails);
        dispatch({ type: 'user_transferMoney', payload: transferDetails })
        handleClose()
        setTransferDetails({
            ...transferDetails,
            amount: '',
            receiverAccount: '',
            receiverUserName: '',
        });
    };

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    return (
        <div className={styles.modalOverlay} onClick={handleOverlayClick}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2 className={styles.title}>Transfer Details</h2>
                    <p>Your current Balance is {balance}/- </p>
                    <button onClick={handleClose} className={styles.closeButton}>×</button>
                </div>
                <div className={styles.modalBody}>
                    {/* {error && <div className={styles.error}>{error}</div>} */}
                    <form onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="receiverUserName">User Name:-
                                <input
                                    type="text"
                                    name="receiverUserName"
                                    value={transferDetails.receiverUserName}
                                    onChange={handleChange}
                                    placeholder="Enter Receiver's Username"
                                    required
                                />
                            </label>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="receiverAccount">Account Number:-
                                <input
                                    type="number"
                                    name="receiverAccount"
                                    value={transferDetails.receiverAccount}
                                    onChange={handleChange}
                                    placeholder="Receiver's Account number"
                                    required
                                />
                            </label>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="amount">Amount to be transfered:-
                                <input
                                    type='number'
                                    name="amount"
                                    value={transferDetails.amount}
                                    onChange={handleChange}
                                    placeholder="Amount to be transferred"
                                    required
                                />
                            </label>
                        </div>
                        <div className={styles.loginBtn}>
                            <Button type="primary" htmlType="submit" className={styles.submitButton}>Transfer</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Transfer;
