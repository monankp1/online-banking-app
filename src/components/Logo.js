import React from 'react'
import { RiBankLine } from "react-icons/ri";
import './Logo.scss';

const Logo = () => {
    return (
        <div className='container'>
            <RiBankLine size={50} />
            <p className='bank-name'>National Bank</p>
        </div>
    )
}

export default Logo