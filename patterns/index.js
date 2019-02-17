// In this file we defined all required patterns of our chatbot.

const patternDict = [
  {
    pattern : '\\b[\ ](?<day>([a-z]+))[\ ]?[\?]',
    //pattern: '\\bin[\ ](?<city>([A-za-z]+[\ ]?[A-Za-z]+))[\ ](?<tomorrow>(\b[a-z]+?))[\ ]?[\?]',
    intent : 'tomorrow',
    priority : 3
  },
  {
    pattern: '\\bin[\ ](?<city>([A-za-z]+[\ ]?[A-Za-z]+))[\s ]?',
    intent : 'Current weather',
    priority : 2
  },
  {
    pattern : '\\b(Hi|Hello|Hey)\\b',
    intent : 'Hello',
    priority : 1
  },
  {
    pattern :'\\b(bye|exit)\\b',
    intent : 'Exit',
    priority : 1
  }
];

module.exports = patternDict;
