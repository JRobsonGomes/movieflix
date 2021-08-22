import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Catalog from "pages/Catalog";
import Home from "pages/Home";
import PrivateRoute from "components/Routes/PrivateRoute";
import MovieDetails from "components/MovieDetails";

const Routes = () => (
    <BrowserRouter>
        <Navbar />
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <PrivateRoute path="/movies/:movieId">
                <MovieDetails />
            </PrivateRoute>
            <PrivateRoute path="/movies">
                <Catalog />
            </PrivateRoute>
        </Switch>
    </BrowserRouter>
);

export default Routes;