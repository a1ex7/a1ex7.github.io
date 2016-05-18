var pow = require('../js/pow.js');

console.log(pow);

describe("Pow", function() {

  it("with positive exponent", function() {
    // prepare
    var result;
    // act
    result = pow(2, 10);
    // assert
    expect(result).toBe(Math.pow(2, 10));
  });

  it("with negative exponent", function() {
    // prepare
    var result;
    // act
    result = pow(2, -10);
    // assert
    expect(result).toBe(Math.pow(2, -10));
  });

  it("with null exponent", function() {
    // prepare
    var result;
    // act
    result = pow(2, 0);
    // assert
    expect(result).toBe(1);
  });

  // not realized in our pow function, becaurse test failure
  it("with fractional exponent (not relized, error must be show)", function() {
    // prepare
    var result;
    // act
    result = pow(2, 1.3);
    // assert
    expect(result).toBe(Math.pow(2, 1.3));
  });

});