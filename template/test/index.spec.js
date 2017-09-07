import mocha from "mocha";
import chai from "chai";
import { fakePrivateVariable } from "../dist/lib";

var expect = chai.expect;

describe("lib module test", function () {
	// it("lib should be a module", function () {
	// 	expect(typeof lib).to.be.equal("object");
	// });
	it("getString should return a string converted", function () {
		//console.log(lib.myMethod);
		expect(fakePrivateVariable).to.be.equal("test");
	});
});

