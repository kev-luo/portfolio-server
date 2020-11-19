const { gql } = require('apollo-server');

module.exports = gql`
  type Project {
    id: ID!
    name: String!
    description: String!
    repo: String!
    deployed: String!
    skills: [Skill]!
  }
  type Skill {
    id: ID!
    name: String!
    createdAt: String!
    projects: [Project]!
  }
  input ProjectInfo {
    name: String!
    description: String!
    skills: [String!]!
    repo: String!
    deployed: String
  }
  type Query {
    getProjects: [Project]!
    getProject(projectId: ID!): Project!
    getSkills: [Skill]!
    getSkill(skillId: ID!): Skill!
  }
  type Mutation {
    addProject(projectInfo: ProjectInfo): Project!
    addSkill(name: String!): Skill!
  }
`