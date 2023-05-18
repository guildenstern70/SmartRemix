/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */


import MainNavLayout from '~/shared/components/main-nav-layout';
import { json } from '@remix-run/node';
import { getLoggedUser } from '~/session.server';
import { useLoaderData } from '@remix-run/react';
import type { LoaderArgs } from '@remix-run/node';

export const loader = async ({ request }: LoaderArgs) => {
    const loggedUser = await getLoggedUser(request);
    console.log("Logged user is " + loggedUser);
    return json({ loggedUser });
};

export default function Documentation() {
    const data = useLoaderData<typeof loader>();
    return (
        <MainNavLayout loggerUser={data.loggedUser}>
            <h1 className={'is-size-2'}>Documentation</h1>
        </MainNavLayout>
    );
}
