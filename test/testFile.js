// Chai assert module
const assert = require('chai').assert;

// App functions`
const sayHello = require('../app').sayHello; //__2
const addNumbers = require('../app').addNumbers; //__2

// File
const app = require('../app'); //__1

// Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);



//__1
//
// describe('Tfunc', function() {
//   it('test function', function() {
//     assert.equal(app(), 'hello');
//   });
// });





//__2
//
describe('TestCaseHeading', function() {

  describe('testName: sayHello()', function(){
    it('sayHello should return hello', function() {
      // let result = app.sayHello();
      assert.equal(sayHelloResult, 'hello');
    });

    it('sayHello should return type string', function(){
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });

  describe('addNumbers()', function() {
    it('addNumbers should be above 5', function() {
      // let result = app.addNumbers(5,5);
      assert.isAbove(addNumbersResult, 5);
    });

    it('addNumbers should return type number', function() {
      // let result = app.addNumbers(5,5);
      assert.typeOf(addNumbersResult, 'number');
    });
  });

});
