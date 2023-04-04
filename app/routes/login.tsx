/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import MainNavLayout from '~/shared/components/main-nav-layout';

export default function Home() {
    return (
        <MainNavLayout showNavbar={false}>
            <div className="container mt-5">
                <div className="columns is-centered">
                    <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                        <form action="" className="box">
                            <div className="field">
                                <label htmlFor="" className="label">Username</label>
                                <div className="control has-icons-left">
                                    <input type="text" placeholder="Your username" className="input" required/>
                                    <span className="icon is-small is-left">
                  <i className="bi bi-person"></i>
                </span>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="" className="label">Password</label>
                                <div className="control has-icons-left">
                                    <input type="password" placeholder="Your password" className="input" required/>
                                    <span className="icon is-small is-left">
                                <i className="bi bi-lock"></i>
                </span>
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="" className="checkbox">
                                    <input type="checkbox" className="mr-2"/>
                                    Remember me
                                </label>
                            </div>
                            <div>
                                <small>If unsure, try <i>guest/guest</i></small>
                            </div>
                            <div className="field mt-3">
                                <button className="button">
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainNavLayout>
    );
}


