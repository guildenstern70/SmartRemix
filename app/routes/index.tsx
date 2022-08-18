/*
 *
 * Copyright (c) Alessio Saltarin 2022
 * Project SmartRemix
 * MIT License - see LICENSE
 *
 */

import MainLayout from "~/shared/components/main-layout";

export default function Index() {
  return (
      <MainLayout>
          <h1 className={'is-size-2'}>Welcome to Remix</h1>
          <a className="button" href="/another">
              Another Page
          </a>
      </MainLayout>
  );
}
