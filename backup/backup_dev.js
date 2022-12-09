import { ApolloServer, gql } from "apollo-server";
import { prayerTime } from "./api/index.js";

let timmings = [];

prayerTime()
  .then((response) => {
    const results = Object.values(response);
    for (const item of results) {
      const parsed = Object.entries(item);
      timmings.push(parsed[0][1]);
      console.log(timmings);
    }
  })
  .catch((err) => {
    console.log(err);
  });
const typeDefs = gql`
  type Timming {
    Fajr: String
    Sunrise: String
    Dhuhr: String
    Asr: String
    Sunset: String
    Maghrib: String
    Isha: String
    Imsak: String
    Midnight: String
    Lastthird: String
    Firstthird: String
  }
  type Query {
    timmings: [Timming]
  }
`;

const resolvers = {
  Query: {
    timmings: () => timmings,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
