import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// Citation: https://stackoverflow.com/questions/59571253/how-to-restrict-access-to-routes-in-react-router-dom-based-on-session
const ProtectedRoute = ({...props}) => {
    let isEnabled = false
    if(sessionStorage.getItem('loggedIn') != null) {
        isEnabled = true
    }


    return (isEnabled) ? <Route {...props} /> : <Redirect to="/login"/>;
};

export default ProtectedRoute;