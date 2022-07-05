import LoginForm from "../components/LoginForm";
import { useHistory } from "react-router-dom";

function LoginPage() {
    const history = useHistory();

    const url = process.env.REACT_APP_URL;

    function loginUserHandler(user) {



        fetch(url + '/user/login', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(user)
        })
        .then(async (res) => {
            //perform any other operations you want here first then redirect to homepage
            //stuff like checking if it's a valid email or if the password matches the password criteria etc
            const data = await res.json();
            console.log('data', data.UUID);
            if (data.UUID.length === 0) {
                alert("Invalid email or password.")
            } else {
                history.replace('/workspace/'+data.UUID)
            }
           
        }).catch(err => {
            console.log('err', err);
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