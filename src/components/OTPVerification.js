import React, { useState } from 'react';

const OTPVerification = ({ history }) => {
    const [otp, setOTP] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle OTP verification logic
        // Redirect to password setup page upon success
        history.push('/password-setup');
    };

    return (
        <div>
            <h2>OTP Verification</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                />
                <button type="submit">Verify OTP</button>
            </form>
        </div>
    );
};

export default OTPVerification;
