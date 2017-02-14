'use strict';

module.exports = {

    matheMaticalOperation : (firstNumber, secondNumber, operand)=>{

        return new Promise((resolve,reject)=>{
            let operation = {
                '+':(a,b)=>{
                    return a + b;
                },
                '-':(a,b)=>{
                    return a - b;
                },
                '*':(a,b)=>{
                    return a * b;
                },
                '/':(a,b)=>{
                    return Math.floor(a / b);
                }
            };

            let result = operation[operand](firstNumber,secondNumber);

            resolve(result);
        });
    },

    convertRomanToNumber:(romanNumber)=>{

        return new Promise((resolve,reject)=>{

            let	str = romanNumber.toUpperCase(),
                validator = /^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/,
                token = /[MDLV]|C[MD]?|X[CL]?|I[XV]?/g,
                key = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},
                num = 0, m;

            while (m = token.exec(str)){
                num += key[m[0]];
            }

            resolve(num);
        })
    },

    convertNumberToRoman:(numericNumber)=>{

        return new Promise((resolve,reject)=>{
            let result = '';
            let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
            let roman = ["M", "CM","D","CD","C", "XC", "L", "XL", "X","IX","V","IV","I"];
            for (let i = 0;i<=decimal.length;i++) {
                while (numericNumber%decimal[i] < numericNumber) {
                    result += roman[i];
                    numericNumber -= decimal[i];
                }
            }

            resolve(result);
        });
    }
};