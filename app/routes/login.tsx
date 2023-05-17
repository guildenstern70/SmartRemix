/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import MainNavLayout from "~/shared/components/main-nav-layout";
import { Form, useActionData } from "@remix-run/react";
import { ActionArgs, json, redirect } from "@remix-run/node";
import { useEffect, useRef, useState } from 'react';
import "../styles/login.css"
import { loginUser } from '~/model/user.server';
import { LoginResult } from '~/model/loginresult';


export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const password = formData.get("password");

  if (typeof password !== "string" || password.length === 0) {
    return json(
        { errors: { errorMessage: "Password is required" } },
        { status: 400 }
    );
  }

  if (typeof username !== "string" || username.length === 0) {
    return json(
        { errors: { errorMessage: "Username is required" } },
        { status: 400 }
    );
  }

  console.log(username + " is trying to login...");

  const result = await loginUser(username, password);

  if (result != LoginResult.OK)
  {
    console.log(username + " not found or wrong password");
    return json(
        { errors: { errorMessage: "Unknown user or wrong password" } },
        { status: 400 }
    );
  }
  console.log("Ok, user " + username + " has logged in.");
  return redirect("/home");
};

export default function Home() {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const actionData = useActionData<typeof action>();

  let [errorMessage, setError] = useState("");

  useEffect(() => {
    if (actionData?.errors?.errorMessage.startsWith("Username")) {
      setError(actionData.errors.errorMessage);
      usernameRef.current?.focus();
    } else if (actionData?.errors?.errorMessage.startsWith("Password")) {
      setError(actionData.errors.errorMessage);
      passwordRef.current?.focus();
    } else if (actionData?.errors?.errorMessage) {
      setError(actionData.errors.errorMessage);
    }
  }, [actionData]);

  function hideError() {
    setError("");
  }

  const isError = () => { return (errorMessage != ""); }

  return (
    <MainNavLayout showNavbar={false}>
      <div className="container mt-5">
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen">
            <Form method="post" className="box" noValidate={true}>
              <div className="field">
                <label htmlFor="" className="label">
                  Username
                </label>
                <div className="control has-icons-left">
                  <input
                    id="username"
                    name="username"
                    ref={usernameRef}
                    type="text"
                    placeholder="Your username"
                    className="input"
                    onChange={ () => hideError()}
                  />
                  <span className="icon is-small is-left">
                    <i className="bi bi-person"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="label">
                  Password
                </label>
                <div className="control has-icons-left">
                  <input
                    id="password"
                    name="password"
                    ref={passwordRef}
                    type="password"
                    placeholder="Your password"
                    className="input"
                    onChange={ () => hideError()}
                    required
                  />
                  <span className="icon is-small is-left">
                    <i className="bi bi-lock"></i>
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="" className="checkbox">
                  <input type="checkbox" className="mr-2" />
                  Remember me
                </label>
              </div>
              <div>
                <small>
                  If unsure, try <i>guest/guest</i>
                </small>
              </div>
              <div className="field mt-3">
                <button type="submit" className="button">
                  Login
                </button>
              </div>
            </Form>
          </div>
        </div>
        <div className="columns is-centered">
          <div className="column is-5-tablet is-4-desktop is-3-widescreen mt-4">
            {isError() ? (
                <div className="formerror notification is-danger is-size-6" id="error">
                  <button className="delete" onClick={ () => hideError() }></button>
                  { errorMessage }
                </div>
            ) : null}
          </div>
        </div>
      </div>
    </MainNavLayout>
  );
}
