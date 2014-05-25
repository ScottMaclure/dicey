# Dicey!

## Goals

* Responsive dice-rolling app.
* Fits well with our Use Cases.
* Avoid styling with Twitter bootstrap.
* Use ReactJS for composing the application.

## Building

To build react:

```
node ./node_modules/react-tools/bin/jsx javascripts/jsx javascripts/build
```

To build a browserified JS:

```
browserify javascripts/dicey.js > public/bundle.js
```