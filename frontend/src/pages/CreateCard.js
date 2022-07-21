import React, { useRef, useState, useEffect } from 'react';
import CreateCardForm from '../components/CreateCardForm';
import { FormLabel, FormControlLabel, Radio, RadioGroup, Button, TextField, Typography } from '@mui/material';
import { useHistory, Link } from 'react-router-dom';

function CreateCard() {
    const url = process.env.REACT_APP_URL;
    const history = useHistory();

    function createCardHandler(cardName, cardDue) {
        fetch(url + '/ticket/create/' + window.localStorage.getItem('wsid') + '/?name=' + cardName + '&deadline=' + cardDue, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('uuid')
            }
        }).then(() => history.replace('/cards/' + window.localStorage.getItem('bdid') +'/' + window.localStorage.getItem('wsid')));
    }

    return (
        <>
        <Link to={'/cards/' + window.localStorage.getItem('bdid') + '/' + window.localStorage.getItem('wsid')}>Cards</Link>
        <CreateCardForm createCard={createCardHandler} />
        </>
    );
};

export default CreateCard;
