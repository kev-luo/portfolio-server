require("dotenv").config();
const mongoose = require("mongoose");
const { ApolloServer } = require("apollo-server");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers");

const PORT = process.env.PORT || 5000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGODB_URI, {
    useFindAndModify: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("connected to db");
    server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`listening on port ${PORT}`);
  })
  .catch((err) => {
    console.error(err);
  });
