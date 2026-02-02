const { expect } = require("chai");
const calc = require("../calculator"); 
function showResult(testName, expected, actual) {
  const pass = expected === actual;
  console.log(`${testName} | Expected: ${expected} | Actual: ${actual} => ${pass ? "PASS" : "FAIL"}`);
}

describe("Calculator Test Cases", function () {

  it("add(5,2) should return 7 (PASS)", function () {
    const actual = calc.add(5, 2);
    const expected = 7;
    showResult("add(5,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("add(5,2) should return 8 (FAIL)", function () {
    const actual = calc.add(5, 2);
    const expected = 8;
    showResult("add(5,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("sub(5,2) should return 3 (PASS)", function () {
    const actual = calc.sub(5, 2);
    const expected = 3;
    showResult("sub(5,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("sub(5,2) should return 5 (FAIL)", function () {
    const actual = calc.sub(5, 2);
    const expected = 5;
    showResult("sub(5,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("mul(5,2) should return 10 (PASS)", function () {
    const actual = calc.mul(5, 2);
    const expected = 10;
    showResult("mul(5,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("mul(5,2) should return 12 (FAIL)", function () {
    const actual = calc.mul(5, 2);
    const expected = 12;
    showResult("mul(5,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("div(10,2) should return 5 (PASS)", function () {
    const actual = calc.div(10, 2);
    const expected = 5;
    showResult("div(10,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

  it("div(10,2) should return 2 (FAIL)", function () {
    const actual = calc.div(10, 2);
    const expected = 2;
    showResult("div(10,2)", expected, actual);
    expect(actual).to.equal(expected);
  });

});
