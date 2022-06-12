# Bus Alert Mobile Client

Bus Alert is a service that provides notifications to students and guardians upon the arrival of the bus to the student's
bus stop. This mobile client is intended to be used by the bus driver.

## Installation

#### For MacOS

Homebrew or `brew` must be installed prior to completing the most immediate installation steps. You can find out more
[here](https://brew.sh/). If targeting iOS, install and update XCode, this can be done via
[Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). XCode command line tools must be
[up-to-date](https://reactnative.dev/docs/next/environment-setup#command-line-tools). 

```bash
# Install global dependencies
brew install node
brew install watchman

# Ruby is installed by default on OSX, if running a modern version of OSX omit the following 
brew install ruby

# TODO Add global dependencies for Android
```

#### For Windows
```bash
# TODO
```

## Running the client locally

#### Targeting iOS
```bash
cd /path/to/root/of/project

# start metro bundler
npx react-native start

# build and start your application
npx react-native run-ios
```

The iOS simulator will start, your project will build, and eventually the application will open. Please be aware that
the first build will take several minutes.

#### Targeting Android
```bash
# TODO
```
