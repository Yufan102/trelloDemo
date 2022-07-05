import {Route, Switch} from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import Workspace from "./pages/Workspace";

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
        <Route path="/workspace/:uuid" exact>
          <Workspace />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
