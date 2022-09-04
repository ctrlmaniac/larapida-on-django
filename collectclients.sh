#!/bin/sh

cd clients

for client in *; do
    # Delete old directories
    if [ -d ../webapp/$client/templates/$client ]; then
        rm -rf ../webapp/$client/templates/$client
    fi

    if [ -d ../webapp/$client/static/$client ]; then
        rm -rf ../webapp/$client/static/$client
    fi

    # Create directories
    mkdir -p ../webapp/$client/templates/$client
    mkdir -p ../webapp/$client/static/$client

    # Copy files
    cp -r $client/build/index.html ../webapp/$client/templates/$client/index.html
    cp -r $client/build/static/ ../webapp/$client/static/$client/
done
