#!/bin/bash

npm install
npm run build
npx typeorm migration:run
npm run start:dev
