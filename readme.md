1. npm i mocha chai --save-dev
  - 1a. package.json > add mocha scripts > "test": "mocha"

2. mkdir test
  - mocha looks for tests in default test folder

3. touch testFile.js

  4. - Require Chai asserts: const assert = require('chai').assert;

  5. - Require app.js: const app = require('../app');

  6. Create a test
    - describe('testName', function() {
          it('test message', function(){
            assert.equal(testFunction(), 'return result')
          })
      })

7. - Run test: npm run test

![alt text](https://github.com/DouggyC/Learning_mocha-chai/blob/master/mocha_chai.png)


##### mocha usage
npm run test -s : disable test fail error messages.

"test": "mocha || true" : auto disable in package.json



##### mocha
http://www.mochajs.com/


##### chai assertion library
http://www.chaijs.com/api/assert/
