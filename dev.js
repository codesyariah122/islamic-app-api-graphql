import app from "./api/index.js";
import consola from "consola";

app.listen(4000, () =>
  consola.log("Running a GraphQL API server at http://localhost:4000/graphql")
);
