import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    const modifiedData = {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
      //   confirmed: data.confirmed,
      //   recovered: data.recovered,
      //   deaths: data.deaths,
      //   lastUpdate: data.lastUpdate,
    };
    return modifiedData;
  } catch (error) {}
};
