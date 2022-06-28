import React, {useRef} from 'react';

function RegisterForm(props){
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        //Read the values
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {fullName, email, password};

        //Send the values to server
        props.registerUser(user);
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text" required placeholder="Full name" ref={fullNameRef}/>
            <input type="email" required placeholder="Email" ref={emailRef}/>
            <input type="password" required placeholder="Password" ref={passwordRef}/>
            <button>Submit</button>
        </form>
    );
}

export default RegisterForm;