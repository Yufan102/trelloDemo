import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ViewWorkspaces from '../components/ViewWorkspaces';



function WorkspacePage(){
    const [workspaceData, setWorkspaceData] = useState([]);

    const url = process.env.REACT_APP_URL;
    window.localStorage.setItem('uuid', useParams().uuid);

    function getAllWorkspaces() {
        fetch(url+'/workspace/getAll',{
            headers:{
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }

        })
        .then(response => response.json(),
        )
        .then(workspaces => {
            setWorkspaceData(workspaces);
        });
    };

    useEffect(function () {
        getAllWorkspaces();
    }, []);


    return (
        <>
            <Link to='/createworkspace'>Create a new workspace</Link>
            <h1>Your workspaces: </h1>
            <section>
                <ViewWorkspaces workspaces={workspaceData} />
            </section>
        </>
    );
}

export default WorkspacePage;