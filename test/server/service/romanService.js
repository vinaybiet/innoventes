let chai = require('chai');
let sinon = require('sinon');
let sinonChai = require("sinon-chai");
let rewire = require('rewire');
chai.use(sinonChai);
let expect = chai.expect;
let mockery = require('mockery');

describe("File: romanService.js",()=>{

    beforeEach(()=>{
        romanService = rewire('../../../server/service/romanService');
    });

    describe("Function : matheMaticalOperation",()=>{

        it("should return the result of operand", function (done) {
            let p = romanService.matheMaticalOperation(1,2,'+');
            expect(p).to.equal(3);
        });
        done();
    });

    describe("Function : convertRomanToNumber",()=>{
        it("should return the converted roman to number", function (done) {
            let p = romanService.convertRomanToNumber('V');
            expect(p).to.equal(5);
        });
        done();
    });

    describe("Function : convertNumberToRoman",()=>{
        it("should return the converted number to roman", function (done) {
            let p = romanService.convertNumberToRoman(5);
            expect(p).to.equal('V');
        });
        done();
    });
});

