import React, { useState } from 'react';
import { TextField, Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';

function ViewCards(props) {

    const [searchTerm, setSearchTerm] = useState('');

    return (
        <section style={{ marginTop: '32px' }}>

            <Container>

                <Typography variant='h2' component='h2'>Cards</Typography>

                <TextField type="text" placeholder="Search" onChange={e => (setSearchTerm(e.target.value))} />

                <Grid container spacing={2}>

                    {props.cards.filter((value) => {
                        if (searchTerm == "") {
                            return value;
                        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        } else if (value.deadline.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                    })

                        .map(card => (
                            <Grid item xs='12' sm='12' md='4' lg='3' key={card.id}>
                                <Card elevation='6'>
                                    <CardContent>
                                        <Typography component='h4' variant='h4'>
                                            {card.name}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {card.deadline}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
                
            </Container>
        </section>
    );
};

export default ViewCards;
