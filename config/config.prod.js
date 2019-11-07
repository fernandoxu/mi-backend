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
  config.keys = appInfo.name + '9fd8a7gdf88127363nmmkkerhh';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    sequelize: {
      dialect: 'postgres',
      host: 'localhost',
      database: 'mi_main',
      port: 5432,
      username: 'postgres',
      password: '987654',
      pool: {
        max: 10,
        min: 1,
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
