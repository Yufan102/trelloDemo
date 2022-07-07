import { useHistory, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


function DeleteBoard() {
    window.localStorage.setItem('bdid',useParams().bdid)
    const url = process.env.REACT_APP_URL;
    const history = useHistory();
    
    function deleteBoard(){
        fetch(url+'/board/delete?id='+window.localStorage.getItem('bdid'), {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        }).then(() => history.replace('/boards/'+ window.localStorage.getItem('wsid'))).then(() => window.location.reload())
    }


    return(
        <>
            <Link to={'/boards/'+ window.localStorage.getItem('wsid')}><button onClick={deleteBoard}>
                confirm
            </button></Link>
            <Link to={'/boards/'+ window.localStorage.getItem('wsid')}>
                goback
            </Link>
        </>
    );
}

export default DeleteBoard;