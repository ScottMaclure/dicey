# Dicey!

## Introduction

Dicey is a web-based die rolling application for use in tabletop roleplaying games.

The primary design focus is to have dicey running on your mobile phone, and you use it as a replacement for physical dice.

Main site:
https://dicey.maclure.info/

## Goals

* Responsive dice-rolling app, with a strong bias towards small mobile devices (Progressive Web Application)
* Fits well with **my** group's Use Cases
* Avoid as much styling as possible (use a framework)
* Use ReactJS for composing the application (combine with above CSS requirement?)
* Use some new tools for learnin' new things
* Zero-cost hosting

## Technical Design

### Hosting Infrastructure

* Uses Firebase to a) host the webapp and b) act as a public data-store (10GB for free).
* Custom domains are supported by Firebase, hence dicey.maclure.info (DNS managed elsewhere).
* Running on the Firebase free tier, so the project has caps on various types of usage (storage & downloads for both database and hosting).

### Event Handling

Between the React app and Firebase, Dicey uses the DOM's "CustomEvent" API via `document.dispatchEvent()` and `document.addEventListener()` methods.

* index.html defines `window.diceyData`, as the initial/config data for the application.
* dicey.js defines `window.diceyApp` as the top level React component in the application, which is therefore available to firebase.js. This contains the running state after init.
* firebase.js uses `document.addEventListener` to listen for events from the dicey app to update the database, and it also listens to Firebase via its `on()` API, to update the client application with new data.

### What are these cert files in your repo?!

Relax, that's for local devtest (for service-workers to work with zero-config). They're not used for production deployment.

## Local development

```
# install and kick off https server
npm start

# watch js and re-bundle on changes
npm run watch
```

## Production Build and Deploy

```
# Login to Firebase CLI (once only)
npx firebase login

# Deploy from git bash (needs ssh-agent running for github)
./scripts/deploy.sh
```

## What's next?

For the agile board, see here:
https://github.com/ScottMaclure/dicey/projects/1
