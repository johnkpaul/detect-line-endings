'use strict';

var regexes = {
  'mac': /\r[^\n]/,
  'unix': /[^\r]\n/,
  'dos': /\r\n/
};

var lineEndings = {
  'mac': '\r',
  'unix': '\n',
  'dos': '\r\n'
};
var legacyLineEndings = [
  'mac'
];

module.exports = exports = function(str, legacy){
  for(var platform in regexes){
    if (!legacy && (platform in legacyLineEndings)){
      continue;
    }
    var regex = regexes[platform];
    if(regex.test(str)){
      return {
        platform: platform,
        EOL: lineEndings[platform]
      };
    }
  }
};
