#!/bin/bash

# Set prod mode
export NODE_ENV="production"

# Compile JS, in prod mode this won't watch, it will just build
npm run watch

# Upload to firebase hosting, requires npx firebase login
npx firebase deploy

# Remove production mode.
unset NODE_ENV
