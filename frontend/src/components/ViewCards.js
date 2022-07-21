import React, { useState } from 'react';
import { TextField, Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';

function ViewCards(props) {

    const [searchTerm, setSearchTerm] = useState('');

    function formatDate(value) {
        var d = new Date(value),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        var format = [year, month, day].join('-');

        return format;
    }

    function dueStatus(value) {
        var d = new Date(value),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        var format = [year, month, day].join('-');

        var today = new Date(),
        todayMonth = '' + (today.getMonth() + 1),
        todayDay = '' + today.getDate(),
        todayYear = today.getFullYear();

        if (todayMonth.length < 2)
            todayMonth = '0' + todayMonth;
        if (todayDay.length < 2)
            todayDay = '0' + todayDay;

        var todayFormat = [todayYear, todayMonth, todayDay].join('-');

        var yeardiff = year - todayYear;
        var monthdiff = month - todayMonth;
        var daydiff = day - todayDay;

        var status;
        var ontime = "Due today";
        var week = "Due this week";
        var over = "Overdue";
        var extra = "Over a week";

        if (yeardiff === 0 & monthdiff === 0 & daydiff === 0) {
            status = ontime;
        } else if (yeardiff === 0 & monthdiff === 0 & daydiff <= 7 & daydiff >= 1) {
            status = week;
        } else if (yeardiff < 0 || (yeardiff === 0 & monthdiff < 0) || (yeardiff === 0 & monthdiff === 0 &daydiff < 0)) {
            status = over;
        } else {
            status = extra;
        }

        return status;
    }

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
                        } else if (dueStatus(value.deadline).toLowerCase().includes(searchTerm.toLowerCase())) {
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
                                            {formatDate(card.deadline)}
                                        </Typography>
                                        <Typography>
                                            {dueStatus(card.deadline)}
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
