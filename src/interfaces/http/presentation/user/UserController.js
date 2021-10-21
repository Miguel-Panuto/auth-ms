const fileName = 'UserController';

module.exports = ({ logger, loginUsecase, refreshUserUsecase }) => ({
  login: async (req, res) => {
    const callName = `${fileName}.login()`;
    const { body } = req;
    logger.info(`${callName} entered with email: ${body.email}`);
    try {
      const token = await loginUsecase.login(body);
      const status = token ? 200 : 204;
      return res.status(status).json({ token });
    } catch (err) {
      logger.error(`${callName} error ocoured: ${err}`);
      return res.status(403).json({ error: err.message });
    }
  },

  refreshUser: async (req, res) => {
    const callName = `${fileName}.refreshUser()`;
    const { token } = req.body;
    logger.info(`${callName} entered with token: ${token}`);
    try {
      const user = await refreshUserUsecase.refresh(token);
      const status = user ? 200 : 204;
      return res.status(status).json(user);
    } catch (err) {
      logger.error(`${callName} error ocoured: ${err}`);
      return res.status(403).json({ error: err.message });
    }
  },
});
