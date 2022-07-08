import React, { useState, useEffect } from 'react';
import { Grid, TextField, makeStyles, FormControl, FormLabel, Select } from '@material-ui/core';
import validator from 'validator';

const fetchData = async (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log('error', error))
}

const useStyle = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root': {
            width: '90%',
            margin: theme.spacing(1),
            backgroundColor: 'FloralWhite',
            borderRadius: 6,
            boxShadow: ' 1px 2px 9px DarkSlateBlue',
        },
    }
}))

function RegisterForm(props) {
    const [fisrtNameValue, setFirstName] = useState('')
    const [lastNameValue, setLastName] = useState('')
    const [emailValue, setEmail] = useState('')
    const [passwordValue, setPassword] = useState('')
    const [answerValue, setAnswer] = useState('')
    const [question_id, setQuestionID] = useState('')
    const [show, setShow] = useState(false);
    const [errorMessage, setErrorMessage] = useState('')

    const validate = (passwordValue) => {

        if (validator.isStrongPassword(passwordValue, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErrorMessage('Strong password')
            setPassword(passwordValue)
        } else {
            setErrorMessage('Password is not strong enough, please see requirements.')
        }
    }

    function submitHandler(event) {
        event.preventDefault();
        //Read the values

        const first_name = fisrtNameValue;
        const last_name = lastNameValue;
        const email = emailValue;
        const password = passwordValue;
        const answer = answerValue;
        const user = { first_name, last_name, email, password, answer, question_id };

        //Send the values to server
        if (errorMessage == "Strong password") {
            props.registerUser(user);
        } else {
            alert("Weak password. Please re-enter.")
        }

    }

    const classes = useStyle();
    const [questions, setQuestions] = useState([]); //--> keep data in component state

    useEffect(() => {
        fetchData('http://localhost:8080/api/question/getAll').then(response => setQuestions(response))
    }, []);

    return (
        <form className={classes.root} onSubmit={submitHandler} autoComplete="off">
            <Grid container>
                <Grid item xs={6}>
                    <TextField
                        variant="outlined"
                        label="First Name"
                        name="first_name"
                        value={fisrtNameValue}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        name="last_name"
                        value={lastNameValue}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={emailValue}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Security Question</FormLabel>
                        <Select required defaultValue={''} onChange={(e) => setQuestionID(e.target.value)}>
                            <option value='' disabled>Choose a security question</option>
                            {questions.map((question) => (
                                <option key={question.id} value={question.id}>{question.question}</option>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        variant="outlined"
                        label="Security Answer"
                        name="answer"
                        value={answerValue}
                        onChange={(e) => setAnswer(e.target.value)}
                        required
                    />
                    <pre>
                        <input type={show ? "text" : "password"} required placeholder='Password'
                            onChange={(e) => validate(e.target.value)}></input> <br />
                        {errorMessage === '' ? null :
                            <span style={{
                                fontWeight: 'bold',
                                color: 'FireBrick',
                                fontFamily: 'sans-serif',
                                fontSize: 'medium'
                            }}>{errorMessage}</span>}
                        <h4>Password requirements:</h4>
                        <p>
                            <ul>
                                <li>Minimum length of 8 characters</li>
                                <li>At least 1 uppercase character</li>
                                <li>At least 1 lowercase character</li>
                                <li>At least 1 number</li>
                                <li>At least 1 special character</li>
                            </ul>
                        </p>
                    </pre>
                </Grid>
            </Grid>
            <button>Submit</button>
        </form>
    );

}

export default RegisterForm;