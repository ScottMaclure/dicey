# Dicey!

## Goals

* Responsive dice-rolling app.
* Fits well with our Use Cases.
* Avoid all styling by using Twitter bootstrap.
* Use ReactJS for composing the application.

For the agile board, see here:

https://waffle.io/ScottMaclure/dicey

## Building

To build react:

```
node ./node_modules/react-tools/bin/jsx javascripts/jsx javascripts/build
```

To build a browserified JS:

```
browserify javascripts/dicey.js > public/bundle.js
```

## gh-pages

Guide:

https://help.github.com/articles/creating-project-pages-manually

```
cp -pr public/* ../dicey-gh-pages/
```