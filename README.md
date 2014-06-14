# Dicey!

## Introduction

Dicey is a web-based die rolling application for use in tabletop roleplaying games.

The primary design focus is to have dicey running on your mobile phone, and you use it as a replacement for physical dice.

Website: 

http://scottmaclure.github.io/dicey/

## Goals

* Responsive dice-rolling app, with a strong bias towards small mobile devices.
* Fits well with my group's Use Cases.
* Avoid all styling by using Twitter bootstrap's base CSS.
* Use ReactJS for composing the application.
* Use some new tools for learnin' new things.

For the agile board, see here:

https://waffle.io/ScottMaclure/dicey

## Building with Gulp

```
npm install
sudo npm install -g gulp
gulp
```

## Deployment with gh-pages

Guide:

https://help.github.com/articles/creating-project-pages-manually

```
cp -pr public/* ../dicey-gh-pages/
```