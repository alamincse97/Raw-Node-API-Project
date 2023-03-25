/*
Title : Uptime Monitoring Application
Description: A RESTFul API to monitor up or down time of user defined links
Author: Md.Al-Amin
Date: 24/03/23
*/

// dependenceies
const url = require('url');
const {StringDecoder} = require('string_decoder');
// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g)
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    req.on('data', (buffer) => {
        realData += decoder.end();
    });

    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
        // response handle 
    res.end('Hello Programmer');
    });
};

module.exports = handler;