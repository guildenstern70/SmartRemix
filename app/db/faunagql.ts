// noinspection GraphQLUnresolvedReference

/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */


import { GraphQLClient, gql } from 'graphql-request'
import type { GqlDeleteUser, GqlUserByUsername, IUser } from "~/model/types";
import { GqlCreateUser } from "~/model/types";

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

    async deleteUser(username: string): Promise<IUser | undefined>
    {
        const userToDelete = await this.findUserByUsername(username);
        if (userToDelete == undefined) {
            console.error("User " + username + " cannot be deleted. User was not found on DB.");
            return undefined;
        }
        const _idToBeDeleted = userToDelete._id;
        const deleteQuery = gql`   
                mutation {
                  deleteUser(id: ${_idToBeDeleted}) {
                      username
                      password
                      id
                      _id
                  }
                }
                `;
        const jsonResponse: GqlDeleteUser = await this.client.request(deleteQuery, {
            _idToBeDeleted });
        console.log("Fauna returned => " + JSON.stringify(jsonResponse));
        return jsonResponse.deleteUser;
    }

    async createUser(user: IUser): Promise<IUser | undefined>
    {
        // We store the password in clear text. In production environment passwords should
        // be masked using, for instance, SHA-256 algorithm.
        const query = gql`
            mutation($username: String!, 
                     $password: String!,
                     $id: Int!) {
                createUser(data: { username: $username, 
                                   password: $password,,
                                   id: $id }) {
                    username
                    password
                    id
                    _id
                }
            }`;

        console.log("Querying Fauna...");
        const jsonResponse: GqlCreateUser = await this.client.request(query, {
            username: user.username,
            password: user.password,
            id: user.id
        });
        console.log("Fauna returned => " + JSON.stringify(jsonResponse));
        return jsonResponse.createUser;
    }

    async findUserByUsername(username: string): Promise<IUser|undefined> {
        const query = gql`
            query UserByUsername {
                userByUsername(username: "${username}") {
                    data {
                        id
                        _id
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



