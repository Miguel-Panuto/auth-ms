const bcrypt = require('bcrypt');

const fileName = 'CryptService';

module.exports = ({ logger, config: { cryptSalt } }) => ({
  encrypt: (content) => {
    const callName = `${fileName}.encrypt()`;
    logger.info(`${callName} entered`);
    return bcrypt.hashSync(content, cryptSalt);
  },

  verify: (content, cryptedContent) => {
    const callName = `${fileName}.verify()`;
    logger.info(`${callName} entered with id: ${cryptedContent}`);
    return bcrypt.compareSync(content, cryptedContent);
  },
});
