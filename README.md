# detect-line-endings

[![build status](https://secure.travis-ci.org/johnkpaul/detect-line-endings.png)](http://travis-ci.org/johnkpaul/detect-line-endings)

This is a utility that will return the platform and line ending character for a given string

It returns an object with properties, 'platform' and 'EOL';

```javascript
var fs = require('fs');
var detect = require('detect-line-endings');
var dos = fs.readFileSync(__dirname+'/dos');

assert.equal(dos, {platform: 'dos', EOL: '\r\n'});
```

Thanks to the work of [Wes Mason](https://github.com/1stvamp) for his better regular expressions. 
