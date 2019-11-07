'use strict';

const { Controller } = require('egg');

class SiteController extends Controller {
  async createUser(username, password) {}
  async login(username, password) {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async logout(username, password) {}
}

module.exports = SiteController;
