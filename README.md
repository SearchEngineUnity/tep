# Site Builder V2

## Setup Notes

Please use node 18.13.0 and npm 8.19.3.

This is a lerna mono repo, to install for all packages run `npm install --legacy-peer-deps` from the root folder. Refer to the **Script Overview** section below for details.

This project is set up with eslint and prettier following Airbnb template + custom rules. The code will be auto linted and fixed precommit (set up via husky + lint-staged). This [ref for precommit linting](https://laurieontech.com/posts/husky/) is used for set up. The difference is that we have used a .lintstagedrc file for the lint-staged configuration instead of putting the instructions directly in the package.json file. The prettier command is not included as it is integrated in to eslint already.

### Important Package Versions

* "sanity": "^3.0.0"
* "gatsby": "^5.5.0"

## Scripts Overview

All the common commands can be accessed directly via the root folder via `npm run <script-name>` . We no longer have to access the sub folders to start local servers / deploy / etc. Here are the common commands that we will access.
* [sanity:dev] - starts local sanity dev server
* [sanity:deploy] - deploys Sanity graphql then the studio
* [gatsby:dev] - starts local gatsby dev server
* [gatsby:clean] - remove .cache and public folders in /web
* [clean] - removes all node modules in the individual packages folder (node modules should only exist for root)

**Breaking change for Studio script**
Sanity has repurposed the [start] command. [sanity start] will now start a preview for the static builds. To run a development server from the studio folder, use the [npm run dev] or [sanity dev] command instead.

## Using Lerna^6.4.1

### Clean up node modules

Run `npm run clean` or `lerna clean -y` from the root folder to remove node modules for the packages. The node_modules folder at root level will need to be deleted manually.

### Add NPM dependencies to the project's packages

Use `lerna add a` to install a new dependency to all managed packages. You can scope the add command to individual packages using the `--scope=<package-name>` flag. This will install a given dependency only to `<package-name>`:
```
lerna add a --scope=b

# add package "a" to multiple packages
lerna add a --scope=b --scope=c --scope=d  
```

Here’s a concrete example installing **dotenv** as a dependency to the **@siteBuilderV2/web** package:
```
lerna add dotenv --scope=@siteBuilderV2/web  
```

Run `npm run clean` should you accidentally installed a dependency inside the package itself then rerun `npm install --legacy-peer-deps` from the root folder.

### Lerna Setup Resources

Here are some resources consulted by SC when setting up this project.
* [Publish Multiple Gatsby Sites in a Monorepo, Using Lerna, Travis & Vercel](https://www.gatsbyjs.com/blog/2019-01-01-publish-multiple-gatsby-sites/)
* [Building a JavaScript Monorepo with Lerna](https://javascript.plainenglish.io/javascript-monorepo-with-lerna-5729d6242302)
* [@lerna/bootstrap](https://www.npmjs.com/package/@lerna/bootstrap)
* [Lerna Getting Started](https://lerna.js.org/docs/getting-started)

<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby minimal starter
</h1>

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the minimal starter.

    ```shell
    # create a new Gatsby site using the minimal starter
    npm init gatsby
    ```

2.  **Start developing.**

    Navigate into your new site's directory and start it up.

    ```shell
    cd my-gatsby-site/
    npm run develop
    ```

3.  **Open the code and start customizing!**

    Your site is now running at http://localhost:8000!

    Edit `src/pages/index.js` to see your site update in real-time!

4.  **Learn more**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

## 🚀 Quick start (Gatsby Cloud)

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-minimal)

## Sanity migration

1. [Step by step guide](https://www.sanity.io/docs/example-migrating-the-blog-template-from-studio-v2-to-v3)

2. [Migrating the CLI - This migrates sanity.json to sanity.cli.js](https://www.sanity.io/docs/migrating-the-cli)

3. [Studio configiration - This migrates the other part of sanity.json to sanity.config.js. We are not currently using](https://www.sanity.io/docs/migrating-studio-configuration)workspaces.

4. [Schema and schema types - This one is used migrate custom input components and preview components.](https://www.sanity.io/docs/migrating-schema-types)

5. [Preveiw list view - This is the current document that has been helpful for custom input components and preview components.](https://www.sanity.io/docs/previews-list-views)

6. [Structure Builder - The majority of the migration has been completed but the custom preview (of button, form, section) has not been yet implemented.](https://www.sanity.io/docs/migrating-custom-structure-and-default-document-node)

7. [Migrating Plugins](https://www.sanity.io/docs/migrating-plugins)

8. [Document actions](https://www.sanity.io/docs/document-actions)

## Gatsby Preview Button

1. [Install Preview Extension for Sanity](https://support.gatsbyjs.com/hc/en-us/articles/4877130019731-Install-Preview-Extension-for-Sanity)

2. [Document action](https://www.sanity.io/docs/document-actions)

3. [Code for the plugin - Use this code to build our preview instead of installing it directly as this plugin is not Sanity V3 compatible](https://www.npmjs.com/package/%40nwazuo/sanity-plugin-gatsby-cloud-preview?activeTab=explore)

## Gatsby Migration
We technically didn't 'migrate', we installed the newest V5 and slowly moved the stuff into it.

1. [Migrate v3 to v4](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/) No action was required

2. [Migrate v4 to v5](https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v4-to-v5/)

**Some highlights**

Change to IE support
Updated sort
Set up trailing slash to never isntead of using a package to acheive this
Migrate to head api instead of using gatsby-react-helmet or react-helmet
When you start up the playground it will be GraphiQL now
removal of use of <StaicQuery />
All dependencies were reinstalled to gatsby v5 compatible other than gatsby-theme-material-ui (they need to update their dependancy still)
Material UI migration

3. [Migrating to v5 getting started](https://mui.com/material-ui/migration/migration-v4/) only code mod is needed here

4. [Style change](https://mui.com/material-ui/migration/v5-style-changes/)

**Notes**

A lot of these changes noted are updated automatically by the code mod. Note the changes to the renamed items.
I manually updated all the overrides to components instead of using the adaptV5Theme function done by the code mod
I think it is easier to just remember there are new ones to do things for component definition as we don't do this often anyways
migrated styled from styled-components to styled from @mui/material/styles
migrated makeStyles and withstyles to tss-react/mui because I cannot tell if the new functions from @mui/styles still accepted props... it migh've worked fine - we can always revisit this to drop a package if we don't need to use tss-react-mui.

5. [Component changes](https://mui.com/material-ui/migration/v5-component-changes/) All of this has not be explicitly migrated if untouched by code mod. we will pick up when we go through each components more closely, esp the breakpoint stuff**

6. [Migrating from JSS](https://mui.com/material-ui/migration/migrating-from-jss/)

**Notes**

Sx prop is used instead of makestyles in a lot of places
This is where I got confused if i should be using styled from @mui/material/styles or @mui/styles.
This is where I learned to ust tss-react for makestyles and withstyles - again this may not be required according to above note

## Update to 'Serializer' code

We have moved off the: [deprecated package](https://github.com/sanity-io/block-content-to-react) to the new [portable text to react.](https://www.sanity.io/docs/portable-text-to-react)

[Migration guide](https://www.sanity.io/docs/portable-text-to-react)