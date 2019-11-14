'use strict';

const { Service } = require('egg');

class User extends Service {
  async createUser(username, password) {
    const created = await this.ctx.model.User.createUser(username, password);

    return created;
  }

  async login(username, password) {
    const found = await this.ctx.model.User.login(username, password);
    return found;
  }
}

module.exports = User;
