import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

function userDataIp() {
  try {
    const baseUrl = process.env.API_IP_DETECTOR;
    return new Promise((resolve, reject) => {
      axios
        .get(baseUrl)
        .then((data) => {
          resolve(data.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  } catch (err) {
    console.error(err);
  }
}

async function userDataLocation(userIp) {
  try {
    const baseUrl = process.env.RAPID_API_GEO_API_ENDPOINT;
    const rapidApiKey = process.env.RAPID_API_GEO_API_KEY;
    const rapidApiHost = process.env.RAPID_API_GEO_API_HOST;
    const config = {
      params: {
        ip: userIp,
      },
      headers: {
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": rapidApiHost,
      },
    };
    const restApi = await axios.get(baseUrl, config);
    return restApi;
  } catch (err) {
    console.error(err);
  }
}

export { userDataIp, userDataLocation };
