'use strict';
const path = require('path');

module.exports = app => {
  const directory = path.join(app.config.baseDir, 'app/error');
  app.loader.loadToApp(directory, 'error', {
    caseStyle: 'upper',
  });
  // set redis session store
  // session store must have 3 methods
  // define sessionStore in `app.js` so you can access `app.redis`
  app.sessionStore = {
    async get(key) {
      const res = await app.redis.get(key);
      if (!res) return null;
      return JSON.parse(res);
    },

    async set(key, value, maxAge) {
      // maxAge not present means session cookies
      // we can't exactly know the maxAge and just set an appropriate value like one day
      if (!maxAge) maxAge = 24 * 60 * 60 * 1000;
      value = JSON.stringify(value);
      await app.redis.set(key, value, 'PX', maxAge);
    },

    async destroy(key) {
      await app.redis.del(key);
    },
  };
};
