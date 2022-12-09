import axios from "axios";

const token = process.env.TOKEN;
const endpoint = `/${token}/Indonesia/Jakarta/day`;

const config = {
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_API_KEY,
    "X-RapidAPI-Host": process.env.RAPID_API_HOST,
    "Accept-Encoding": "application/json",
  },
};

export function prayerTime() {
  try {
    return new Promise((resolve, reject) => {
      axios
        .get(endpoint, config)
        .then(({ data }) => {
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
