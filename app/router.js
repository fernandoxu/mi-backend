'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.user.index);
  router.post('/user', controller.user.createUser);
  /**
   *
   * @api {POST} /user 创建用户
   * @apiName 创建用户
   * @apiGroup user
   * @apiVersion  1.0.0
   *
   *
   * @apiParam  {String} username 用户名
   * @apiParam  {String} password 密码
   *
   * @apiSuccess {Integer} code 响应码
   * @apiSuccess {Object} data 数据
   * @apiSuccess {Object} data.user 用户对象
   * @apiSuccess {String} data.user.id 用户id(UUIDv4)
   *
   * @apiParamExample Request-Example:
   * {
   *     username : 'xxx',
   *     password : 'xx123!'
   * }
   *
   *
   * @apiSuccessExample Success-Response:
   * {
   *   "code": 0,
   *   "data": {
   *       "user": {
   *           "id": "31494e11-e9d0-4db3-aa38-b2936e8c9e86",
   *           "username": "xxxxx",
   *           "updatedAt": "2019-11-14T04:02:06.246Z",
   *           "createdAt": "2019-11-14T04:02:06.246Z"
   *       }
   *   }
   * }
   *
   *
   */
  router.post('/login', controller.user.login);
  router.post('/logout', controller.user.logout);
};
