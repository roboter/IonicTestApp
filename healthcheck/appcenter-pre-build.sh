#!/usr/bin/env bash
#

npm run build
npx cap copy android
npx cap sync android