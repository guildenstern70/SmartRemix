/*
 *
 * Copyright (c) Alessio Saltarin 2023
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import MainLayout from "~/shared/components/main-layout";

export default function Index() {
  return (
      <MainLayout>
        <h1 className="topspace is-size-2">Welcome to SmartRemix</h1>
          <p className={'mt-3'}>
              <b>SmartRemix</b> is a web template written using
              <span className={'px-1'}><a href="https://remix.run/" target="_blank">Remix</a>,</span>
              <span className={'px-1'}><a href="https://react.dev/" target="_blank">React</a>,</span>
              <span className={'px-1'}><a href="https://jestjs.io/" target="_blank">Jest Unit Tests in Typescript</a>,</span>
              <span className={'px-1'}><a href="https://fauna.com/" target="_blank">FaunaDB</a></span>
              and
              <span className={'px-1'}><a href="https://bulma.io/" target="_blank">Bulma</a>.</span>
          </p>
        <a className="button mt-5" href="/another">
          Learn more...
        </a>
      </MainLayout>
  );
}

