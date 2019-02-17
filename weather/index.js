"use strict";
const axios = require("axios");
const apikey = "86dbec0821fc4858a9b164909191302";

const getWeather = location => {
  return new Promise (async (resolve, reject) => {
    try{
      const weatherConditions = await axios.get(
        "http://api.apixu.com/v1/forecast.json",
        {
          params: {
            key: apikey ,
            q: location ,
            days: 3
          }
        });
        resolve(weatherConditions.data)
      }
      catch(error){
        reject(error);
      }
    });
  }

  module.exports = getWeather;
