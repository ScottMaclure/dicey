#!/bin/bash

# Set prod mode
export NODE_ENV="production"

# Deps updates done already during dev on local machine.
# npm prune
# npm install

# Update version - always patch. Hrm...
npm version patch -git-tag-version false

# TODO Inject npm version into the frontend

# Compile JS, in prod mode this won't watch, it will just build
npm run watch

# Upload to firebase hosting, requires npx firebase login
npx firebase deploy

# Update github, commit version update
git commit -am "Deploy"
git push

# Remove production mode.
unset NODE_ENV
