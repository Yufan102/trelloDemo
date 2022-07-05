import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import ViewBoards from '../components/ViewBoards';



function WorkspacePage(){
    const [workspaceData, setWorkspaceData] = useState([]);

    const url = process.env.REACT_APP_URL;
    

    function getAllWorkspaces() {
        fetch('http://localhost:8080/api/workspace/getAll',{
            headers:{
                'Authorization': 'Bearer 4a02e308-cb90-49c0-9fc7-5793094ef9ef'
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
    },[]);


    return (
        <>
            <Link to='/createworkspace'>Create a new workspace</Link>
            <h1>Your workspacessssssss: </h1>
            <section>
                <ViewBoards workspaces={workspaceData} />
            </section>
            
            <section>
                test
            </section>
            
   
        </>
    );
    // return (
    //     <>  
        
            
    //         <Link to='/createworkspace'>Create a new workspace</Link>
    //         <h1>Your workspaces: </h1>
    //     </>
    // );
}

export default WorkspacePage;