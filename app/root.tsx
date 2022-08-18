/*
 *
 * Copyright (c) Alessio Saltarin 2022
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css"

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "SmartRemix",
  viewport: "width=device-width,initial-scale=1",
});

export function links() {
  return [
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css",
    },
    {
      rel: "stylesheet",
      href: styles
    }
    ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>SmartRemix</title>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
