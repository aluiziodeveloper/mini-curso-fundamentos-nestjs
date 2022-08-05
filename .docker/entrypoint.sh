#!/bin/bash

npm install
npm run build
<<<<<<< HEAD
npx typeorm migration:run
=======
npx typeorm migration:run -d dist/database.providers.js
>>>>>>> b9e9cb9
npm run start:dev
