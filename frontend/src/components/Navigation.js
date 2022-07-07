import {Link} from "react-router-dom";
import styles from './Navigation.module.css'

function Navigation(){
    return(
        <nav className={styles.navbar}>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </nav>

    );
}

export default Navigation;