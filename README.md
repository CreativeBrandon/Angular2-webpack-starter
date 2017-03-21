# Angular 2 + Webpack Starter Kit (PWA)

This repository contains a starter kit for an application running Angular 2 with webpack. `(4.0.0.rc-5)`

## Prerequisites
* `Node.js and npm` - [Installing Node.js](https://docs.npmjs.com/getting-started/installing-node)

**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
By running `node -v` and `npm -v` in a terminal/console window. Older versions produce errors.

## Install npm packages
```bash
npm install
npm start
```
## Development
`npm start`

## Build & Preview
Builds app to `dist` folder based on [webpack.prod.js](config/webpack.prod.js) & [.prod.env](environment/.prod.env).
```bash
npm run build
npm run preview
```
> `service-worker.js` will be created on build in the dist folder.

## Progressive Web App(PWA)
configure [service worker precache](config/sw-precache-config.js) & [manifest](src/manifest.webapp) file.

## Environments
This starter requires an environment file for both development and production. Add your vars to `.env` and `.prod.env` files in the environment folder.

## Favicon Generator
[Favicon Generator](https://realfavicongenerator.net/)
