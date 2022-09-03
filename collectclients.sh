#!/usr/bin/bash

cd clients

for client in *; do
    # Check if directory exists
    if [ ! -d ../webapp/$client/templates/$client ]; then
        mkdir -p ../webapp/$client/templates/$client
    fi

    # Copy index.html
    cp -r $client/build/index.html ../webapp/$client/templates/$client/index.html

    # Check if static directory exists
    if [ ! -d ../webapp/$client/static/$client ]; then
        mkdir -p ../webapp/$client/static/$client
    fi

    # Copy static files
    cp -r $client/build/static/ ../webapp/$client/static/$client/
done