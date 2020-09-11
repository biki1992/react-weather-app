import axios from "axios";

const weatherApi = () => {
  axios.create({
    baseURL: "http://api.openweathermap.org/data/2.5/",
    // timeout: 7500,
  });
};

export default weatherApi;
