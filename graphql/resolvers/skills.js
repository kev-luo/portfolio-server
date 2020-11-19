const Skill = require('../../models/Skill');

module.exports = {
  Query: {
    getSkills: (root, args) => {
      return Skill.find({});
    },
    getSkill: (root, args) => {
      return Skill.findById(args.skillId);
    }
  },
  Mutation: {
    addSkill: (root, args) => {
      return Skill(args).save();
    }
  }
}