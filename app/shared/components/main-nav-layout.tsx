/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import React from 'react';
import NavTopbar from '~/shared/components/nav-topbar';

interface MainNavLayoutProps {
    children: React.ReactNode;
    showNavbar?: boolean;
}

const MainNavLayout: React.FC<MainNavLayoutProps> = (props: MainNavLayoutProps) => {
    return (
        <div className="container">
            <NavTopbar showNav={props.showNavbar} />
            <main>
                {props.children}
            </main>
        </div>
    );
};

MainNavLayout.defaultProps = {
    showNavbar: true
};

export default MainNavLayout;

