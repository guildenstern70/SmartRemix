/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */


export interface IUser
{
    username: string | undefined;
    password: string | undefined;
    _id: string | undefined;
    id: number | undefined;
}

export interface IRef
{
    ref: any,
    ts: number,
    data: IUser
}

export interface IRefs
{
    data: IRef[];
}

export interface GqlResponse
{
    data: IUser[];
}

export interface GqlCreateUser
{
    createUser: IUser;
}

export interface GqlDeleteUser
{
    deleteUser: IUser;
}

export interface GqlUserByUsername
{
    userByUsername: GqlResponse
}


