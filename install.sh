#!/bin/bash

echo "⏳ Installing dependencies..."

# Installs Homebrew
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

# Installs Caskroom
brew tap caskroom/cask

# Installs Atom
brew cask install atom

# Installs Git + Node + Yarn
brew install git node yarn

# Installs React Native
brew install watchman && npm install -g react-native-cli

# Clones Sprinkle to ~/madbuild/sprinkle and installs Sprinkle dependencies
git clone https://github.com/txcsmad/sprinkle.git ~/madbuild/sprinkle && cd $_ && yarn install && react-native link

echo "💯 Done installing dependencies!"
