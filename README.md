# Optimizing Applications with Node.js

This repo will serve as a point of reference for further learning related to Node - a runtime environment for executing JS Code

## Node was created by Ryan Dahl and is ...

- an open source, cross-platform run-time enviornment for executing JavaScript code OUTSIDE of the browser
- a C++ program with a v8 engine
- asynchronous and non-blocking by default
- single-threaded
- highly-scalable
- used to build API's
- great for prototyping and agile development
- not a browser environment with objects such as window or document object

## Module System

Every file in a node application is considered a **module** and only availble within the file in which it's a defined unless exported using the export property on the module object. Each Module is an JSON Object.

```
console.log(module)

// console.log of the module object will return -->

Module {
  id: '.',
  path: '/Users/exampleuser/Documents/exampleuser',
  exports: {},
  parent: null,
  filename: '/Users/exampleuser/Documents/nameOfFiled/app.js',
  loaded: false,
  children: [],
  paths: [
    '/Users/exampleuser/Documents/exampleuser/node_modules',
    '/Users/exampleuser/Documents/node_modules',
    '/Users/exampleuser/node_modules',
    '/Users/node_modules',
    '/node_modules'
  ]
}
```

## Module Function Wrapper System

Each module is wrapped in a function

## Native Node Modules

- path

```
const path = require("path");

let pathObj = path.parse(__filename);

/* pathObj returns an object with a lot of useful information within the key:value pairs
 such as the root, directory path, the base, the extention of the file and the name of the file */

  {
  root: '/',
  dir: '/Users/userInfo/NameOfAFolder/NameOfAnotherFolder',
  base: 'app.js',
  ext: '.js',
  name: 'app'
  }

```

- OS
- path
- fs --> working with the file system

  ```const fs = require('fs')
    fs.readdir('./', (err, files) => {
      if(err) console.log('Error', err)
      else console.log('Files Array', files)
    })

  // returns an ARRAY of strings with names of all files within this directory
  // ['.git', '.app.js', 'logger.js' ]

  ```

- events - signal that something has happened in our application
  - Event Class - EventEmitter --> The Event class is a container for different methods and properties
- http
