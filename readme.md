### Mocha + Chai testing

>


#### Build steps
1. `npm i mocha chai --save-dev`

2. add mocha scripts in package.json
```
"scripts": {
      "test": "mocha || true"
    },
```

3. mkdir test - *mocha looks for tests in default test folder*

4. touch testFile.js
  - Require Chai asserts: `const assert = require('chai').assert;`
  - Require app.js: `const app = require('../app');`

5. Write a Test
```
describe('testName', function() {
      it('test message', function(){
        assert.equal(testFunction(), 'return result')
      });
  });
```
5. Run test: `npm run test`

![alt text](https://github.com/DouggyC/Learning_mocha-chai/blob/master/mocha_chai.png)


### mocha usage
`npm run test -s` : disable test fail error messages.

`"test": "mocha || true"` : auto disable in package.json



#### mocha
http://www.mochajs.com/

#### chai assertion library
http://www.chaijs.com/api/assert/
