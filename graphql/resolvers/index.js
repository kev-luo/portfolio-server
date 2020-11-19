const projectsResolvers = require('./projects');
const skillsResolvers = require('./skills');
const messagesResolvers = require('./message');

module.exports = {
  Query: {
    ...projectsResolvers.Query,
    ...skillsResolvers.Query,
    ...messagesResolvers.Query,
  },
  Mutation: {
    ...projectsResolvers.Mutation,
    ...skillsResolvers.Mutation,
    ...messagesResolvers.Mutation,
  }
}