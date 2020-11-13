const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-mongoose-boilerplate API documentation',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-mongoose-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `https://nodejs-boilerplate-n1.herokuapp.com/:${config.port}/v1`,
    },
  ],
};

module.exports = swaggerDef;
