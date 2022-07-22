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
import ProtectedRoute from "./pages/ProtectedRoute";


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
        <ProtectedRoute path={["/workspace/:uuid", "/workspace"]} exact>
          <Workspace />
        </ProtectedRoute>
        <ProtectedRoute path="/createworkspace" exact>
          <CreateWorkspace />
        </ProtectedRoute>
        <ProtectedRoute path="/boards/:wsid" exact>
          <Boards />
        </ProtectedRoute>
        <ProtectedRoute path="/createboard" exact>
          <CreateBoard />
        </ProtectedRoute>
        <ProtectedRoute path="/deleteboard/:bdid" exact>
          <DeleteBoard />
        </ProtectedRoute>
        <ProtectedRoute path="/deleteworkspace/:wsid" exact>
          <DeleteWorkspace />
        </ProtectedRoute>
        <ProtectedRoute path="/addmember/:wsid" exact>
          <AddMember />
        </ProtectedRoute>
        <ProtectedRoute path="/cards/:bdid/:wsid" exact>
          <Cards />
        </ProtectedRoute>
        <ProtectedRoute path="/createcard/:bdid/:wsid" exact>
          <CreateCard />
        </ProtectedRoute>
        <ProtectedRoute path="/addcardmember/:bdid/:wsid/:tsid" exact>
          <AddCardMember />
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
