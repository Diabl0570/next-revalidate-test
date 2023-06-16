#!/bin/bash

# Copy the npmrc file to the current user home dir
SCRIPTPATH="$( cd -- "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
projectRoot=$SCRIPTPATH/..

cp $SCRIPTPATH/.zshrc ~/ && cp $SCRIPTPATH/.p10k.zsh ~/

# install all npm deps
pnpm install