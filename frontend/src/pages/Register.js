import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";
import { Paper, makeStyles } from '@material-ui/core';
import styles from './Register.module.css'


const useStyle = makeStyles(theme => ({
    pageContent: {
        width: '80%',
        margin: theme.spacing(5),
        padding: theme.spacing(3),
        backgroundColor: 'CornflowerBlue',
        borderRadius: 30,
        boxShadow: ' 1px 2px 9px Indigo'
    }
}))

function RegisterPage() {
    const history = useHistory();
    const url = process.env.REACT_APP_URL;
    const classes = useStyle();

    function registerUserHandler(user) {
        fetch(url + '/user/signup', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user), //convert javascript object to JSON object
            headers: { 'Content-Type': 'application/json' }
        })
            .then(async (res) => {
                const signUpRes = await res.json();

                if (signUpRes.UUID.length === 0) {
                    alert("An account with this email already exists.")
                } else {
                    history.replace('/login')
                }
            })
            .catch(err => {
                console.log('err', err);
            });
    }
    return (
        <div className={styles.body}>
            <h1 class="headers">Sign Up Here!</h1>
            <Paper className={classes.pageContent}>
                <RegisterForm registerUser={registerUserHandler} />
            </Paper>
        </div>
    );
}

export default RegisterPage;