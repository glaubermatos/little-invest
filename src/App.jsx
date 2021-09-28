import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Inscricao } from "./pages/Inscricao";


export function App() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/new-account" component={Inscricao} />
            </Switch>
        </BrowserRouter>
    );
}