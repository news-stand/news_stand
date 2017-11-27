# Travis CI #

News Stand uses the Travis CI tool for continuous integration--both testing and deployment to staging.

### Setup ###

1. Go to the [Travis CI](https://travis-ci.org/) website to sign up for an account. You should be able to log in via Github.
1. Go to your profile at https://travis-ci.org/profile/<username> to enable Travis to access your repo.
1. Click into a repo, then in the top right corner, click the 'More Options' button.
1. Select Settings
1. This is where you can add environment variables and set where/when you want Travis to run builds. Limiting concurrent jobs to 1-2 is recommended for performance. Make sure secure environment variables have the 'display value in build log' option toggled *OFF*.

### Config File ###

To you Travis, you need to set up your .travis.yml file. 

#### Testing Config ####

At minimum, for Travis to run both client and server tests, you must have the following enabled:

```yml
language: node_js
node_js:
  - 8.4.0
addons:
  chrome: stable
before_install:
  - export CHROME_BIN=chromium-browser
  - export DISPLAY=:99.0
  - sh -e /etc/init.d/xvfb start
before_script:
  - npm run build:prod
jobs:
  include:
    - stage: server tests
      script: node ./build/server/index.js & npm run test
    - stage: client tests
      script: karma start --single-run
```

Line 1: Tells Travis which language to use.

Lines 2-3: Tells Travis which version of node to use.

Lines 4-5: Tells Travis that we'll need Chrome installed as an addon (Karma for our client tests requires Chrome, but Travis uses Mozilla in standard builds).

Lines 6-9: Tells Travis to install Chrome before it installs all our npm modules.

Lines 10-11: Tells Travis to run our production build npm script before running the testing scripts.

Lines 12-13: Sets up multiple jobs in a single build (one for client tests and one for server tests).

Lines 14-15: Sets up our server tests build and runs a custom script once the build script is complete. 

```sh
node ./build/server/index.js & npm run test
```

Tells the shell to start up our server file using node and run the npm testing script concurrently.

Lines 16-17: Sets up our client tests build and runs the script to start Karma. Note that you *MUST* call --single-run as Karma is default set to watch for changes and won't complete otherwise.

[Official docs](https://docs.travis-ci.com/user/customizing-the-build/) for customizing your build.

#### Deployment Config ####

[Official docs](https://docs.travis-ci.com/user/deployment/heroku/) for deploying to heroku.

To enable continuous deployment to the staging app, add the following after the 'jobs' section in the .yml file:

```yml
deploy:
  provider: heroku
  api_key:
    secure: BsKFSXizsS9hqsZMnM5XtyBIBlzOKBt+hI9+J5Sy/Ejmoh2vqmP
  app: 
    master: news-stand-hr-staging
  on:
    repo: news-stand/news_stand
```

Line 1: Sets Travis up for auto deployment.

Line 2: Tells Travis which provider to use.

Line 3: Gives Travis your heroku API key to access your heroku account.

Line 4: Tells Travis that the API key is a secure hash (*NEVER* put an unsecured API key in this file, as it gets checked into Github).

Line 5: The secure API key hash. Note that in reality this will be many lines long.

Line 6: Sets up Travis to deploy to a specific app.

Line 7: Tells Travis which heroku app to deploy to for builds on which branch. Here it's news-stand-hr-staging getting deployed automatically after passing builds from the master branch. You should only auto deploy to your staging app, never to production.

Lines 8-9: Tells Travis which Github repo to use.

### Testing ###

Travis will run your two testing builds separately and let you know if both pass. 

### Deployment ###

Setting up auto deployment with Travis requires putting your heroku API key in your config file, so you should go through the Travis command line client to set it up securely.

A good [tutorial](https://kendaleiv.com/build-and-deploy-nodejs-with-travis-ci-and-heroku/) with step by step instructions.
