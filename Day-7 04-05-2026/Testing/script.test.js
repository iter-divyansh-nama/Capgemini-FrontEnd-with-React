// file is nothing but the test suite for your testing
// we use the test() or it() for defining the test case
//Matchers tobe() toEqual()

const { sum } = require("./script.js");

test("testing the sum function", () => {
  expect(sum(10,10)).toBe(20) ;
});


