import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { userDataIp, userDataLocation } from "./grabbs/fetchingData.js";

const app = express();

function getUserLocation(userIp) {
  const schema = {
    ip: buildSchema(`
      type Query {
        ip: String,
        risk: Int,
        risk_level: String,
        message: String,
        cidr: String,
        asn: String,
        country: String,
        country_code: String,
        country_calling_code: String,
        continent: String,
        continent_code: String,
        city: String,
        region: String
      }
    `),
  };
  userDataLocation(userIp).then((res) => {
    console.log(res.data.ip);
    const root = {
      ip: () => {
        return data.ip;
      },
    };
  });
}

const schema = {
  ip: buildSchema(`
    type Query {
      ip: String
    }
  `),
};
userDataIp()
  .then((data) => {
    const root = {
      ip: () => {
        return data.ip;
      },
    };
    app.use(
      "/your/ip",
      graphqlHTTP({
        schema: schema.ip,
        rootValue: root,
        graphiql: true,
      })
    );
    // getUserLocation(data.ip);
  })
  .catch((err) => {
    console.log(err);
  });

export default app;
