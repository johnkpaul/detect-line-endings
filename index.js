'use strict';

var regexes = {
  'dos': /\r\n/,
  'unix': /[^\r]\n/,
  'mac': /\r/
};

var lineEndings = {
  'unix': '\n',
  'dos': '\r\n',
  'mac': '\r'
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
