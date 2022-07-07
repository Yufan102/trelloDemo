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
    const [fisrtNameValue, setFirstName] = useState('') 
    const [lastNameValue, setLastName] = useState('') 
    const [emailValue, setEmail] = useState('') 
    const [passwordValue, setPassword] = useState('') 
    const [answerValue, setAnswer] = useState('') 
    const [question_id, setQuestionID] = useState('')

    function submitHandler(event){
        event.preventDefault();
        //Read the values
        
        const first_name = fisrtNameValue;
        const last_name = lastNameValue;
        const email = emailValue;
        const password = passwordValue;
        const answer = answerValue;
        const user = {first_name, last_name, email, password, answer, question_id};
        
        //Send the values to server
        props.registerUser(user);
        console.log(user);
    }

    const classes = useStyle();
    const [questions, setQuestions] = useState([]); //--> keep data in component state

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
                        value={fisrtNameValue}
                        onChange={(e) => setFirstName(e.target.value)} 
                    />  
                    <TextField
                        variant="outlined"
                        label="Last Name"
                        name="last_name"
                        value={lastNameValue}
                        onChange={(e) => setLastName(e.target.value)} 
                    />   
                    <TextField
                        variant="outlined"
                        label="Email"
                        name="email"
                        value={emailValue}
                        onChange={(e) => setEmail(e.target.value)} 
                    />               
                </Grid>
                <Grid item xs={6}>
                    <FormControl>
                        <FormLabel>Security Question</FormLabel>
                        <Select defaultValue={''} onChange={(e) => setQuestionID(e.target.value)}>
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
                    /> 
                    <TextField
                        variant="outlined"
                        label="Password"
                        name="password"
                        value={passwordValue}
                        onChange={(e) => setPassword(e.target.value)} 
                    /> 
                </Grid>
           </Grid>
            <button>Submit</button>
        </form>
    );

}

export default RegisterForm;