#!/bin/sh

# Delete old files

rm -rf webapp/clients/static
rm -rf webapp/clients/templates

mkdir -p webapp/clients/static
mkdir -p webapp/clients/templates

cd clients

for client in *; do
    # Create directories
    mkdir ../webapp/clients/templates/$client
    mkdir ../webapp/clients/static/$client
    
    # Copy files
    cp -r $client/dist/index.html ../webapp/clients/templates/$client/index.html
    cp -r $client/dist/static/$client ../webapp/clients/static
done

