#!/bin/bash

npm install
npm run build
npx typeorm migration:run -d dist/database.providers.js
npm run start:dev
