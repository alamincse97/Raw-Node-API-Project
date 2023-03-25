/*
Title : Routes
Description: Application Routes
Author: Md.Al-Amin
Date: 25/03/23
*/

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;