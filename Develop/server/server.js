const express = require('express');
const { ApolloServer } = require("apollo-server-express");
const path = require('path');
const db = require('./config/connection');
const { typeDefs, resolvers } = require("./schemas");
const { autMiddleware } = require("./utils/auth");

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: autMiddleware,
  persistedQueries: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
};


const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({app});

  db.once("open", () => {
    app.listen(PORT, () => {
    console.log(`🌍 Server now running on ${PORT}!`);
    console.log(`Use Graaphql at http://localhost:${PORT}${server.graphqlPath!}`)
    });
  });
};



