/*
* Title: Uptime Monitoring Application
* Description: A RESTFul API to monitor up or down time of user defined links
* Author : Md.Al-Amin
* Date : 05/04/2023
*/
// dependencies
const http = require('http');

// app object - module scaffolding
const app = {};

// configuration
app.config = {};

// create server
app.createServer = () => {
    const server = http.createServer();
}

// handle Request Response
app.handleReqRes = (req, res) => {
    // response handle
    res.end('Hello World');
};