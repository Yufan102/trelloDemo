import { Button, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';

function AddMemberForm(props) {
    const emailRef = useRef();

    function addMember(e) {
        e.preventDefault();
        const email = emailRef.current.value;
        props.addMember(email);
    };

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Add a member to workspace by email</Typography>
            <form onSubmit={addMember}>
                <TextField
                    id='addMember'
                    placeholder='Add Member'
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
                    inputRef={emailRef} />
                
                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                    Add Member
                </Button>
            </form>
        </section>
    );
};

export default AddMemberForm;