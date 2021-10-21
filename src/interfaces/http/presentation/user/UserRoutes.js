module.exports = ({ userController }) => [
  {
    method: 'post',
    path: '/user',
    handler: userController.login,
  },
  {
    method: 'put',
    path: '/user',
    handler: userController.refreshUser,
  },
];
