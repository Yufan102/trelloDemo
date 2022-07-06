import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ViewBoards from '../components/ViewBoards';

function Boards() {
    const [boardsData, setBoardsData] = useState([]);
    
    const url = process.env.REACT_APP_URL;
    window.localStorage.setItem('wsid',useParams().wsid)

    function getAllBoards() {
        fetch(url+'/board/getFromWorkspace/'+window.localStorage.getItem('wsid'),{
            headers:{
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        })
            .then(response => response.json())
            .then(boards => {
                setBoardsData(boards);
            });
    };

    useEffect(function () {
        getAllBoards();
    }, []);


    return (
        <>
            <Link to='/createboard'>Create a new board</Link>
            <section>
                <ViewBoards boards={boardsData} />
            </section>
        </>
        
    );
};

export default Boards;