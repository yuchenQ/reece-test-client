# Reece Code Test -- Client

## Important

- This is only the client of the whole application.
- If you want to experience/ check the whole functionalities of it, please pull the [server](https://github.com/yuchenQ/reece-test-server)

Or run ```git clone https://github.com/yuchenQ/reece-test-server.git <target_folder>``` to make a quick pull

## Overview

React, Styled-components, Ant Design, Jest Unit Test (@testing-library/react), axios, Eslint, Prettier.

## Browser Compatibility

- Target: > 0.25%, not dead
- Tested: Chrome, Safari

## Issues

- Some Component is not 100% covered, because of avoiding duplicated test
- Hard to use (@testing-library/react) when testing Ant Design component, they officially recommend [enzyme](https://enzymejs.github.io/enzyme/)

## Getting Started

### 1. Prerequisites

- Git
- Node(& npm): any 12.x version starting with 12.14.1 or greater

### 2. Installation

1. `npm i` to install the website's npm dependencies

### 3. Running locally

1. `npm run start` to start the hot-reloading development server
2. open `http://localhost:8080` to open the site in your favorite browser

- Tool: Webpack, Webpack Dev Server

## Running tests

1. `npm run test` to run unit test

### 1. Linting

1. `npm run lint` to check codebase via ESLint
2. check syntax, find problems, and enforce code style

### 2. Unit Test

`npm run test` to run unit test (`./src/**/*.test.jsx`)

- Tool: Jest, @testing-library/react

## Deployment

### 1. Build

`npm run build` to build website artifacts

- Tool: Webpack, Babel
- Artifacts: `./build`

### 2. Eject

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

`npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
