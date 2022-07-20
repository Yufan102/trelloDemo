/*

import React, { useState, useEffect } from 'react';
import { FormLabel, FormControlLabel, Radio, RadioGroup, TextField, Container, Grid, Card, CardContent, Typography, Button, ButtonGroup } from '@mui/material';
import { useHistory } from 'react-router-dom';

export default function Create() {

    const history = useHistory();
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const [status, setStatus] = useState('ToDo');

    const [due, setDue] = useState('');
    const [dueStatus, setDueStatus] = useState('');

    const [member, setMember] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && desc) {
            fetch('http://localhost:8000/tasks', {
                method: 'POST',
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({title, desc, status, due, dueStatus, member})
            }).then(() => history.push('/'))
        }
    }
    
  return (
    <Container size="sm">
        <Typography
            variant="h6"
            component="h2"
            gutterBottom>
                Create a New Card
            </Typography>

            <form onSubmit={handleSubmit}>
                <TextField
                    onChange={(e) => setTitle(e.target.value)}
                    label="Card Title"
                    fullWidth
                    required
                />
                
                <TextField
                    onChange={(e) => setDesc(e.target.value)}
                    label="Description"
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setDue(e.target.value)}
                    type="date"
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setDueStatus(e.target.value)}
                    label="Due Status"
                    fullWidth
                    required
                />

                <TextField
                    onChange={(e) => setMember(e.target.value)}
                    label="Member"
                    fullWidth
                    required
                />
                
            <FormLabel>Task Status</FormLabel>
            <RadioGroup value={status} onChange={(e) => setStatus(e.target.value)}>
                <FormControlLabel value="ToDo" control={<Radio />} label="ToDo"/>
                <FormControlLabel value="Doing" control={<Radio />} label="Doing"/>
                <FormControlLabel value="Done" control={<Radio />} label="Done"/>
            </RadioGroup>

            <Button
                type="submit"
                variant="contained">
                    Submit
            </Button>

            </form>
    </Container>
  )
}


*/