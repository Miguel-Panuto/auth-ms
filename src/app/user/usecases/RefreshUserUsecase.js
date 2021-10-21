const fileName = 'RefreshUserUsecase';

module.exports = ({ logger, userRepository, tokenService }) => ({
  refresh: async (token) => {
    const callName = `${fileName}.refresh()`;
    logger.info(`${callName} entered with token: ${token}`);
    const { id } = tokenService.pickPayload(token);
    const { _id } = await userRepository.findUserById(id);
    const newToken = tokenService.createToken(_id);
    return { id: _id, token: newToken };
  },
});
