const { UserInputError } = require('apollo-server');
const Message = require('../../models/Message');
const { validateMessage } = require('../../utils/validators');

module.exports = {
  Mutation: {
    createMessage: (root, args) => {
      const { name, email, body } = args;
      const { errors, valid } = validateMessage(name, email, body);

      if(!valid) {
        throw new UserInputError('Errors', { errors })
      }

      return Message(args).save();
    }
  }
}