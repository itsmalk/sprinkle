# Sprinkle

## Developing Sprinkle
1. Open your terminal and navigate to your Sprinkle directory
    `cd ~/dev/sprinkle`
2. Open the project in Atom
    `atom .`
3. Start development server
    `yarn start`
4. Open Sprinkle in Xcode
    `open ios/sprinkle.xcodeproj`
5. Pick what device you want to install it on at the top left of Xcode
6. Press play
7. Wait for the app to launch on your device
8. (Optional) Press the stop button in Xcode, quit Xcode, and relaunch the app on your device or simulator

You only need to follow steps 4-8 the first time you run Sprinkle or if the native dependencies are changed

## Setup iOS Development Environment for MacOS
1. [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) from the Mac App Store
2. [Atom](https://atom.io)
3. Open your terminal and run the following commands
4. [Homebrew](https://brew.sh)
    `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
5. [Git](https://www.git-scm.com)
    `brew install git`
6. [Node JS](https://nodejs.org/en/)
    `brew install node`
7. [Yarn](https://yarnpkg.com/en/)
    `brew install yarn`
8. [React Native](https://facebook.github.io/react-native/)
    `brew install watchman && npm install -g react-native-cli`
9. Clone this repository and install dependencies
    `git clone git@github.com:txcsmad/sprinkle.git ~/dev/sprinkle && cd $_ && yarn install && react-native link`

## Setup Atom for React Native Development
1. Open Atom
    `atom`
2. Hit cmd+shift+p
3. Search for `Install Packages and Themes`
4. Install `language-babel` and `linter-eslint`
