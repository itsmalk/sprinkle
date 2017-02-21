# Sprinkle

## Setup iOS Development Environment for MacOS
1\. [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the Mac App Store

2\. [Atom](https://atom.io)

Open your terminal and run the following commands

3\. [Homebrew](https://brew.sh)
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
4\. [Git](https://www.git-scm.com)
```
brew install git
```
5\. [Node JS](https://nodejs.org/en/)
```
brew install node
```
6\. [Yarn](https://yarnpkg.com/en/)
```
brew install yarn
```
7\. [React Native](https://facebook.github.io/react-native/)
```
brew install watchman && npm install -g react-native-cli
```
8\. Clone this repository and install dependencies
```
git clone git@github.com:txcsmad/sprinkle.git ~/dev/sprinkle && cd $_ && yarn install && react-native link
```

## Setup Atom for React Native Development
1\. Open Atom
```
atom
```
2\. Hit cmd+shift+p

3\. Search for `Install Packages and Themes`

4\. Install `language-babel` and `linter-eslint`

## Developing Sprinkle
1\. Open your terminal and navigate to your Sprinkle directory
```
cd ~/dev/sprinkle
```
2\. Open the project in Atom
```
atom .
```
3\. Start development server
```
yarn start
```
4\. Open Sprinkle in Xcode
```
open ios/sprinkle.xcodeproj
```
5\. Pick what device you want to install it on at the top left of Xcode

6\. Press play and wait for the app to launch on your device

7\. Press the stop button in Xcode, quit Xcode, and relaunch the app on your device or simulator `Optional`

You only need to follow steps 4-8 the first time you run Sprinkle or if the native dependencies are changed
