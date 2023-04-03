/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */


import { expect, test} from '@jest/globals';
import { FaunaDb } from '../db/fauna';


test('Should be able to fetch guest user', async () => {
    const faunaDb = new FaunaDb();
    const users = await faunaDb.getAllUsers();
    expect(users.length).toBeGreaterThan(0);
    const guestUsers = users.filter( user => user.username === 'guest');
    expect(guestUsers.length).toBe(1);
    expect(guestUsers[0].password === 'guest');
    await faunaDb.close();
});

