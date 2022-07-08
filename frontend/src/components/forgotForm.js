import React, {useRef, useState, useEffect} from 'react';

function ForgotForm(props){
    const emailRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const email = emailRef.current.value;

        props.resetPassword(email);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <button>Submit</button>
        </form>
    );
}

export default ForgotForm;