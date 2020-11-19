const projectsResolvers = require('./projects');
const skillsResolvers = require('./skills');

module.exports = {
  Query: {
    ...projectsResolvers.Query,
    ...skillsResolvers.Query,
  },
  Mutation: {
    ...projectsResolvers.Mutation,
    ...skillsResolvers.Mutation,
  }
}