import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)

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
