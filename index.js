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

module.exports = exports = function(str){
  for(var platform in regexes){
    var regex = regexes[platform];
    if(regex.test(str)){
      return {
        platform: platform,
        EOL: lineEndings[platform]
      };
    }
  }
};
