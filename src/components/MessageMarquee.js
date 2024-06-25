import React from 'react';
import Marquee from 'react-fast-marquee';
import './MessageMarquee.scss';

const messages = [
    " Start you savings efficiently with National Bank's Fixed Deposit with 20% interest rate",
    " KYC is mandatory. So, the online payment system has been temporarily closed for those users whose verification is not completed"
]

const MessageMarquee = () => {


    return (
        <div className="marquee-container">
            <Marquee speed={30} pauseOnHover={true} className="marquee-message" gradientColor='red'>
                {messages.map((message, index) => (
                    <span key={index} >
                        |&nbsp;&nbsp;{message} &nbsp;&nbsp;&nbsp;&nbsp;
                    </span>
                ))}
            </Marquee>
        </div>
    )
}

export default MessageMarquee