const projectsResolvers = require('./projects');
const skillsResolvers = require('./skills');
const contactsResolvers = require('./contacts');

module.exports = {
  Query: {
    ...projectsResolvers.Query,
    ...skillsResolvers.Query,
    ...contactsResolvers.Query,
  },
  Mutation: {
    ...projectsResolvers.Mutation,
    ...skillsResolvers.Mutation,
    ...contactsResolvers.Mutation,
  }
}