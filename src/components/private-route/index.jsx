import React from 'react'
import Splash from '../../pages/Splash'

import { Route, Redirect } from "react-router-dom"
import { auth } from '../../firebase'

const PrivateRoute = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={
                props => {
                    const isHomePage = props.location.pathname === '/';

                    return (
                        auth.currentUser ? (
                            <Component {...props} />
                        ) : (
                                isHomePage ? (
                                    <Splash />
                                ) : (
                                        <Redirect
                                            to={{
                                                pathname: "/login",
                                                state: { from: props.location }
                                            }}
                                        />
                                    )
                            )
                    )
                }
            }
        />
    )
}

export default PrivateRoute;