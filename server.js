const express = require('express');
const yargs = require('yargs');
const request = require('request');
const axios = require('axios');
const os = require('os');
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.endianness());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.networkInterfaces());
// console.log(os.platform());
// console.log(os.userInfo().username);
const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);
