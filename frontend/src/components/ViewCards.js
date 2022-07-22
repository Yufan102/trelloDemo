import React, { useState, useReducer } from 'react';
import { ButtonGroup, TextField, Grid, Card, CardContent, Typography, Button, Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';



function ViewCards(props) {

    const [searchTerm, setSearchTerm] = useState('');
    const [statusData, setStatusData] = useState('');

    const url = process.env.REACT_APP_URL;

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

    function setStatus(id, status) {
        fetch(url + '/ticket/addTo/' + status + '/' + window.localStorage.getItem('wsid') + '/' + id, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('uuid')
            }
        }).then(res => res.json()).then((responseJson) => {
            window.location.reload(false);
          })
    }

    return (

        <section style={{ marginTop: '32px' }}>
        <Typography variant='h2' component='h2'>Cards</Typography>
        <TextField type="text" placeholder="Search" onChange={e => (setSearchTerm(e.target.value))} />
            <Grid container>
                <Grid item xs='4'>
                <Typography variant='h3' component='h3'>Todo</Typography>
                    {props.todoCards.filter((value) => {
                        if (searchTerm == "") {
                            return value;
                        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        } else if (dueStatus(value.deadline).toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                    })
                        .map(card => (
                            <Grid item xs='4' sm='12' md='4' lg='3' key={card.id}>
                                <Card elevation='6'>
                                    <CardContent>
                                        <Typography component='h4' variant='h4'>
                                            {card.name}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {card.assign_user_id != null &&
                                                'Assignee: ' + card.assign_user_id.first_name + ' ' + card.assign_user_id.last_name
                                            }
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {formatDate(card.deadline)}
                                        </Typography>
                                        <Typography>
                                            {dueStatus(card.deadline)}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            Todo
                                        </Typography>
                                        <Typography>
                                            {statusData != 'Doing' &&
                                                <Button id="doing" onClick={e => setStatus(card.id, e.target.id)}>
                                                 Doing
                                                </Button>
                                            }
                                            {statusData != 'Done' &&
                                                <Button id="done" onClick={e => setStatus(card.id, e.target.id)}>
                                                Done
                                                </Button>
                                            }
                                            <Link to={'/addcardmember/'+ window.localStorage.getItem('bdid') + '/' + window.localStorage.getItem('wsid') + '/' + card.id}><Typography component='button' variant='button'>
                                                Assign member by email
                                            </Typography></Link>

                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                <Grid item xs='4'>
                <Typography variant='h3' component='h3'>Doing</Typography>
                    {props.doingCards.filter((value) => {
                        if (searchTerm == "") {
                            return value;
                        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        } else if (dueStatus(value.deadline).toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                    })
                        .map(card => (
                            <Grid item xs='10' sm='12' md='4' lg='3' key={card.id}>
                                <Card elevation='6'>
                                    <CardContent>
                                        <Typography component='h4' variant='h4'>
                                            {card.name}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {card.assign_user_id != null &&
                                                'Assignee: ' + card.assign_user_id.first_name + ' ' + card.assign_user_id.last_name
                                            }
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {formatDate(card.deadline)}
                                        </Typography>
                                        <Typography>
                                            {dueStatus(card.deadline)}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            Doing
                                        </Typography>
                                        <Typography>
                                            {statusData != 'ToDo' && 
                                                <Button id="todo" onClick={e => setStatus(card.id, e.target.id)}>
                                                ToDo
                                                </Button>
                                            }
                                            {statusData != 'Done' &&
                                                <Button id="done" onClick={e => setStatus(card.id, e.target.id)}>
                                                Done
                                                </Button>
                                            }
                                            <Link to={'/addcardmember/'+ window.localStorage.getItem('bdid') + '/' + window.localStorage.getItem('wsid') + '/' + card.id}><Typography component='button' variant='button'>
                                                Assign member by email
                                            </Typography></Link>

                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>

                <Grid item xs='4'>
                <Typography variant='h3' component='h3'>Done</Typography>
                    {props.doneCards.filter((value) => {
                        if (searchTerm == "") {
                            return value;
                        } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        } else if (dueStatus(value.deadline).toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                    })
                        .map(card => (
                            <Grid item xs='10' sm='12' md='4' lg='3' key={card.id}>
                                <Card elevation='6'>
                                    <CardContent>
                                        <Typography component='h4' variant='h4'>
                                            {card.name}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {card.assign_user_id != null &&
                                                'Assignee: ' + card.assign_user_id.first_name + ' ' + card.assign_user_id.last_name
                                            }
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            {formatDate(card.deadline)}
                                        </Typography>
                                        <Typography>
                                            {dueStatus(card.deadline)}
                                        </Typography>
                                        <Typography component='p' variant='p'>
                                            Done
                                        </Typography>
                                        <Typography>
                                            {statusData != 'ToDo' && 
                                                <Button id="todo" onClick={e => setStatus(card.id, e.target.id)}>
                                                ToDo
                                                </Button>
                                            }
                                            {statusData != 'Doing' &&
                                                <Button id="doing" onClick={e => setStatus(card.id, e.target.id)}>
                                                 Doing
                                                </Button>
                                            }
                                            <Link to={'/addcardmember/'+ window.localStorage.getItem('bdid') + '/' + window.localStorage.getItem('wsid') + '/' + card.id}><Typography component='button' variant='button'>
                                                Assign member by email
                                            </Typography></Link>

                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
                
            </Grid>
        </section>
    );
};

export default ViewCards;