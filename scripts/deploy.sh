#!/bin/bash

# Set prod mode
echo "Setting production mode"
export NODE_ENV="production"

# Deps updates done already during dev on local machine.
# npm prune
# npm install

# Update version - always patch. Hrm...
npm version patch -git-tag-version false

# TODO Inject npm version into the frontend code
APP_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g' \
  | xargs)

echo "Building APP_VERSION=${APP_VERSION}"

sed -i "s/APP_VERSION/$APP_VERSION/g" ./public/index.html

# Compile JS, in prod mode this won't watch, it will just build
npm run watch

# Upload to firebase hosting, requires npx firebase login
npx firebase deploy

# Revert back to templated version.
echo "Reverting APP_VERSION string"
sed -i "s/$APP_VERSION/APP_VERSION/g" ./public/index.html

# Update github, commit version update
echo "Committing deploy-related changes and pushing to remote"
git commit -am "Deploy"
git push

echo "Cleanup"
# Remove production mode.
unset NODE_ENV

echo "Done"
