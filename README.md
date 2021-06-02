# Deep Dive Into Node

# This repo will serve as a point of reference for further learning related to Node - a runtime environment for executing JS Code

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

- OS
- fs
- events
- http

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
