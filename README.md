# Syntax Reference

:construction: This project is a work in progress in early stages :construction:

## Introduction

At some point, we all have our notes, code snippets, Github Gists, and others. This Syntax Reference came to be from a struggle to have up-to-date syntax reference notes, from programming languages to terminal commands, queries, and so on.

Programming languages are tools, each with its purpose and objective and we, developers, usually need to maintain or create projects in specific languages, which solve specific problems.

It is easy to get the syntax mixed or not remember something specific. Some languages have a really specific syntax for something that is trivial in other languages, and that makes it difficult to remember.

Although other websites address similar topics, I was not happy with its content organization and outdated content.

Starting with Programming Languages, topics are organized into "concepts", and is focused on simplicity and code examples. This is not a language tutorial. It is expected from the reader experience in at least one language.

There are a LOT of room for Improvement.

This project is open-source, from developer to developer.

If you wanna help, see [Contributing](CONTRIBUTING.md).

## Current Avaliable Syntax

- Programming Languages


## Requirements

This website is built using [Docusaurus](https://docusaurus.io/).

- [Node.js](https://nodejs.org/en) version 18.0 or above (which can be checked by running `node -v`).

## Installing Project Dependencies

```bash
cd project_folder
npm install
```

## Local Development

```
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
By default, a browser window will open at http://localhost:3000/

## Build

```
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Test your production build locally:

```bash
npm run serve
```

The `build` folder is now served at [http://localhost:3000/](http://localhost:3000/)

## Updating your Docusaurus version

There are many ways to update your Docusaurus version. One guaranteed way is to manually change the version number in `package.json` to the desired version. Note that all `@docusaurus/`-namespaced packages should be using the same version.

```
{
  "dependencies": {
    "@docusaurus/core": "3.1.0",
    "@docusaurus/preset-classic": "3.1.0",
    // ...
  }
}
```

Then, in the directory containing package.json, run your package manager's install command:

```bash
npm install
```

To check that the update occurred successfully, run:

```
npx docusaurus --version
```

You should see the correct version as output.
