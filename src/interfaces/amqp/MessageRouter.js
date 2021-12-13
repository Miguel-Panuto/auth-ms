module.exports = ({ pubSub, messageController }) => ({
  initiateRoutes: async () => {
    await pubSub.subscribe('userCreation', messageController.onUserCreate);
    await pubSub.subscribe('userChange', messageController.onUserChange);
  },
});
