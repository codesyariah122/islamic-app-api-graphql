import axios from "axios";

const token = "xaxbbczczaaxaa";
const endpoint = `https://islamic-api-collect.vercel.app/api/islamic/v1/${token}/Indonesia/Jakarta/day`;

const config = {
  headers: {
    "X-RapidAPI-Key": "27bd9a3d0bmshb459a56fb843892p105ab4jsn586dae0c9415",
    "X-RapidAPI-Host": "aladhan.p.rapidapi.com",
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
