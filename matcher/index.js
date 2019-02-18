'use strict';
const patterns = require('../patterns');
const XRegExp = require('xregexp');

let matchPattern = (userInput, callback) => {
  let getResult = patterns.find(item => {
    if(XRegExp.test(userInput, XRegExp(item.pattern, "i"))){
      return true;
    }
  });

  if(getResult){
    return callback({
      intent: getResult.intent,
      entities2: createEntities(userInput, getResult.location),
      entities: createEntities(userInput, getResult.pattern),
      priority : getResult.priority
    });
  }

  else{
    return callback({});
  }
}






let createEntities = (userInput, pattern) => {
  return XRegExp.exec(userInput, XRegExp(pattern, "i"))
}

module.exports = matchPattern;
