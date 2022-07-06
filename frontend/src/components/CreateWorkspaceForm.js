import { Button, TextField, Typography } from '@mui/material';
import React, { useRef } from 'react';

function CreateWorkspaceForm(props) {
    const nameRef = useRef();

    function createWorkspace(e) {
        e.preventDefault();
        const workspaceName = nameRef.current.value;
        props.createWorkspace(workspaceName);
    };

    return (
        <section style={{ marginTop: '32px' }}>
            <Typography variant='h2' component='h2'>Create New Workspace</Typography>
            <form onSubmit={createWorkspace}>
                <TextField
                    id='workspaceName'
                    placeholder='Workspace Name'
                    variant='outlined'
                    required
                    fullWidth
                    margin='dense'
                    inputRef={nameRef} />

                <Button type='submit' variant='contained' color='primary' sx={{ marginTop: '16px' }}>
                    Create Workspace
                </Button>
            </form>
        </section>
    );
};

export default CreateWorkspaceForm;