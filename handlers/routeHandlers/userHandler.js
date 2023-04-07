/*
* Title: User Handler
* Description: Handler to handle user related routes
* Author: Md.Al-Amin
* Date: 07/04/2023
*/

// module scaffolding
const handler = {};

handler.userHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'This is a user url', 
    });
};

module.exports = handler;