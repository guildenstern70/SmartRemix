/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import { createCookieSessionStorage } from "@remix-run/node";
import { redirect } from "@remix-run/node";

const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        httpOnly: false,
        path: "/",
        sameSite: "lax",
        secrets: undefined,
        secure: process.env.NODE_ENV === "production",
    },
});

async function getSession(request: Request) {
    const cookie = request.headers.get("Cookie");
    return sessionStorage.getSession(cookie);
}


export async function logout(request: Request) {
    const session = await getSession(request);
    return redirect("/", {
        headers: {
            "Set-Cookie": await sessionStorage.destroySession(session),
        },
    });
}

