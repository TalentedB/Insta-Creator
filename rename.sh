#!/bin/bash

# Get the current directory
dir=$(pwd)

# Get a list of all files in the directory
files=(*.jpeg)

# Loop through each file and rename it with a random string
for file in "${files[@]}"; do
    new_name=$(cat /dev/urandom | tr -dc 'a-zA-Z0-9' | fold -w 10 | head -n 1).jpeg
    mv "$file" "$new_name"
done
