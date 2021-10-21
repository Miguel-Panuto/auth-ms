const jwt = require('jsonwebtoken');

const fileName = 'TokenService';

module.exports = ({
  logger,
  config: {
    jwt: { secret },
  },
}) => ({
  createToken: (id) => {
    const callName = `${fileName}.createToken()`;
    logger.info(`${callName} entered with id: ${id}`);
    return jwt.sign({ id }, secret);
  },

  pickPayload: (token) => {
    const callName = `${fileName}.pickPayload()`;
    logger.info(`${callName} entered with id: ${token}`);
    try {
      return jwt.verify(token, secret);
    } catch (err) {
      throw new Error('wrong token');
    }
  },
});
