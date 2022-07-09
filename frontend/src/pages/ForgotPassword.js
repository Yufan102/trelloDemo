import ForgotForm from "../components/forgotForm";
import React, { useState } from 'react';
import { Grid, TextField } from '@material-ui/core';
import validator from 'validator';

export function EmailVerification({ question, email }) {
    const [answerValue, setAnswer] = useState('');
    const [newpasswordValue, setNewPassword] = useState('');
    const url = process.env.REACT_APP_URL;
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    /*validate password citation (Line 15 to 26, Line 75 to 82): URL: https://www.geeksforgeeks.org/how-to-validate-password-is-strong-or-not-in-reactjs/,
    Date accessed: July 8th, 2022, Content used: how to validate a password */
    const validate = (newpasswordValue) => {

        if (validator.isStrongPassword(newpasswordValue, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Strong password')
            setNewPassword(newpasswordValue)
        } else {
            setErrorMessage('Password is not strong enough, please see requirements.')
        }
    }


    function submitHandlerReset(event) {
        event.preventDefault();

        if (errorMessage == "Strong password") {
            const answer = answerValue;
            const newPassword = newpasswordValue;
            const userInfo = { email, ans: answer, new_password: newPassword };
            console.log(userInfo)

            fetch(url + '/user/forget/reset', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(userInfo)
            }).then(async (res) => {
                const newPass = await res.json();
                console.log(newPass);

                if (newPass.new_password == "") {
                    alert("Answer is not correct. Try again.")
                } else if (newPass.new_password == "same") {
                    alert("New password cannot be the same as the old password. Try again.")
                } else {
                    alert("Password changed successfully.")
                }
            }).catch(err => {
                console.log('err', err);
            });
        } else {
            alert("Weak password. Please re-enter.")
        }

    }

    return (
        <form onSubmit={submitHandlerReset} class="formBody">
            <p class="smaller-headers">{question}</p>
            <div class="input-group">
                <label for="answer-input">Answer:</label>
                <input class="input-box" type="text" required placeholder="Answer" onChange={(e) => setAnswer(e.target.value)} />
            </div>
            <div class="input-group">
                <label for="password-input">New Password:</label>
                <input class="input-box" type={show ? "text" : "password"} required placeholder='New Password'
                    onChange={(e) => validate(e.target.value)}></input> <br />
                {errorMessage === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'FireBrick',
                        fontFamily: 'sans-serif',
                        fontSize: 'medium'
                    }}>{errorMessage}</span>}
                <p>
                    <h4>Password requirements:</h4>
                    <ul>
                        <li>Minimum length of 8 characters</li>
                        <li>At least 1 uppercase character</li>
                        <li>At least 1 lowercase character</li>
                        <li>At least 1 number</li>
                        <li>At least 1 special character</li>
                    </ul>
                </p>
            </div>
            <button class="button-input">Submit</button>
        </form>
    )
}


function ForgotPassword() {
    const url = process.env.REACT_APP_URL;
    const [question, setQuestion] = useState('');
    const [showEmailPlaceholder, setShowEmailPlaceholder] = useState(false);
    const [email, setEmail] = useState('');

    function resetPasswordHandler(email) {
        console.log(email)
        setEmail(email);
        fetch(url + '/user/forget?email=' + email, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',

        })
            .then((response) => response.json())
            .then(res => {
                if (res.question == "") {
                    setShowEmailPlaceholder(false);
                    alert("Email id doesnt exist");
                } else {
                    setQuestion(res.question);
                    setShowEmailPlaceholder(true);
                }
            })
            .catch(err => {
                console.log('err', err);
            });
    }

    console.log(question);

    return (
        <div>
            <h1 class="headers">Enter Email to Reset Password</h1>
            <ForgotForm resetPassword={resetPasswordHandler} />
            {showEmailPlaceholder ? <EmailVerification question={question} email={email}></EmailVerification> : <></>}
        </div>
    );

}

export default ForgotPassword;