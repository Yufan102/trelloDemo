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
        }).then(() => history.replace('/workspace/'+ window.localStorage.getItem('uuid')))
    }


    return(
        <>
            <Link to={'/workspace/'+ window.localStorage.getItem('uuid')}><button onClick={deleteWorkspace}>
                confirm
            </button></Link>
            <Link to={'/workspace/'+ window.localStorage.getItem('uuid')}>
                goback
            </Link>
        </>
    );
}

export default DeleteWorkspace;