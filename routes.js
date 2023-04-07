/*
* Title: Routes
* Description: Application Routes
* Author: Md.Al-Amin
* Date: 05/04/2023
*/

// dependencies
const {sampleHandler} = require('./handlers/routeHandlers/sampleHandlers');
const  {userHandler} = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler
};

module.exports = routes;