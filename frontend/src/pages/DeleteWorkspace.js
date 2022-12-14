import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function DeleteWorkspace() {
    window.localStorage.setItem('wsid',useParams().wsid)
    const url = process.env.REACT_APP_URL;
    const history = useHistory();
    
    function deleteWorkspace(){
        fetch(url+'/workspace/delete?workspace='+window.localStorage.getItem('wsid'), {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        }).then(() => history.replace('/workspace/'+ window.localStorage.getItem('uuid'))).then(() => window.location.reload());
    }

    return(
        <>
            <Link to={'/workspace/'+ window.localStorage.getItem('uuid')}>
                <button onClick={deleteWorkspace}>
                Confirm
            </button></Link>
            <Link to={'/workspace/'+ window.localStorage.getItem('uuid')}>
            <button>
                Cancel
            </button></Link>
        </>
    );

}

export default DeleteWorkspace;