import { FormLabel, FormControlLabel, Radio, RadioGroup, Button, TextField, Typography } from '@mui/material';
import React, { useRef, useHistory, useState } from 'react';

function CreateCardForm(props) {

    const cardNameRef = useRef();
    const cardDueRef = useRef();

    function createCard(e) {
        e.preventDefault();

        const cardName = cardNameRef.current.value;
        const cardDue = cardDueRef.current.value;
        
        props.createCard(cardName, cardDue);
    };

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Create New Card</Typography>
            <form onSubmit={createCard}>
                <TextField
                    id='cardName'
                    placeholder='Card Name'
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
                    inputRef={cardNameRef}
                    />
               
                <TextField
                    id='cardDue'
                    type="date"
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
                    inputRef={cardDueRef}
                    />
         
                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                    Create Card
                </Button>
            </form>
        </section>
    );
};

export default CreateCardForm;
