import { useHistory } from "react-router-dom";
import CreateWorkspaceForm from "../components/CreateWorkspaceForm";

function CreateWorkspace() {
    console.log(window.localStorage.getItem('uuid')+'xuxuxuxuxu')

    const history = useHistory()

    function createWorkspaceHandler(workspace) {
        fetch('http://localhost:8080/api/workspace/add?name='+workspace,{
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '+ window.localStorage.getItem('uuid')
            }
        }).then(() => history.replace('/workspace/'+window.localStorage.getItem('uuid')))
    }

    return (
        <CreateWorkspaceForm createWorkspace={createWorkspaceHandler} />
    );
}

export default CreateWorkspace;