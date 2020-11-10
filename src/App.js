import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login'
import Register from './pages/Register'

const App = () => (
    <Router>
        <div>Loading</div>
        <Switch>
            {/* <PrivateRoute exact path="/" component={Home} />
                    <PrivateRoute exact path="/edit" component={Edit} /> */}

            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            {/* <Route component={ErrorPage} /> */}
        </Switch>
    </Router>
)

export default App;