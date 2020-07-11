import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom'

import { UserContext } from '../Context/AuthContext'

// the reason we're destructuring the component is because we want a render function
// and not to render the component
export function PublicRoute({ component: Component, ...rest }) {
    const { user } = useContext(UserContext)

    return <Route {...rest} render={(renderProps) => {
        if (user) {
            return <Redirect to="/" />
        }
        return <Component {...renderProps} />
    }}
    />
}