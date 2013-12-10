var fs = require('fs');
var assert = require('assert');
var detect = require('../index');

var mac = fs.readFileSync(__dirname+'/mac');
var unix = fs.readFileSync(__dirname+'/unix');
var dos = fs.readFileSync(__dirname+'/dos');

assert.equal(detect(dos).platform, 'dos');
assert.equal(detect(unix).platform, 'unix');
assert.equal(detect(mac).platform, 'mac');

assert.equal(detect(dos).EOL, '\r\n');
assert.equal(detect(unix).EOL, '\n');
assert.equal(detect(mac).EOL, '\r');
