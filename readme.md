
# Github App (React Native Test Project)

Github app is a react native test project app that work on authentication with one of the modern authentication service [Auth0](https://auth0.com). And we can see a list of commits inside a spefic repository on [Github](https://github.com).

![App Demo](https://media.giphy.com/media/6hu8E4c8GcSK7fjm3F/giphy.gif)

## Contents

- [Requirements](#-requirements)
- [Documentation](#-documentation)
- [How to Install and run](#-how-to-install-and-run)

## Requirements

- Display a login screen where the user can authenticate with Github (any method is okay).
- After successful login, the app should display a screen with a single text input field, where user can enter the repository name (with default being `facebook/react-native`) and a submit button.
- The last screen (after submitting repository name) should display a scrollable list of commits to this repository similar (data-wise) to [`https://github.com/facebook/react-native/commits/main`](https://github.com/facebook/react-native/commits/main), including at least:
    - Committer's avatar
    - Committer's username
    - Commit message and information about when the commit has been done
- User should be able to go back and browse another repository.
- Display a Logout button on every page where the user is authenticated. The user should not be able to go back to the auth screen with anything else than this button.

## Documentation

- Authentication process is using one of the modern authentication service [Auth0](https://auth0.com).
- For the state management react redux is configured.
- User can enter any public repo link to see a list of commits in that specific repo.
- Commit list has a pagination feature for lazy loading of commits history. Commits will be loaded in a chunk of 10 commit per page and page will be refreshed over list end until there's no commit left.
- Each commit entry will contain following data
    - Commentor profile avatar
    - Commentor name
    - Commit message
    - Commit Date
- User can go back to home screen and search for any other public repository.
- User can logout of the application using logout button over the top of each screen.

## How to install dependencies and run

- Clone the reposity [Github App React Native](https://github.com/badershafiq/githubAppReactNative).
- Run ```yarn install```

Setup the development environment first.

- [React Native CLI environment setup](https://reactnative.dev/docs/environment-setup)

## Setup Guide for Android

Once the android development environment setup is completed

- Run ```yarn start```
- Run ```yarn android```

Or you can install and setup android studio. Then Follow these steps:

- Open project>android folder in android studio
- Let android studio build all the gradle files and compile the project for android environment
- Connect your android device or select an android emulator and start the project
- Android studio will compile, build, and install the app

## Setup Guide for iOS

[You need a MAC to run this application on iOS](ttps://reactnative.dev/docs/environment-setup)

Once the iOS development environment setup is completed

- Run ```yarn start```
- Run ```yarn ios```

Or you can install and setup XCode on MAC. Then Follow these steps:

- Open project>ios>github_app.xcworkspace in XCode
- Connect your iOS device or select an iOS emulator and start the project
- XCode will compile, build, and install the app
