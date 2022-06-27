import React, {useRef} from 'react';

function RegisterForm(props){
    const fullNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const securityQRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        //Read the values
        const fullName = fullNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const user = {fullName, email, password};
        const securityQ = securityQRef.current.value;

        //Send the values to server
        props.registerUser(user);
    }

    return (
        <div id="signup">
            <form onSubmit={submitHandler}>
                <label id="name">Full Name</label>
                <input type="text" required placeholder="Enter full name" ref={fullNameRef}/>

                <label id="email">Email</label>
                <input type="email" required placeholder="Enter email" ref={emailRef}/>

                <label id="password">Password</label>
                <input type="password" required placeholder="Enter password" ref={passwordRef}/>

                <label id="securityQ">Security Question</label>
                <select id="security" name="questions" size="5" multiple>
                    <option value="mother">What is your mother's maiden name?</option>
                    <option value="pet">What is the name of your first pet?</option>
                    <option value="teacher">What is the name of your favorite high school teacher?</option>
                    <option value="street">What was the name of your street growing up?</option>
                    <option value="concert">What is the first concert you attended?</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default RegisterForm;