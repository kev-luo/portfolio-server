const Project = require("../../models/Project");

module.exports = {
  Query: {
    getProjects: (root, arg) => {
      return Project.find({});
    },
    getProject: async (root, arg) => {
    },
  },
};
