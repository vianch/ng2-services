# [ng2-services](https://github.com/vianch/ng2-services)

Angular2 services examples for your projects made with [Webpack](https://webpack.github.io/) [Sass](http://sass-lang.com/) [TypeScript](http://www.typescriptlang.org/)  [Angular2](http://www.angular.io/) 

## Features

* Angular2 with typescript and webpack
* Webpack config file with all basic needs
* Component based file and folder structure
* A Sass library of commonly used mixins
* TSLINT json file 
* Included libraries:
    * [ts-loader](https://www.npmjs.com/package/ts-loader) 
    * [sass-loader](https://www.npmjs.com/package/sass-loader) 
    * [Angular2](https://angular.io/)

## Download

- Clone the repo: `git clone https://github.com/vianch/ng2-services.git`

## Getting started

Step 1. Install [NodeJS](http://nodejs.org/download/)

Step 2. Install if you need it [Webpack](https://webpack.github.io/)
```shell
$ npm install --g webpack
```

Step 3. Install [DefinitelyTyped/tsd](http://definitelytyped.org/tsd/) 
```shell
$ npm install tsd -g
```

Step 4. Install typings
```shell
$ cd path/to/project
$ tsd install
```

Step 5. Install the npm dependencies
```shell
cd path/to/project
npm install
```

## NPM tasks

There are two webpack tasks; `start` and `npm run webpack-dev`.

`start` is the default task which will compile all files with webpack plus minified
`webpack-dev` is the same but with watcher and no minified
`clean` remove files from dist/js folder