const config = require('./config.json');

module.exports = {
  ...config,
  amqp: {
    ...config.amqp,
    uri: process.env.AMQP_URI || config.amqp.uri,
  },
  jwt: {
    secret: process.env.JWT_SECRET || config.jwt.secret,
  },
  cryptSalt: process.env.CRYPT_SALT || config.cryptSalt,
  db: {
    uri: process.env.MONGO_CONNECT || config.db.uri,
    auth: {
      username: process.env.MONGO_USER || config.db.auth.username,
      password: process.env.MONGO_PASS || config.db.auth.password,
    },
  },
};
