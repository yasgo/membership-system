import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { useSelector } from 'react-redux'
import PrivateRoute from './components/private-route'

import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
    const firebaseInit = useSelector(state => state.firebase).firebaseInit;

    return (
        (
            <Router>
                <Switch>
                    {
                        firebaseInit && (
                            <PrivateRoute exact path="/" component={Home} />
                        )
                    }
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    {/* <Route component={ErrorPage} /> */}
                </Switch>
            </Router>
        )
    )
}

export default App;