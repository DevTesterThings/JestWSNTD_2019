# Jest-Workshop
An interactive workshop about the many uses of Jest

Preperation:
```bash
$ export NODE_TLS_REJECT_UNAUTHORIZED=0 && npm ci
```

Snapshot API:
```bash
$ npm run test:api -- --watchAll
```

Snapshot APP:
```bash
$ npm run test:api -- --watchAll
```

Cleanup:
```bash
$ unset NODE_TLS_REJECT_UNAUTHORIZED
```

Coverage:
```bash
$ npm run test -- --coverage  
```





Clone the repo:
---------------
git clone https://github.com/Blanche2018/Jest-Workshop.git

Move to Project:
-----------------
cd Jest-Workshop

Install the jest package:
-------------------------
npm install --save-dev jest
npm i jest

To run a test/s:
---------------

Jest will look for test files with any of the following naming conventions:
Files with .js suffix in __tests__ folders.
Files with .test.js suffix.
Files with .spec.js suffix.

npm start - recompiles the code
npm test - runs the tests


Cheatsheet
----------
https://devhints.io/jest