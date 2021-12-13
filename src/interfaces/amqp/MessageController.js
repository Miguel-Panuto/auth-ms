const fileName = 'MessageController';

module.exports = ({ logger, createUserUsecase, deleteUserUsecase }) => ({
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
  
  onUserChange: async (msg) => {
    const callName = `${fileName}.onUserChange()`;
    logger.info(`${callName} - enteredm with payload: ${JSON.stringify(msg)}`);
    if(msg.event_type !== 'delete') return;
    
    try {
      await deleteUserUsecase.deleteWithId(msg.user.id);
    } catch(err) {
      logger.error(`${callName} error ocoured: ${err}`);
    }
  }
});
