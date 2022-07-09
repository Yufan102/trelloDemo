import React, { useRef, useState, useEffect } from 'react';

function ForgotForm(props) {
    const emailRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const email = emailRef.current.value;

        props.resetPassword(email);
    }

    return (
        <form onSubmit={submitHandler} class="formBody">
            <div class="input-group">
                <label for="email-input">Email:</label>
                <input class="input-box" type="email" required placeholder="Email" ref={emailRef} />
            </div>
            <button class="button-input">Submit</button>
        </form>
    );
}

export default ForgotForm;