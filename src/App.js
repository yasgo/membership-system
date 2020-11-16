import { HashRouter as Router, Route, Switch } from "react-router-dom"
import { useSelector } from 'react-redux'
import PrivateRoute from './components/private-route'

import Home from './pages/Home'
import Profile from './pages/Profile'
import Error from './pages/Error'
import Login from './pages/Login'
import Register from './pages/Register'

import Alert from './components/alert'
import Header from './components/header'
import Loading from './components/loading'
import Content from './components/content'

const App = () => {
    const firebaseInit = useSelector(state => state.firebase).firebaseInit;

    return (
        (
            <Router>
                <Header />
                <Alert />
                <Loading />
                {
                    firebaseInit && (
                        <Content>
                            <Switch>
                                <PrivateRoute exact path="/" component={Home} />
                                <PrivateRoute exact path="/profile" component={Profile} />
                                <Route exact path="/login" component={Login} />
                                <Route exact path="/register" component={Register} />
                                <Route component={Error} />
                            </Switch>
                        </Content>
                    )
                }
            </Router >
        )
    )
}

export default App;