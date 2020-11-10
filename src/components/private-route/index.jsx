import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { auth } from '../../firebase';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => {
                    return (
                        auth.currentUser ? (
                            <Component {...props} />
                        ) : (
                                <Redirect
                                    to={{
                                        pathname: "/login",
                                        state: { from: props.location }
                                    }}
                                />
                            )
                    )
                }
            }
        />
    )
}

export default PrivateRoute;