import {Link} from "react-router-dom";
import styles from './Navigation.module.css'
import { ButtonGroup, TextField, Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';

function Navigation(){
    return(
        <nav className={styles.navbar}>     
            <Button href="/login">Login</Button>

            <Button href="/register">Register</Button>
        </nav>

    );
}

export default Navigation;