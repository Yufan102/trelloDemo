import RegisterForm from "../components/RegisterForm";
import { useHistory } from "react-router-dom";

function RegisterPage() {
const history = useHistory();

    function registerUserHandler(user) {
        fetch('', {
            method: 'POST',
            body: JSON.stringify(user), //convert javascript object to JSON object
            headers: {'Content-Type': 'application/json'}
        }).then(() => history.replace('/login'))
    }
    return (
        <div>
            <h1>Registeration Page</h1>
            <RegisterForm registerUser={registerUserHandler} />
        </div>
        
    );
}

export default RegisterPage;