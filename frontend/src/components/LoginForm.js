import React, {useRef} from 'react';
import {Link} from "react-router-dom";


function LoginForm(props){
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        //Read the values
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {email, password};

        //Send the values to server
        props.loginUser(user);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <button>Submit</button>
            <p>
                <Link to={'/forgotPassword'}>Forgot Password?</Link>
            </p>
        </form>
    );
}

export default LoginForm;