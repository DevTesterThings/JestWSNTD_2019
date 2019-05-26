# Jest-Workshop
An interactive workshop about the many uses of Jest

Clone the repo:
---------------
git clone https://github.com/DevTesterThings/JestWS_CodeX.git

Move to Project:
-----------------
cd Jest-Workshop

Install the jest package:
-------------------------
```bash
$ export NODE_TLS_REJECT_UNAUTHORIZED=0 && npm ci
```

To run a test/s:
```bash
$ npm run test
$ npm run test -- --watchAll
$ npm run test --coverage
```

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