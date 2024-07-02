import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMediaQuery } from '@react-hook/media-query';
import './Signup.css'; // Import your custom CSS for further styling

const Signup = () => {
    const navigate = useNavigate();
    const [buttonText, setButtonText] = useState('Request OTP');
    const [emailField, setEmailField] = useState(true);
    const [otpField, setOtpField] = useState(false);
    const [passField, setPassField] = useState(false);
    const [userEmail, setUserEmail] = useState('');
    const [generatedOTP, setGeneratedOTP] = useState('');

    const phoneNoInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const otpInputRef = useRef(null);
    const isSmallScreen = useMediaQuery('(max-width: 768px)');

    const generateRandomOTP = () => {
        const otp = Math.floor(1000 + Math.random() * 9000);
        setGeneratedOTP(otp.toString());
        return otp;
    };

    const inputField = () => {
        if (emailField) {
            const userEmailValue =
                userEmail || (phoneNoInputRef.current && phoneNoInputRef.current.value);

            if (userEmailValue?.length === 10) {
                setEmailField(false);
                setOtpField(true);
                setButtonText('Validate OTP');
                generateRandomOTP();
            } else {
                toast.error('Invalid Phone Number');
            }
        } else if (otpField) {
            const enteredOTP = otpInputRef.current?.value;

            if (!enteredOTP || enteredOTP !== generatedOTP) {
                toast.error('Please enter a valid OTP');
                return;
            }
            setOtpField(false);
            setPassField(true);
            setButtonText('Sign Up');
        } else if (passField) {
            const userPassword = passwordInputRef.current?.value;
            if (!userPassword) {
                toast.error('Please set your password');
                return;
            }

            // Password strength check (example)
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
            if (!passwordRegex.test(userPassword)) {
                toast.error(
                    'Password must be 8+ characters with uppercase, lowercase, number, and special character'
                );
                return;
            }

            const userDetails = {
                phoneno: userEmail,
                password: userPassword,
            };

            localStorage.setItem('userDetails', JSON.stringify(userDetails));
            navigate('/home');
        }
    };

    return (
        <>
            <ToastContainer />
            <div className="signup-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className="signup-form">
                                <h2 className="form-title">Sign up</h2>
                                <form>
                                    {emailField && (
                                        <div className="form-group">
                                            <label htmlFor="phoneInput">Phone Number</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="phoneInput"
                                                placeholder="Enter your phone number"
                                                autoComplete="off"
                                                ref={phoneNoInputRef}
                                                value={userEmail}
                                                onChange={(e) => setUserEmail(e.target.value)}
                                            />
                                        </div>
                                    )}

                                    {otpField && (
                                        <div className="form-group">
                                            <label htmlFor="otpInput">Enter OTP</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="otpInput"
                                                placeholder="Enter OTP"
                                                autoComplete="off"
                                                ref={otpInputRef}
                                            />
                                            <div className="otp-info">
                                                <strong>OTP:</strong> {generatedOTP}
                                            </div>
                                        </div>
                                    )}

                                    {passField && (
                                        <div className="form-group">
                                            <label htmlFor="passwordInput">Set Password</label>
                                            <input
                                                type="password"
                                                className="form-control"
                                                id="passwordInput"
                                                placeholder="Enter your password"
                                                autoComplete="off"
                                                ref={passwordInputRef}
                                            />
                                        </div>
                                    )}

                                    {emailField && (
                                        <div className="form-check mb-3">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                value=""
                                                id="termsCheckbox"
                                                disabled
                                                checked
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="termsCheckbox"
                                            >
                                                By continuing, you agree to Flipkart's Terms of Use and
                                                Privacy Policy.
                                            </label>
                                        </div>
                                    )}

                                    <button
                                        className="btn btn-primary btn-block"
                                        type="button"
                                        onClick={inputField}
                                    >
                                        {buttonText}
                                    </button>

                                    {emailField && (
                                        <p className="signup-login-link">
                                            Already have an account?{' '}
                                            <span className="login-link">Log in</span>
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            {/*<div className="signup-banner">
                                <img
                                    src="https://www.bingocycles.com/images/login_img.png"
                                    alt="Signup Banner"
                                    className="img-fluid"
                                />
                                <p className="banner-text">
                                    Get access to your Orders, Wishlist and Recommendations
                                </p>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
