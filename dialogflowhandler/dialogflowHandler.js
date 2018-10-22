var apiai = require('apiai');
var app = '';
class dialogflowHandler {
    
    constructor(token){
        console.log('Initializing apiai')
        app = apiai(token);
    }

    // Function which returns speech from api.ai
    getRes(sessionId, query, context) {
        let options = {
            sessionId: sessionId
            /* contexts: [
                {
                    name: 'context_number_one',
                    parameters: {
                        'some_parameter_of_context': 'parameter value 1'
                    }
                }
            ] */
        };
        var request = app.textRequest(query, options);
        const responseFromAPI = new Promise(function (resolve, reject) {
            request.on('error', function(error) {
                reject(error);
            });
            request.on('response', function(response) {
                resolve(response.result.fulfillment.speech);
            });
        });
        request.end();
        return responseFromAPI;
    };
}

module.exports.DialogflowHandler = dialogflowHandler;