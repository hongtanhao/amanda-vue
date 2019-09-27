#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:hongtanhao/amanda-vue-docs.git master:dev
or
git remote add origin https://github.com/hongtanhao/amanda-vue-docs.git
git push -u origin master

cd -