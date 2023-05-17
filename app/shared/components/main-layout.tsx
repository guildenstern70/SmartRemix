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
        <section className="section">
            <div className="container">
                <main>
                    {props.children}
                </main>
            </div>
        </section>

    );
};

export default MainLayout;
