# Bus Alert Mobile Client

Bus Alert is a service that provides notifications to students and guardians upon the arrival of the bus to the student's
bus stop. This mobile client is intended to be used by the bus driver.

## Installation

#### For macOS

Homebrew or `brew` must be installed prior to completing the most immediate installation steps. You can find out more
[here](https://brew.sh/). If targeting iOS, install and update XCode, this can be done via
[Mac App Store](https://itunes.apple.com/us/app/xcode/id497799835?mt=12). XCode command line tools must be
[up-to-date](https://reactnative.dev/docs/next/environment-setup#command-line-tools). If targeting android, installation
of [Android Studio](https://developer.android.com/studio/index.html) is required.

```bash
# Install global dependencies
brew install node
brew install watchman

# Ruby is installed by default on OSX, if running a modern version of OSX omit the following 
brew install ruby

# Install OpenJDK
brew tap homebrew/cask-versions
brew install --cask zulu11

# Install the Android SDK, this can be completed while installing Android Studio
# The following items must be checked:
#  - Android SDK
#  - Android SDK Platform
#  - Android Virtual Device

# Configure `ANDROID_SDK_ROOT`
# Add the following to bash profile
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# Prepare a virtual device, you can read more about this process here:
# https://developer.android.com/studio/run/managing-avds.html
```

#### For Windows
```bash
# TODO
```

## Running the client locally

#### Targeting iOS

iOS cannot be targeted if running the client on Windows.  

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
cd /path/to/root/of/project

# start metro bundler
npx react-native start

# build and start your application
npx react-native run-android
```
