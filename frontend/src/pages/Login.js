import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();

    function loginUserHandler(user) {
        fetch('')
        .then(() => {
            //perform any other operations you want here first then redirect to homepage
            //stuff like checking if it's a valid email or if the password matches the password criteria etc
            history.replace('/home')
        }); //same URL as registeration, URL for database 
    }

    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm loginUser={loginUserHandler} />
        </div>
    );
}

export default LoginPage;