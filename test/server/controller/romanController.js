let chai = require('chai');
let sinon = require('sinon');
let sinonChai = require("sinon-chai");
let rewire = require('rewire');
chai.use(sinonChai);
let expect = chai.expect;
let mockery = require('mockery');

describe("File: romanController.js",()=>{

    beforeEach(()=>{
        romanController = rewire('../../../server/controller/romanController');
    });

    describe("Function : matheMaticalOperation",()=>{

        it("should return the result", function (done) {

            let romanService = {
                convertRomanToNumber:(payload)=>{
                    return new Promise(resolve,reject=>{
                        resolve(5);
                    })
                },
                convertNumberToRoman:(payload)=>{
                    return new Promise(resolve,reject=>{
                        resolve('X');
                    })
                },
                matheMaticalOperation:(firstNumber,secondNumber, operand)=>{
                    return new Promise(resolve,reject=>{
                        resolve(10);
                    })
                }

            };


            addressController.__set__('romanService', romanService);

            romanController.matheMaticalOperation({'firstRoman':'V','secondRoman':'V','operand':'+'},(data)=>{
                expect(data).to.equal('X');
                done();
            })
        });
        done();
    });
});

