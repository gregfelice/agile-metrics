
## Agile Metrics App

A simple app to get some graphs up and running around measurements we collect from a json file.

### Front end
charts: http://valor-software.com/ng2-charts/ (buggy)
incorporating js libraries: https://www.thepolyglotdeveloper.com/2016/01/include-external-javascript-libraries-in-an-angular-2-typescript-project/

### Back end
node, mongodb, mongoose, restify
see https://github.com/Microsoft/TypeScriptSamples/tree/master/imageboard
try to avoid express for first round.

### Other reference
* [Typescript and Webpack](http://www.jbrantly.com/typescript-and-webpack/)

## angular2-seed

A simple starter project demonstrating the basic concepts of Angular 2.

Work in progress! This branch uses Webpack for Development. There is also a SystemJS branch available.

### Usage
- Clone or fork this repository
- Make sure you have [node.js](https://nodejs.org/) installed
- run `npm install -g webpack webpack-dev-server typings typescript` to install global dependencies
- run `npm install` to install dependencies
- run `npm start` to fire up dev server
- open browser to [`http://localhost:3000`](http://localhost:3000)

### Known Issues
- angular2-polyfills.js is currently being handled manually.
- bundle size is large, due to inline sourcemaps from angular2 npm source.
