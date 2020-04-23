#!/usr/bin/env bash
#

cd healthcheck
npm run build
npx cap copy android
npx cap sync android