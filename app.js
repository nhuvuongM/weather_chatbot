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
      console.log(`day : ${callback.entities.day}`)

      break;

    case 'Current weather':
      console.log(`location : ${callback.entities.city}`);
      //Get the current weather condition
      weather(callback.entities.city).then(function(data){
        var curWeather = data.current.condition.text
        console.log("The current weather condition is: "+curWeather);
      });
      //Get the current temperature
      //Depends on the temperature, the bot will answer differently
      weather(callback.entities.city).then(function(data){
        var temp = data.current.temp_c
        if(temp<5){
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" degrees Celcius")
          console.log("It's "+colors.blue.bold("very cold."))
          console.log("It will feels like: "+data.current.feelslike_c+" degrees Celcius")
          console.log("\n")

        }else if (temp<13) {
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" degrees Celcius")
          console.log("It's beginning to be "+colors.green.bold("cold.")+" Cover up!")
          console.log("It will feels like: "+data.current.feelslike_c+" degrees Celcius")
          console.log("\n")

        }else if (temp < 20) {
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" degrees Celcius")
          console.log("It is "+colors.yellow.bold("temperate."))
          console.log("It will feels like: "+data.current.feelslike_c+" degrees Celcius")
          console.log("\n")

        }else if (temp<30) {
          console.log("The current temperature in "+ callback.entities.city+" is "+temp+" degrees Celcius")
          console.log("It is "+colors.red.bold("hot ")+" ! Let's wear a tee-shirt !")
          console.log("It will feels like: "+data.current.feelslike_c+" degrees Celcius")
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
