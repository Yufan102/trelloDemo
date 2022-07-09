import React, { useRef } from 'react';
import { Link } from "react-router-dom";


function LoginForm(props) {
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        //Read the values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = { email, password };

        //Send the values to server
        props.loginUser(user);
    }

    return (
        <form onSubmit={submitHandler} class="formBody">
            <div class="input-group">
                <label for="email-input">Email:</label>
                <input class="input-box" type="email" required placeholder="Email" ref={emailRef} />
            </div>
            <div class="input-group">
                <label for="password-input">Password:</label>
                <input class="input-box" type="password" required placeholder="Password" ref={passwordRef} />
            </div>
            <button class="button-input">Submit</button>
            <p>
                <Link to={'/forgotPassword'} class="smaller-headers">Forgot Password?</Link>
            </p>
        </form>
    );
}

export default LoginForm;