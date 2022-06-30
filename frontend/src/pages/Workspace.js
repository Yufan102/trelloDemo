
function Workspace() {
    return (
    <div class="workspace">
        <p>workspace</p>
        <div class="create-workspace"><a href="javascript:;">Create a new workspace</a></div>
        <div class="create-form">
                <h2 class="title">Create your new workspace
                    <span><a href="javascript:void(0);" class="close-btn">Close</a></span>
                </h2>
            <div class="create-name">
            <label>Workspace name: </label>
            </div>
            <button class="btn-2">Submit</button>
        </div>
        <div class="new-workspace"></div>
    </div>
    );
}

export default Workspace;