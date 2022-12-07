import { ApolloServer, gql } from "apollo-server";
import { prayerTime } from "./fetch.js";

prayerTime()
  .then((response) => {
    const results = Object.values(response);

    // let timmings = [{ Fajr: "04.00 AM" }];
    let timmings = [];

    for (const item of results) {
      const parsed = Object.entries(item);
      timmings.push(parsed[0][1]);
    }

    console.log(timmings);

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
  })
  .catch((err) => {
    console.log(err);
  });
