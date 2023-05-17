/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */


import { GraphQLClient, gql } from 'graphql-request'
import { GqlUserByUsername, IUser } from '~/model/types';

const FAUNA_GQL_SERVER= "https://graphql.eu.fauna.com/graphql";


export class FaunaGql {
    client: GraphQLClient;

    constructor() {
        this.client = new GraphQLClient(FAUNA_GQL_SERVER, {
            headers: {
                authorization: `Bearer ${process.env.FAUNA_SECRET}`,
            }
        });
    }

    async findUserByUsername(username: string): Promise<IUser|undefined> {
        const query = gql`
            query UserByUsername {
                userByUsername(username: "${username}") {
                    data {
                        id
                        password
                        username
                    }
                }
            }`;

        const jsonResponse: GqlUserByUsername = await this.client
            .request(query, { username });

        const users = jsonResponse.userByUsername.data;
        if (users.length != 1)
        {
            return undefined;
        }
        return users[0];
    }
}



