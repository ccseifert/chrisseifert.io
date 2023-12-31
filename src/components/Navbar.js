import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav className="navbar is-transparent" role="navigation" aria-label="main-navigation">
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/" className="navbar-item" title="Logo">
                        Chris Writes Things
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
