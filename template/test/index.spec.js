var mocha = require('mocha');
var chai = require('chai');
var lib = require('../src/index');

var expect = chai.expect;

describe('lib function test', function() {
	it('lib should be a function', function() {
		expect(typeof lib).to.be.equal('function');
	});
	it('should return a certain string', function() {
		expect(lib()).to.be.equal('Hello npm package');
	});
});

