import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { UserContext } from '../Context/AuthContext'

// the reason we're destructuring the component is because we want a render function
// and not to render the component
export function PrivateRoute({ component: Component, ...rest }) {
    const { user } = useContext(UserContext)

    return <Route {...rest} render={(renderProps) => {
        return user ? <Component {...renderProps} /> : <Redirect to="/" />
    }}
    />
}
