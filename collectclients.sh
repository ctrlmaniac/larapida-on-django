#!/usr/bin/bash

cd clients

for client in *; do
    # Delete templates dir
    if [ -d ../webapp/$client/templates/$client ]; then
        rm -rf ../webapp/$client/templates/$client
    fi

    # delete static directory
    if [ -d ../webapp/$client/static/$client ]; then
        rm -rf ../webapp/$client/static/$client
    fi
    
    # Create directory
    mkdir -p ../webapp/$client/templates/$client
    mkdir -p ../webapp/$client/static/$client

    # Copy index.html
    cp -r $client/build/index.html ../webapp/$client/templates/$client/index.html

    # Copy static files
    cp -r $client/build/static/ ../webapp/$client/static/$client/
done