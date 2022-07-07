import React, {useState, useEffect, useRef} from 'react';
import {Grid, TextField, makeStyles, FormControl, FormLabel, Select} from '@material-ui/core';
import AsyncSelect from 'react-select/async';
import { alignProperty } from '@mui/material/styles/cssUtils';

const useStyle = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        },        
    }
}))

function RegisterForm(props){
    const fullNameRef = useRef();
    const fisrtNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const securityQuestionRef = useRef();
    const securityAnswerRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        //Read the values
        const fullName = fullNameRef.current.value;
        const firstName = firstName.current.value;
        const lastName = lastName.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const securityQuestion = securityQuestionRef.current.value;
        const securityAnswer = securityAnswerRef.current.value;
        const user = {fullName, email, password, securityQuestion, securityAnswer};

        //Send the values to server
        props.registerUser(user);
    }

    const classes = useStyle();

    return (
        <form className={classes.root} onSubmit={submitHandler} autoComplete="off">
           <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="First Name"
                        name="firstName"
                        ref={fisrtNameRef}
                    />  
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        name="lastName"
                        ref={lastNameRef}
                    />   
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        ref={emailRef}
                    />               
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Security Question</FormLabel>
                        <Select>
                        
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        label="Security Answer"
                        name="securityAnswer"
                        ref={securityAnswerRef}
                    /> 
                    <TextField
                        variant="outlined"
                        label="Password"
                        name="password"
                        ref={passwordRef}
                    /> 
                </Grid>
           </Grid>
            <button>Submit</button>
        </form>
    );
}

{/* <input type="text" required placeholder="Full name" ref={fullNameRef}/>
<input type="email" required placeholder="Email" ref={emailRef}/>
<input type="password" required placeholder="Password" ref={passwordRef}/>
<input type="text" required placeholder="Security Question" ref={securityQuestionRef}/>
<input type="text" required placeholder="Security Answer" ref={securityAnswerRef}/> */}

export default RegisterForm;