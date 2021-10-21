module.exports = ({ pubSub, messageController }) => ({
  initiateRoutes: async () => {
    await pubSub.subscribe('userCreation', messageController.onUserCreate);
  },
});
