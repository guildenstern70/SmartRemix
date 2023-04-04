/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import React from 'react';
import Navbar from '~/shared/components/navbar';

type NavTopbarProps = {
    showNav?: boolean;
}

const NavTopbar: React.FC<NavTopbarProps> = (props: NavTopbarProps) => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <b>SmartRemix</b>
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <Navbar showNav={props.showNav} />
        </nav>
    );
};

export default NavTopbar;
