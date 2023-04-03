
/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import { IUser } from '~/model/types';

export default class User implements IUser
{
    public id: number | undefined;
    public username: string | undefined;
    public password: string | undefined;

    public constructor(init?:Partial<User>) {
        Object.assign(this, init);
    }

    toString = (): string =>
    {
        return `#${this.id} - ${this.username}`;
    };
}
