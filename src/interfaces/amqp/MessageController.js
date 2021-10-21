const fileName = 'MessageController';

module.exports = ({ logger, createUserUsecase }) => ({
  onUserCreate: async (msg) => {
    const callName = `${fileName}.onUserCreate()`;
    logger.info(
      `${callName} entered, with payload: ${JSON.stringify({
        ...msg,
        password: '****',
      })}`
    );
    try {
      await createUserUsecase.create(msg);
    } catch (err) {
      logger.error(`${callName} error ocoured: ${err}`);
    }
  },
});
