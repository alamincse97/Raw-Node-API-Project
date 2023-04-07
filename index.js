/*
* Title: Uptime Monitoring Application
* Description: A RESTFul API to monitor up or down time of user defined links
* Author : Md.Al-Amin
* Date : 05/04/2023
*/

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// @TODO pore muche dibo
data.read('test', 'newFile', (err, data) => {
    console.log(err, data);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();