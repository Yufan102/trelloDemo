import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";

function RegisterPage() {
const history = useHistory();

const url = process.env.REACT_APP_URL;

    function registerUserHandler(user) {
        fetch(url + '/user/signup', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user), //convert javascript object to JSON object
            headers: {'Content-Type': 'application/json'}
        }).then(() => history.replace('/login'))
    }
    return (
        <div>
            <h1>Sign Up Here!</h1>
            <RegisterForm registerUser={registerUserHandler} />
        </div>
        
    );
}

export default RegisterPage;