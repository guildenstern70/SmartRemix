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
    loggedUser?: string;
}

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
    if (!props.showNav) return null;

    let loginButtons =
        <div className="buttons">
            <a className="button is-primary">
                <strong>Sign up</strong>
            </a>
            <a className="button is-light">
                Log in
            </a>
        </div>;

    if (props.loggedUser) {
        loginButtons =
            <div className="buttons">
                <span className="mx-2">Logged in as <b>{props.loggedUser}</b></span>
                <a href="/logout" className="mt-2 button is-light is-small">
                    Logout
                </a>
            </div>;
    }

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
                    {loginButtons}
                </div>
            </div>
        </div>

    );
}

export default Navbar;



