import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import ListDepartment from "./ListDepartment";
import ListEmployee from "./ListEmployee";
import Department from "./Department";
import Employee from "./Employee";

const App = () => {
    return (<>
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/department" component={ListDepartment}></Route>
                <Route exact path="/employee" component={ListEmployee}></Route>
                <Route exact path="/add-department" component={Department}></Route>
                <Route exact path="/add-employee" component={Employee}></Route>
                <Route exact path="/edit-department/:id" component={Department}></Route>
            </Switch>
        </BrowserRouter>
    </>)
}

export default App;