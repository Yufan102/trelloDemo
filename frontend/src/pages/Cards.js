
import ViewCards from '../components/ViewCards';
import React, { useEffect, useState } from 'react';
import { TextField, Grid, Card, Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

function Cards() {

    const [cardsData, setCardsData] = useState([]);

    const url = process.env.REACT_APP_URL;
    window.localStorage.setItem('wsid', useParams().wsid);

    function getAllCards() {
        fetch(url + '/lists/get/todo/' + window.localStorage.getItem('wsid'),{
            headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('uuid')
            }
        })
            .then(response => response.json)
            .then(cards => {
                setCardsData(cards);
            });

    };

    useEffect(function() {
        getAllCards();
    }, []);

    return (
        <>

        <Link to={'/createcard/' + window.localStorage.getItem('wsid')}>Create a new card</Link><br></br>
        <Link to={'/boards/' + window.localStorage.getItem('wsid')}>Back to boards</Link>

            <section>
                <ViewCards cards={cardsData}/>
            </section>
        </>
    );
};

export default Cards;
