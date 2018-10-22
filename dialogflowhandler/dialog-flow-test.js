var apiai = require('apiai');
var app = apiai('d69c2a64140b46bd8b30ff5078a6cf80');

let options = {
            sessionId: 'sessionId'
            }
var getRes = function(query) {
    var request = app.textRequest(query, options);

    var getResp = new Promise((resolve, rejected)=>{
        request.on('error', function(error) {
            reject(error);
            //console.log('========='+err)
        });
        request.on('response', function(response) {
            resolve(response.result.fulfillment.speech);
            //console.log(response.result.fulfillment.speech)
        });
    })    

    request.end();
    return getResp
}

const responseFromAPI = new Promise(function (resolve, reject) {
    
});

getRes('hello').then(function(res){console.log(res)}).catch((err)=> {console.log('========='+err)});
//getRes('hello');
