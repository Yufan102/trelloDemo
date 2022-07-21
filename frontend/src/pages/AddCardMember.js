import { useHistory, useParams } from "react-router-dom";
import AddMemberForm from "../components/AddMemberForm";

function AddCardMember() {
    console.log(useParams().wsid)
    window.localStorage.setItem('wsid', useParams().wsid)
    const url = process.env.REACT_APP_URL;
    const history = useHistory();

    function findId(email) {
        fetch(url+'/user/'+email, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        }) .then(async (res) => {
            
            const data = await res.json();
            window.localStorage.setItem('addedUserId', data.id)
            console.log(window.localStorage.getItem('addedUserId'))
            fetch(url+'/workspace/addUserToWorkspace?user='+ data.id +'&workspace='+ window.localStorage.getItem('wsid'), {
                method: 'POST',
                headers: {
                    'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
                }
            })
           
        })
        .then(() => history.replace('/workspace/'+window.localStorage.getItem('uuid')));
    }

    return (
        <AddMemberForm addMember={findId} />
    );
}

export default AddCardMember;