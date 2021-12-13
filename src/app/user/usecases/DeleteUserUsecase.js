const fileName = 'DeleteUserUsecase';

module.exports = ({ logger, userRepository }) => ({
  deleteWithId: (id) => {
    const callName = `${fileName}.deleteWithId()`;
    logger.info(`${callName} - entered with user id: ${id}`);
    return userRepository.delete(id);
  }  
})