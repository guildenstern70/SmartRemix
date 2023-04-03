/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */


import MainNavLayout from '~/shared/components/main-nav-layout';

export default function Another() {
    return (
        <MainNavLayout>
            <h1 className={'is-size-2'}>Another page</h1>
            <a className="button" href="/">
                Home
            </a>
        </MainNavLayout>
    );
}
