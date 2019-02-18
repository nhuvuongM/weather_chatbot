// In this file we defined all required patterns of our chatbot.

const patternDict = [
  {
    pattern : '\\b[\ ](?<day>([a-z]+))[\ ]?[\?]',
    //location: '\\bin[\ ](?<city>([A-za-z]+[\ ]?[A-Za-z]+))[\s ]?',
    location : '\\b^(how|what)?.+weather\\sin\\s(?<city>([A-Za-z]+([-\\s](?!the)[A-Za-z]+)?)).+?'+
						'(today|(the\ day\ after\ )?tomorrow)\\b',
    intent : 'tomorrow',
    priority : 3
  },
  {
    pattern: '\\bin[\ ](?<city>([A-za-z]+[\ ]?[A-Za-z]+))[\s ]?',
    location : 0,
    intent : 'Current weather',
    priority : 2
  },
  {
    pattern : '\\b(Hi|Hello|Hey)\\b',
    location : 0,
    intent : 'Hello',
    priority : 1
  },
  {
    pattern :'\\b(bye|exit)\\b',
    location : 0,
    intent : 'Exit',
    priority : 1
  }
];

module.exports = patternDict;
