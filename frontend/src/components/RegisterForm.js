import React, {useState, useEffect, useRef} from 'react';
import {Grid, TextField, makeStyles, FormControl, FormLabel, Select} from '@material-ui/core';

const fetchData = async (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log('error', error))
}

const useStyle = makeStyles(theme =>({
    root: {
        '& .MuiFormControl-root': {
            width: '80%',
            margin: theme.spacing(1)
        },        
    }
}))

function RegisterForm(props){
    const fisrtNameRef = useRef();
    const lastNameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const answerRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        //Read the values
        const first_name = fisrtNameRef.current.value;
        const last_name = lastNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const answer = answerRef.current.value;
        const user = {first_name, last_name, email, password, answer, question_id};

        //Send the values to server
        props.registerUser(user);
        console.log(user);
    }

    const classes = useStyle();
    const [questions, setQuestions] = useState([]); //--> keep data in component state
    const [question_id, setQuestionID] = useState();

    useEffect(()=> {
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
                        ref={fisrtNameRef}
                    />  
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        name="last_name"
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
                        <Select defaultValue={''} onChange={(e) => setQuestionID(e.value)}>
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
                        ref={answerRef}
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

export default RegisterForm;