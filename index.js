var Hapi = require('hapi');
const vision = require('vision');
const inert = require('inert');
const hapiSwagger = require('hapi-swagger');
const pack = require('./package');

var swaggerOptions = {
    basePath: '/v1',
    sortEndpoints: 'path',
    expanded: 'none',
    pathPrefixSize: 2,
    info: {
        'title': 'Innvoventes Assignment Documentation',
        'version': pack.version
    },
    securityDefinitions: {
        'Bearer': {
            'type': 'apiKey',
            'name': 'Authorization',
            'in': 'header'
        }
    }
};

var server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

server.register([
    inert,
    vision,
    {
        register: hapiSwagger,
        options: swaggerOptions
    }
], (err) => {

    if (err) {
        throw err;
    }

    server.route(require('./server/route'));

    server.start((err) => {

        if (err) {
            throw err;
        }
        console.log(`Server running at: ${server.info.uri}`);
    });
});
