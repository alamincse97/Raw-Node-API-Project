/*
Title : Sample Handler
Description: Sample Handler
Author: Md.Al-Amin
Date: 25/03/23
*/

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;