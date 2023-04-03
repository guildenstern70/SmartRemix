/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import React from 'react';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = (props: MainLayoutProps) => {
    return (
        <div className="container">
            <main>
                {props.children}
            </main>
        </div>
    );
};

export default MainLayout;