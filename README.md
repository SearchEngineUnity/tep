# Site Builder V2

## Setup Notes

This is a lerna mono repo, to install for all packages run `npm install --legacy-peer-deps` from the root folder. You should only have one node modules folder at the root plus a node module containing dotenv for #siteBuilderV2/web. To run the various part of the project, refer to the **Script Overview** section below for details.

This project is set up with eslint and prettier following Airbnb template + custom rules. The code will be auto linted and fixed precommit (set up via husky + lint-staged). This [ref for precommit linting](https://laurieontech.com/posts/husky/) is used for set up. The difference is that we have used a .lintstagedrc file for the lint-staged configuration instead of putting the instructions directly in the package.json file. The prettier command is not included as it is integrated in to eslint already.

## Scripts Overview

All the common commands can be accessed directly via the root folder via `npm run <script-name>` . We no longer have to access the sub folders to start local servers / deploy / etc. Here are the common commands that we will access.
* `sanity:dev` - starts local sanity dev server
* `sanity:deploy` - deploys Sanity graphql then the studio
* `gatsby:dev` - starts local gatsby dev server
* `gatsby:clean` - remove .cache and public folders in /web
* `clean` - removes all node modules in the individual packages folder (node modules should only exist for root)

## Using Lerna

### Add NPM dependencies to the project's packages

By default, lerna adds a new dependency to all managed packages. You can scope the add command to individual packages using the `--scope=<package-name>` flag. This will install a given dependency only to `<package-name>`:
```
lerna add a --scope=b

# add package "a" to multiple packages
lerna add a --scope=b --scope=c --scope=d  
```

Here’s a concrete example installing **@supercharge/strings** as a dependency to the **@supercharge/session** package:
```
lerna add @supercharge/strings --scope=@supercharge/session  
```

Run `npm run clean` should you accidentally installed a dependency inside the package itself then rerun `npm install --legacy-peer-deps` from the root folder.

### Lerna Setup Resources

Here are some resources consulted by SC when setting up this project.
* [Publish Multiple Gatsby Sites in a Monorepo, Using Lerna, Travis & Vercel](https://www.gatsbyjs.com/blog/2019-01-01-publish-multiple-gatsby-sites/)
* [Building a JavaScript Monorepo with Lerna](https://javascript.plainenglish.io/javascript-monorepo-with-lerna-5729d6242302)
* [@lerna/bootstrap](https://www.npmjs.com/package/@lerna/bootstrap)
* [Lerna Getting Started](https://lerna.js.org/docs/getting-started)