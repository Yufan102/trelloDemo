import React, {useState, useEffect} from 'react';
import {Grid, TextField, makeStyles, FormControl, FormLabel, Select} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faTimes, faCheck, faBorderAll } from '@fortawesome/free-solid-svg-icons'
import styles from './RegisterForm.module.css'

const fetchData = async (url) => {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.log('error', error))
}

const useStyle = makeStyles(theme =>({
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

function RegisterForm(props){
    const [fisrtNameValue, setFirstName] = useState('') 
    const [lastNameValue, setLastName] = useState('') 
    const [emailValue, setEmail] = useState('') 
    const [passwordValue, setPassword] = useState('') 
    const [answerValue, setAnswer] = useState('') 
    const [question_id, setQuestionID] = useState('')
    const [show, setShow] = useState(false);

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
    }

    const classes = useStyle();
    const [questions, setQuestions] = useState([]); //--> keep data in component state

    const showHide = () => {
        setShow(!show);
    };

    const valid = (item, v_icon, inv_icon) => {
        let text = document.querySelector(`#${item}`);
        text.style.opacity = 1;

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = 1;

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = 0;
    };

    const invalid = (item, v_icon, inv_icon) => {
        let text = document.querySelector(`#${item}`);
        text.style.opacity = .5;

        let valid_icon = document.querySelector(`#${item} .${v_icon}`);
        valid_icon.style.opacity = 0;

        let invalid_icon = document.querySelector(`#${item} .${inv_icon}`);
        invalid_icon.style.opacity = 1;
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)

        console.log(passwordValue.test(/A-Z/))
        if ( passwordValue.test(/A-Z/) == null) {
            valid("capital", "fa-check", "fa-times");
        } else {
            invalid("capital", "fa-check", "fa-times")
        }
    }

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
                    <div className={styles.validate}>
                        <TextField
                            type={show ? "text" : "password"}
                            variant="outlined"
                            label="Password"
                            name="password"
                            value={passwordValue}
                            onChange={(e) => setPassword(e.target.value)} 
                            //onChange={handlePasswordChange}
                            required 
                            minLength = '8'
                        /> 
                        
                        {show ? (
                            <FontAwesomeIcon 
                            icon={faEye} 
                            className={styles.show_hide} 
                            onClick={showHide} 
                            />
                        ) : (
                            <FontAwesomeIcon icon={faEyeSlash} 
                            className={styles.show_hide} 
                            onClick={showHide} 
                            />
                        )}

                        <p className={styles.para} id="capital">
                                <FontAwesomeIcon className="fa-times icon" icon={faTimes} />
                                <FontAwesomeIcon className="fa-check icon" icon={faCheck} />
                                <span>Capital Letters</span>
                        </p>
                        <p className={styles.para} id="char">
                                <FontAwesomeIcon className={styles.faTimes} icon={faTimes} />
                                <FontAwesomeIcon className={styles.faCheck} icon={faCheck} />
                                <span>Special Characters</span>
                        </p>
                        <p className={styles.para} id="num">
                                <FontAwesomeIcon className={styles.faTimes} icon={faTimes} />
                                <FontAwesomeIcon className={styles.faCheck} icon={faCheck} />
                                <span>Use Numbers</span>
                        </p>
                        <p className={styles.para} id="more8">
                                <FontAwesomeIcon className={styles.faTimes} icon={faTimes} />
                                <FontAwesomeIcon className={styles.faCheck} icon={faCheck} />
                                <span>8+ Characters</span>
                        </p>

                    </div>
                </Grid>
           </Grid>
            <button>Submit</button>
        </form>
    );

}

export default RegisterForm;