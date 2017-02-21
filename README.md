# Sprinkle
### Find your favorite menu items nearby

## Developing Sprinkle
0. Open your terminal and navigate to your Sprinkle directory
`cd ~/dev/sprinkle`
1. Open the project in Atom
`atom .`
2. Start development server
`yarn start`
3. Open Sprinkle in Xcode
`open ios/sprinkle.xcodeproj`
4. Pick what device you want to install it on at the top left of Xcode
5. Press play
6. Wait for the app to launch on your device
7. (Optional) Press the stop button in Xcode, quit Xcode, and relaunch the app on your device or simulator

You only need to follow steps 3-7 the first time you run Sprinkle or if the native dependencies are changed

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
0. Open Atom
`atom`
1. Hit cmd+shift+p
2. Search for `Install Packages and Themes`
3. Install `language-babel` and `linter-eslint`
