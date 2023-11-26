/* eslint-disable linebreak-style */
const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('Inverter name', function() {
  it('should return an empty string when passed an empty string', function() {
    const inputName = "";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  }),

  it('should return a single name when passed a single name', function() {
    const inputName = "name";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  }),
  it('should return a single name when passed a single name with extra space ', function() {
    const inputName = "name ";
    const expectedOutput = "name";
    assert.equal(nameInverter(inputName), expectedOutput);
  }),
  it('should return the firstName and lastName when passed First and Last  name ', function() {
    const inputName = "fname lname";
    const expectedOutput = "lname fname";
    assert.equal(nameInverter(inputName), expectedOutput);
  }),
  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
  it('should return an empty string when passed a single honorific', function() {
    const inputName = "Dr.";
    const expectedOutput = "";
    assert.equal(nameInverter(inputName), expectedOutput);
  });
});