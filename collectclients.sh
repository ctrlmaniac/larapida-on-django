#!/usr/bin/bash

cd clients

for client in *; do
    # Delete old files
    if [ -d ../webapp/$client/templates/$client ]; then
        rm -rf ../webapp/$client/templates/$client
    fi

    # Check if static directory exists
    if [ ! -d ../webapp/$client/static/$client ]; then
        ../webapp/$client/static/$client
    fi

    # Create directories
    mkdir -p ../webapp/$client/templates/$client
    mkdir -p ../webapp/$client/static/$client

    # Copy index.html
    cp -r $client/build/index.html ../webapp/$client/templates/$client/index.html

    # Copy static files
    cp -r $client/build/static/ ../webapp/$client/static/$client/
done