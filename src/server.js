const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const ini = async () => {
    const server = Hapi.Server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '9.3.9.3',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

ini();