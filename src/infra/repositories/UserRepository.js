const fileName = 'UserRepository';

module.exports = class UserRepository {
  constructor({ logger, userModel }) {
    this.logger = logger;
    this.userModel = userModel;
  }

  async createUser(user) {
    const callName = `${fileName}.createUser()`;
    this.logger.info(`${callName} entered with body: ${JSON.stringify(user)}`);
    return this.userModel.create(user);
  }

  async findUserByEmail(email) {
    const callName = `${fileName}.findUserByEmail()`;
    this.logger.info(`${callName} entered with email: ${email}`);
    return this.userModel.findOne({ email });
  }
  
  async findUserById(id) {
    const callName = `${fileName}.findUserById()`;
    this.logger.info(`${callName} entered with id: ${id}`);
    return this.userModel.findById(id);
  }

  async delete(id) {
    const callName = `${fileName}.delete()`;
    this.logger.info(`${callName} entered with id: ${id}`);
    return this.userModel.deleteOne({ _id: id });
  }
};
