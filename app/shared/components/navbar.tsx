/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import React from 'react';

type NavbarProps = {
    showNav?: boolean;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    if (!props.showNav) return null;
    return (
        <div className="navbar-menu">
            <div className="navbar-start">
                <a className="navbar-item" href="/home">
                    Home
                </a>
                <a className="navbar-item" href="/documentation">
                    Documentation
                </a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">
                        More
                    </a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item" href="/about">
                            About
                        </a>
                        <a className="navbar-item" href="/contact">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <a className="button is-primary">
                            <strong>Sign up</strong>
                        </a>
                        <a className="button is-light">
                            Log in
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;



