import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ViewBoards from '../components/ViewBoards';


function Workspace() {
    const uuid = useParams().uuid
    console.log(uuid)
    const [workspaceData, setWorkspaceData] = useState([]);

    const url = process.env.REACT_APP_URL;

    function getAllWorkspaces() {
        fetch(url+'/workspace/getAll',{
            headers:{
                Authorization:'Bearer '+uuid
            }
        })
            .then(response => response.json())
            .then(workspaces => {
                setWorkspaceData(workspaces);
            });
    };

    useEffect(function () {
        getAllWorkspaces();
    },[]);


    return (
        <>

            <h1>Your workspaces: </h1>
            <section>
                <ViewBoards workspaces={workspaceData} />
            </section>
   
        </>
    );
}

export default Workspace;