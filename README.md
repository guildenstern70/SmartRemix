# Welcome to SmartRemix

SmartRemix is a web template written using Remix, React, Jest Unit Tests, FaunaDB and Bulma.
SmartRemix can be deployed in Netlify.

- [Remix](https://remix.run/docs)
- [Netlify](https://www.netlify.com/)
- [React](https://react.dev/)
- [Jest](https://jestjs.io/)
- [FaunaDb](https://fauna.com/) 

## Setup

Before running this application you need to create a [Fauna DB](https://fauna.com/).

Create a new database in EU region. (You may setup Fauna in other regions, but remember to update FAUNA_URL in
src/db/fauna.ts)

1. Go to https://dashboard.fauna.com (login if required) and click on New Database
2. Fill the Database Name field and click on Save.
3. Click on GraphQL section visible on the left sidebar.
4. Select the file /gql/users.gql to create initial schema

Generate a secret to access the database:

1. Click on Security section and click on New Key.
2. Select Server role and click on Save. Copy the secret.
3. You need to store the secret in an environment variable called 'FAUNA_SECRET'

If everything went OK, on the first login, a new "guest" user will be created on your Fauna DB.

IMPORTANT:
You must export an environment variable named FAUNA_SECRET with the secret above in order to run the application.

## Development

The Remix dev server starts your app in development mode, rebuilding assets on file changes. To start the Remix dev server:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!


## Netlify Setup

1. Install the [Netlify CLI](https://www.netlify.com/products/dev/):

```sh
npm i -g netlify-cli
```

If you have previously installed the Netlify CLI, you should update it to the latest version:

```sh
npm i -g netlify-cli@latest
```

2. Sign up and log in to Netlify:

```sh
netlify login
```

3. Create a new site:

```sh
netlify init
```


The Netlify CLI builds a production version of your Remix App Server and splits it into Netlify Functions that run locally. This includes any custom Netlify functions you've developed. The Netlify CLI runs all of this in its development mode.

```sh
netlify dev
```

Open up [http://localhost:3000](http://localhost:3000), and you should be ready to go!

Note: When running the Netlify CLI, file changes will rebuild assets, but you will not see the changes to the page you are on unless you do a browser refresh of the page. Due to how the Netlify CLI builds the Remix App Server, it does not support hot module reloading.

## Deployment

There are two ways to deploy your app to Netlify, you can either link your app to your git repo and have it auto deploy changes to Netlify, or you can deploy your app manually. If you've followed the setup instructions already, all you need to do is run this:

```sh
# preview deployment
netlify deploy --build

# production deployment
netlify deploy --build --prod
```
