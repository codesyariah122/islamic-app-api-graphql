import app from "./api/index.js";
import consola from "consola";
import dotenv from "dotenv";

dotenv.config();

app.listen(4000, () => consola.info("Server graphql started"));
