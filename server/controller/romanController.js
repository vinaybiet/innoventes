'use strict';

const romanService = require('../service/romanService');
const Boom = require('boom');

module.exports = {

    matheMaticalOperation: (request, reply)=>{

        let firstNumber;

        romanService.convertRomanToNumber(request.payload.firstRoman).then((firstNumeric)=>{
            firstNumber = firstNumeric;
            return romanService.convertRomanToNumber(request.payload.secondRoman);
        }).then((secondNumber)=> {
            return romanService.matheMaticalOperation(firstNumber,secondNumber,request.payload.operand);
        }).then(operationResult=>{

            if(operationResult <= 0){
                return Promise.reject(Boom.notAcceptable("Result is less than zero"));
            }

            return romanService.convertNumberToRoman(operationResult)
        }).then(res=>{
            return reply({
                result:res
            });
        }).catch((err)=> {
            return reply(err);
        });
    }
};
