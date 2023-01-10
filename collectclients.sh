#!/bin/sh

cd clients

for client in *; do

    # Delete old directories
    if [ -d ../webapp/$client/templates/$client ]; then
        rm -rf ../webapp/$client/templates/$client
    fi

    if [ -d ../webapp/$client/static ]; then
        rm -rf ../webapp/$client/static
    fi

    # Create directories
    mkdir -p ../webapp/$client/templates/$client

    # Copy files
    cp -r $client/dist/index.html ../webapp/$client/templates/$client/index.html
    cp -r $client/dist/static ../webapp/$client

done

