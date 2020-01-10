#!/bin/sh

# remove old release
rm -rf releases/tamworth
rm -rf releases/leicester

mkdir releases/tamworth
mkdir releases/leicester

# build
cd tamworth
rm -rf .cache
rm -rf public
yarn
yarn build
cd ..

cd leicester
rm -rf .cache
rm -rf public
yarn
yarn build
cd ..

# copy
cp -a tamworth/public/. releases/tamworth
cp -a leicester/public/. releases/leicester

