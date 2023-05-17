/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { logout } from "~/session.server";

export const action = async ({ request }: ActionArgs) => logout(request);

export const loader = async () => redirect("/");
