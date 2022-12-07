import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Query {
        hello: String
    }
`);

const root = {
  Query: {
    hello: () => "Hello World !",
  },
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphql: true,
  })
);

export default app;
