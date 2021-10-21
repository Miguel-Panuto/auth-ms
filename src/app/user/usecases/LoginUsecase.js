const fileName = 'LoginUsecase';

const defaultMessage = 'Wrong email/password'

module.exports = ({ logger, userRepository, cryptService, tokenService }) => ({
  login: async (user) => {
    const callName = `${fileName}.login()`;
    logger.info(
      `${callName} entered with body: ${JSON.stringify({
        ...user,
        password: '****',
      })}`
    );
    const userFinded = await userRepository.findUserByEmail(user.email);
    if (!cryptService.verify(user.password, userFinded.password))
      throw new Error(defaultMessage);
    
    return tokenService.createToken(userFinded._id);
  },
});
