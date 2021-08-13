import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import PrivateRoute from "components/Routes/PrivateRoute";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies">
                <Catalog />
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
);

export default Routes;