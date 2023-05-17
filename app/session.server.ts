/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import { createCookieSessionStorage } from "@remix-run/node";
import { redirect } from "@remix-run/node";

const USER_SESSION_KEY = "User";

export const sessionStorage = createCookieSessionStorage({
    cookie: {
        name: "__session",
        httpOnly: false,
        path: "/",
        sameSite: "lax",
        secrets: ["your_session_secret"],
        secure: process.env.NODE_ENV === "production",
    },
});

async function getSession(request: Request) {
    const cookie = request.headers.get("Cookie");
    return sessionStorage.getSession(cookie);
}

export async function getLoggedUser(
    request: Request): Promise<string> {
    const session = await getSession(request);
    return session.get(USER_SESSION_KEY);
}

export async function createUserSessionAndRedirect(
    request: Request,
    username: string,
    redirectTo: string
) {
    const session = await getSession(request);
    session.set(USER_SESSION_KEY, username);
    console.log("Setting logged user to " + username);
    return redirect(redirectTo, {
        headers: {
            "Set-Cookie": await sessionStorage.commitSession(session, {
                maxAge: 60 * 60 * 24 * 7
            }),
        },
    });
}

export async function logout(request: Request) {
    const session = await getSession(request);
    return redirect("/", {
        headers: {
            "Set-Cookie": await sessionStorage.destroySession(session),
        },
    });
}

