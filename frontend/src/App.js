import {Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Workspace from "./pages/Workspace";
import CreateWorkspace from "./pages/CreateWorkspace";
import Boards from "./pages/Boards";
import CreateBoard from "./pages/CreateBoard";
import DeleteBoard from "./pages/DeleteBoard";
import DeleteWorkspace from "./pages/DeleteWorkspace";
import AddMember from "./pages/AddMember";
import ForgotPassword from "./pages/ForgotPassword";
import ViewCards from "./components/ViewCards";
import Cards from "./pages/Cards";
import CreateCard from "./pages/CreateCard";
import AddCardMember from "./pages/AddCardMember";

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path={["/", "/login"]} exact>
          <LoginPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/forgotPassword" exact>
          <ForgotPassword />
        </Route>
        <Route path={["/workspace/:uuid", "/workspace"]} exact>
          <Workspace />
        </Route>
        <Route path="/createworkspace" exact>
          <CreateWorkspace />
        </Route>
        <Route path="/boards/:wsid" exact>
          <Boards />
        </Route>
        <Route path="/createboard" exact>
          <CreateBoard />
        </Route>
        <Route path="/deleteboard/:bdid" exact>
          <DeleteBoard />
        </Route>
        <Route path="/deleteworkspace/:wsid" exact>
          <DeleteWorkspace />
        </Route>
        <Route path="/addmember/:wsid" exact>
          <AddMember />
        </Route>
        <Route path="/cards/:bdid/:wsid" exact>
          <Cards />
        </Route>
        <Route path="/createcard/:bdid/:wsid" exact>
          <CreateCard />
        </Route>
        <Route path="/addcardmember/:bdid/:wsid/:tsid" exact>
          <AddCardMember />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
