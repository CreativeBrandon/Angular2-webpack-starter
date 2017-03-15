# Angular 2 + Webpack Starter Kit

This repository contains a starter kit for an application running Angular 2 with webpack. (4.0.0.rc-2)

## Prerequisites
* `Node.js and npm` - [Installing Node.js](https://docs.npmjs.com/getting-started/installing-node)

**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors.

## Install npm packages
```bash
npm install
npm start
```
> If the `typings` folder doesn't show up after `npm install` please install them manually with:
> `npm run postinstall`
> Install Quick Start  https://github.com/typings/typings

## Favicon Generator
[Favicon Generator](https://realfavicongenerator.net/)

## Create a new project based on the Starter Kit

Clone this repo into new project folder (e.g., `my-proj`).
```bash
git clone https://github.com/CreativeBrandon/Angular2-webpack-starter  my-proj
cd my-proj
```

Discard everything "git-like" by deleting the `.git` folder.
```bash
rm -rf .git  // non-Windows
rd .git /S/Q // windows
```

### Create a new git repo

Initialize this project as a *local git repo* and make the first commit:
```bash
git init
git add .
git commit -m "Initial commit"
```

Create a *remote repository* for this project on the service of your choice.

Grab its address (e.g. *`https://github.com/<my-org>/my-proj.git`*) and push the *local repo* to the *remote*.
```bash
git remote add origin <repo-address>
git push -u origin master
```
