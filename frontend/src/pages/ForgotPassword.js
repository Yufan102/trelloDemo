import ForgotForm from "../components/forgotForm";
import React, {useState} from 'react';
import {Grid, TextField, makeStyles, FormControl, FormLabel, Select} from '@material-ui/core';

export function EmailVerification(question, email) {
    const [answerValue, setAnswer] = useState('');
    const [newpasswordValue, setNewPassword] = useState('');
    const url = process.env.REACT_APP_URL;

    if(question == ""){
        alert("No account exists with this email. Please enter a valid email.")
    } else {
        function submitHandlerReset(event) {
            event.preventDefault();
            const answer = answerValue;
            const newPassword = newpasswordValue;
            const userInfo = {email, answer, newPassword};
    
            fetch(url + '/user/forget/reset', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(userInfo)
            })
            .then(async (res) => {
                const newPass = await res.json();
                console.log(newPass);
    
                if (newPass.new_password == ""){
                    alert("Answer is not correct. Try again.")
                } else if (newPass.new_password == "same") {
                    alert("New password cannot be the same as the old password. Try again.")
                } else {
                    alert("Password changed successfully.")
                }
            })
            .catch(err => {
                console.log('err', err);
            }); 
        }

        return(
            <form onSubmit={submitHandlerReset}>
                <Grid container>
                    <Grid item xs = {6}>
                        <p>{question}</p>
                        <TextField
                            variant="outlined"
                            label="Answer"
                            name="answer"
                            value={answerValue}
                            onChange={(e) => setAnswer(e.target.value)} 
                            required
                        />  
                        <TextField
                            variant="outlined"
                            label="New Password"
                            name="new_password"
                            value={newpasswordValue}
                            onChange={(e) => setNewPassword(e.target.value)} 
                            required
                        />  
                    </Grid>
                </Grid>
                <button>Submit</button>
            </form>
        )
    }
    
                // <form onSubmit={submitHandler}>
            //     <p>{question}</p>
            //     <input type="text" required placeholder="Answer" ref={answerRef}/>
            //     <input type="text" required placeholder="New Password" ref={newPasswordRef}/>
            //     <button>Submit</button>
            // </form>

}

function ForgotPassword() {
    const url = process.env.REACT_APP_URL;
    const [question, setQuestion] = useState('');
    
    function resetPasswordHandler(email) {
        fetch(url + '/user/forget?email=' + email, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'GET',
        })
        .then((response) => response.json())
        .then((responseData => setQuestion(responseData.question)))
        .catch(err => {
            console.log('err', err);
        }); 
    }

    console.log(question);

    return(
        <div>
            <h1>Enter Email to Reset Password</h1>
            <ForgotForm resetPassword={resetPasswordHandler} />
            {EmailVerification(question)}
        </div>
    );

}

export default ForgotPassword;