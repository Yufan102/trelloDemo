import React from 'react';
import { useHistory } from 'react-router-dom';
import CreateBoardForm from '../components/CreateBoardForm';

function CreateBoard() {
    const url = process.env.REACT_APP_URL;
    const history = useHistory();

    function createBoardHandler(board) {
        fetch(url+'/board/add?name='+board+'&workspace='+window.localStorage.getItem('wsid'), {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        }).then(() => history.replace('/boards/'+window.localStorage.getItem('wsid')));
    }

    return (
        <CreateBoardForm createBoard={createBoardHandler} />
    );
};

export default CreateBoard;