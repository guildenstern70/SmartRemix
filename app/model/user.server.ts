/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import type { IUser } from '~/model/types';
import { FaunaGql } from '~/db/faunagql';
import { LoginResult } from '~/model/loginresult';

export async function loginUser(
    username: string,
    password: string
): Promise<LoginResult> {

    const faunaGql = new FaunaGql();
    const foundUser: IUser | undefined = await faunaGql.findUserByUsername("guest");
    if (foundUser == undefined)
    {
        return LoginResult.UNKNOWN_USER;
    }
    else if (foundUser.password != password)
    {
        return LoginResult.WRONG_PASSWORD;
    }
    return LoginResult.OK;
}
