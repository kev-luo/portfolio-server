const Project = require("../../models/Project");

module.exports = {
  Query: {
    getProjects: () => {
      return Project.find({}).populate('skills');
    },
    getProject: async (root, args) => {
      return Project.findById(args.projectId).populate('skills')
    },
  },
  Mutation: {
    addProject: (root, { projectInfo }) => {
      return Project(projectInfo).save();
    }
  }
};
