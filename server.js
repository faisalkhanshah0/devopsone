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
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

var port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server is running at : ${port}`);
});
