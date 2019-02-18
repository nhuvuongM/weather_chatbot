// Interactive interface

'use strict';

const Readline = require('readline');
const matcher = require('./matcher');
const weather = require('./weather');
const colors = require('colors/safe');


const rl = Readline.createInterface ({
 input : process.stdin ,
 output : process.stdout ,
 terminal : false
});

rl.setPrompt('> ');
rl.prompt();
rl.on('line', (userReply) => {

 matcher(userReply, callback => {
  switch (callback.intent) {
    case 'Hello':
        console.log(colors.yellow.bold("Hi ! And welcome to the Weather Chatbot! Ask me the weather of any city!"))
        console.log(colors.yellow.bold("I can give you today weather or tomorrow. Just ask!"))
        break;

    case'tomorrow':
      console.log(`You ask weather for ${callback.entities.day} in ${callback.entities2.city}`)
      var location = (`${callback.entities2.city}`)

      weather(callback.entities2.city).then(function(data) {
        var forecastObj = data.forecast
        var tomorrowDate = Object.values(forecastObj)[0][1].date
        var avgTemp = Object.values(forecastObj)[0][1].day.avgtemp_c
        var conditionWeather = Object.values(forecastObj)[0][1].day.condition.text

        if(avgTemp<5){
          console.log("Tomorrow date: " + tomorrowDate)
          console.log("Tomorrow the temperature in "+ callback.entities2.city+" will be "+colors.bold(avgTemp)+" °C")
          console.log("It's "+colors.blue.bold("very cold."))
          console.log("The condition weather will be "+conditionWeather)
          console.log("\n")

        }else if (avgTemp<13) {
          console.log("Tomorrow date: " + tomorrowDate)
          console.log("Tomorrow the temperature in "+ callback.entities2.city+" will be "+colors.bold(avgTemp)+" °C")
          console.log("It's beginning to be "+colors.green.bold("cold.")+" Cover up!")
          console.log("The condition weather will be "+conditionWeather)
          console.log("\n")

        }else if (avgTemp < 20) {
          console.log("Tomorrow date: " + tomorrowDate)
          console.log("Tomorrow the temperature in "+ callback.entities2.city+" will be "+colors.bold(avgTemp)+" °C")
          console.log("It is "+colors.yellow.bold("temperate."))
          console.log("The condition weather will be "+conditionWeather)
          console.log("\n")

        }else if (avgTemp<30) {
          console.log("Tomorrow date: " + tomorrowDate)
          console.log("Tomorrow the temperature in "+ callback.entities2.city+" will be "+colors.bold(avgTemp)+" °C")
          console.log("It is "+colors.red.bold("hot ")+" ! Let's wear a tee-shirt !")
          console.log("The condition weather will be "+conditionWeather)
          console.log("\n")

        }
      })


      break;

    case 'Current weather':
      console.log(`You ask weather for today in ${callback.entities.city}`)

      //Get the current weather condition
      weather(callback.entities.city).then(function(data){

        var curWeather = data.current.condition.text
        console.log("The current weather condition is: "+curWeather);
      });

      weather(callback.entities.city).then(function(data){
        var temp = data.current.temp_c
        if(temp<5){
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" °C")
          console.log("It's "+colors.blue.bold("very cold."))
          console.log("It will feels like: "+data.current.feelslike_c+" °C")
          console.log("\n")

        }else if (temp<13) {
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" °C")
          console.log("It's beginning to be "+colors.green.bold("cold.")+" Cover up!")
          console.log("It will feels like: "+data.current.feelslike_c+" °C")
          console.log("\n")

        }else if (temp < 20) {
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" °C")
          console.log("It is "+colors.yellow.bold("temperate."))
          console.log("It will feels like: "+data.current.feelslike_c+" °C")
          console.log("\n")

        }else if (temp<30) {
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" °C")
          console.log("It is "+colors.red.bold("hot ")+" ! Let's wear a tee-shirt !")
          console.log("It will feels like: "+data.current.feelslike_c+" °C")
          console.log("\n")

        }
        });
          break;
       case 'Exit':
          console.log(colors.cyan.bold('Bye'));
          break;
       default:
          console.log('I dont understand');

   }
 })
})
