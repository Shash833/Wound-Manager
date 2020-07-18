import React, { useContext } from "react";
import { UserContext } from "../../Context/AuthContext"

function Header() {

    //Context to set state when user is logged out:

    const { user, setUser } = useContext(UserContext)

    const logOut = async () => {
        setUser(false)
    }

    return (<nav className="navbar is-info" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <h1 className="navbar-item">
                Wound Manager
            </h1>
        </div>
        {user ?
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button" onClick={logOut}>
                                <span>Logout</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            : false}
    </nav>)
}
export default Header;
