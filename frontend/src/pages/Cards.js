
import React, { useEffect, useState } from 'react';
import { TextField, Grid, Card, Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ViewCards from '../components/ViewCards';

function Cards() {

    const [todoCardsData, setTodoCardsData] = useState([]);
    const [doingCardsData, setDoingCardsData] = useState([]);
    const [doneCardsData, setDoneCardsData] = useState([]);

    const url = process.env.REACT_APP_URL;
    window.localStorage.setItem('wsid', useParams().wsid);
    window.localStorage.setItem('bdid', useParams().bdid);

    function getTodoCards() {
        fetch(url + '/lists/get/todo/' + window.localStorage.getItem('wsid'),{
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('uuid')
            }
        }).then(response => response.json())
            .then(cards => {
                setTodoCardsData(cards);
            });

    };

    function getDoingCards() {
        fetch(url + '/lists/get/doing/' + window.localStorage.getItem('wsid'),{
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('uuid')
            }
        }).then(response => response.json())
            .then(cards => {
                setDoingCardsData(cards);
            });
    };

    function getDoneCards() {
        fetch(url + '/lists/get/done/' + window.localStorage.getItem('wsid'),{
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('uuid')
            }
        }).then(response => response.json())
            .then(cards => {
                setDoneCardsData(cards);
            });

    };

    useEffect(function() {
        getTodoCards();
        getDoingCards();
        getDoneCards();
    }, []);

    return (
        <>

        <Link to={'/createcard/' + window.localStorage.getItem('bdid') + '/' + window.localStorage.getItem('wsid')}>Create a new card</Link><br></br>
        <Link to={'/boards/' + window.localStorage.getItem('bdid')}>Back to boards</Link>

            <section>
                    <ViewCards todoCards={todoCardsData}
                               doingCards={doingCardsData}
                               doneCards={doneCardsData}/>
            </section>
        </>
    );
};

export default Cards;
