import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Navbar from './afterLoginNavbar';


const Forgot = () => {

    const [email, setEmail] = useState('');
    const [validate, setValidate] = useState({});

    const validateforgotPassword = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const forgotPassword = (e) => {
        e.preventDefault();

        const validate = validateforgotPassword();

        if (validate) {
            alert('Reset password link is sent to '+email);
            setValidate({});
            setEmail('');
        }
    }

    return (
        <>
        <Navbar/>
        <div className="row g-0 auth-wrapper h-100">
            {/* <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
                <div className="auth-background-holder"></div>
                <div className="auth-background-mask"></div>
            </div> */}
            <br></br>
            <div className="col-lg-12 text-center">
                <div className="d-flex flex-column">
                    <div className="auth-body mx-auto">
                        <h1>Forgot Password</h1>
                        <br></br>
            
                        <div className="auth-form-container text-start">
                            <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
                                <div className="email mb-3">
                                    <input type="email"
                                        className={`form-control form-control-lg ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                        id="email"
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />

                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                        {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                    </div>
                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-dark  btn-lg w-100 theme-btn mx-auto">Forgot Password</button>
                                </div>
                            </form>

                            <hr />
                            
                            <div className="auth-option text-center pt-2">
                                <Link className="text-link" to="/login" ><h5>Back to Login</h5></Link></div>
                        </div>
                    </div>
                </div>
            </div>
            

        </div>
        <br></br>
            <br></br>
            <br></br>
            <br></br>

        </>
    );
}

export default Forgot;