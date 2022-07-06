import { useHistory } from "react-router-dom";
import CreateWorkspaceForm from "../components/CreateWorkspaceForm";

function CreateWorkspace() {
    const url = process.env.REACT_APP_URL;

    const history = useHistory()

    function createWorkspaceHandler(workspace) {
        fetch(url+'/workspace/add?name='+workspace,{
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