import React from 'react'

import { Login } from './Login'

export const Navbar: React.FunctionComponent = () => {
    return (
        <nav className="navbar is-dark" role="navigation">
            <div className="container">
                <div className="navbar-brand">
                    <span className="navbar-item">Workshop</span>
                </div>

                <div className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <Login />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
