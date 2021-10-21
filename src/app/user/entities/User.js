const bcrypt = require('bcrypt');

module.exports = (user) => ({
  userId: user.id || null,
  email: user.email || null,
  password: user.password || null,
});
