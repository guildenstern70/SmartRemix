/*
 *
 * Copyright (c) Alessio Saltarin 2022
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import MainLayout from "~/shared/components/main-layout";

export default function Another() {
    return (
        <MainLayout>
            <h1 className={'is-size-2'}>Another page</h1>
            <a className="button" href="/">
                Home
            </a>
        </MainLayout>
    );
}
