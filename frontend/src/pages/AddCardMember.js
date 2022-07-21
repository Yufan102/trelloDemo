import { useHistory, useParams } from "react-router-dom";
import AddMemberForm from "../components/AddCardMemberForm";

function AddCardMember() {
    window.localStorage.setItem('tsid', useParams().tsid);
    window.localStorage.setItem('wsid', useParams().wsid);
    window.localStorage.setItem('bdid', useParams().bdid);
    const url = process.env.REACT_APP_URL;
    const history = useHistory();

    function findId(email) {
        console.log(email);
        console.log(window.localStorage.getItem('tsid'));
        fetch(url+'/ticket/assign/email/'+ window.localStorage.getItem('tsid') + '/' + email, {
           method: 'POST',
            headers: {
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        }).then(() => history.replace('/cards/' + window.localStorage.getItem('bdid') +'/' + window.localStorage.getItem('wsid')));
    }

    return (
        <AddMemberForm addMember={findId} />
    );
}

export default AddCardMember;
