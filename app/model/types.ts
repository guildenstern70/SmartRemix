/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import User from '~/model/user';

export interface IUser
{
    username: string | undefined;
    password: string | undefined;
    id: number | undefined;
}

export interface IRef
{
    ref: any,
    ts: number,
    data: IUser
}

export interface IAllUsers
{
    data: IRef[];
}


