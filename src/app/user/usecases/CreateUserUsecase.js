const makeUser = require('src/app/user/entities/User');

const fileName = 'CreateUserUsecase';

module.exports = ({ logger, userRepository, cryptService }) => ({
  create: async (user) => {
    const callName = `${fileName}.createUser()`;
    const entity = makeUser({
      ...user,
      password: cryptService.encrypt(user.password),
    });
    logger.info(`${callName} entered with body: ${JSON.stringify(entity)}`);
    await userRepository.createUser(entity);
  },
});
