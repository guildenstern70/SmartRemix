/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import { Client, query } from 'faunadb';
import { IAllUsers, IUser } from '~/model/types';
import * as process from 'process';

const FAUNA_DOMAIN= "db.eu.fauna.com";

export class FaunaDb
{

    client: Client;

    constructor() {
        let secret = "";
        if (process.env["FAUNA_SECRET"])
            secret = process.env["FAUNA_SECRET"];
        this.client = new Client({
            secret,
            domain: 'db.eu.fauna.com',
            scheme: 'https'
        });
    }

    async close(): Promise<void> {
        await this.client.close();
    }

    async getAllUsers(): Promise<IUser[]> {
        const q = query;
        const response: IAllUsers = await this.client.query(
            q.Map(
                q.Paginate(q.Match(q.Index('allUsers'))),
                q.Lambda(x => q.Get(x))
            )
        );
        return response.data.map( ref => ref.data);
    }

    async createUser(faunaUser: object): Promise<Object> {
        const q = query;
        const response = this.client.query(
            q.Create(
                q.Collection('User'),
                {
                    'data': faunaUser,
                }
            )
        );
        return response;
    }

}
