/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1573024951825_6963';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    security: {
      csrf: {
        enable: false,
      },
      domainWhiteList: [ 'http://localhost:8080' ],
    },
    sequelize: {
      dialect: 'postgres',
      host: 'localhost',
      database: 'mi_local_test',
      port: 5432,
      username: 'postgres',
      password: '987654',
      pool: {
        max: 10,
        min: 1,
      },
    },
    redis: {
      client: {
        host: 'localhost',
        port: '6379',
        db: 0,
        password: '',
      },
    },
    onerror: {
      json(err, ctx) {
        const { code, httpStatusCode, httpMsg } = err;
        if (httpStatusCode) ctx.statusCode = httpStatusCode;
        ctx.body = {
          code,
          msg: httpMsg,
        };
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
