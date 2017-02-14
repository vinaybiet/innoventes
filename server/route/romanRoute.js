'use strict';
const Joi = require('joi');
const operationController = require('../controller/romanController');

module.exports = [

    {
        method: 'POST',
        path: '/v1/operation',
        config: {
            description: 'Roman operation api',
            tags: ['api', 'roman'],
            plugins: {
                'hapi-swagger': {
                    responses: {
                        '406': {'description': 'Result is less than zero'},
                        '500':{'description': 'Internal Server Error'},
                        '400':{'description': 'Not Found'}
                    }
                }
            },
            validate:{
              payload:{
                  firstRoman:Joi.string().required().regex(/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/).example("X"),
                  secondRoman:Joi.string().required().regex(/^M*(?:D?C{0,3}|C[MD])(?:L?X{0,3}|X[CL])(?:V?I{0,3}|I[XV])$/).example("VI"),
                  operand:Joi.string().required().allow('+','-','*','/').example('+')
              }
            },
            response:{
              schema:{
                result:Joi.string()
              }
            },
            handler: operationController.matheMaticalOperation
        }
    }
];